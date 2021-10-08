<template>
  <div class="row">
    <div class="col-8">
      <img class="w-100 mb-3" :src="page.product.imageUrl" alt="" />
      <div v-for="image in page.product.imagesUrl" :key="image">
        <img
          v-if="image !== page.product.imageUrl"
          class="w-100 my-3"
          :src="image"
          alt=""
        />
      </div>
    </div>
    <div class="col-4">
      <div class="product-title">
        <h4 class="py-3 fw-normal">
          {{ page.product.title }}
        </h4>
      </div>
      <div class="product-content">
        <p class="fs-5">
          <span
            class="text-dark me-2"
            v-if="page.product.price !== page.product.origin_price"
          >
            NT. {{ page.product.price }}
          </span>
          <span
            :class="{
              'text-decoration-line-through':
                page.product.price !== page.product.origin_price,
            }"
          >
            NT. {{ page.product.origin_price }}
          </span>
        </p>
        <select class="form-select" v-model.number="qty">
          <option disabled>選擇數量</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <button type="button" class="btn btn-secondary me-1" @click="addToCart">
          加入購物車
        </button>
        <button
          type="button"
          class="btn"
          :class="[
            myFavorite.includes(page.product.id)
              ? 'btn-primary'
              : 'btn-secondary',
          ]"
          @click="$emit('addFavorite', page.product.id)"
        >
          加入我的最愛
        </button>
        <p>{{ page.product.description }}</p>
        <p>{{ page.product.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../../../../assets/javascript/emitter';

export default {
  data() {
    return {
      product: {},
      qty: 1,
    };
  },
  inject: ['page'],
  props: {
    myFavorite: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    addToCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.page.product.id,
        qty: this.qty,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          emitter.emit('update-cart');
          emitter.emit('get-cart-offcanvas');
        } else {
          console.log(res.data.message);
        }
      });
    },
  },
};
</script>
