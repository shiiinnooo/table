<template>
  <div class="row">
    <div class="col-md-8">
      <img class="w-100 mb-3" :src="page.product.imageUrl" alt="" />
      <div class="d-none d-md-block" v-for="image in page.product.imagesUrl" :key="image">
        <img
          v-if="image !== page.product.imageUrl"
          class="w-100 my-3"
          :src="image"
          alt=""
        />
      </div>
    </div>
    <div class="col-md-4">
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
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />
        <button type="button" class="btn btn-outline-secondary me-1 w-100 border-2"
          @click="addToCart">
          加入購物車
        </button>
        <div>
          <span v-if="myFavorite.includes(page.product.id)"
            class="material-icons-outlined fs-5 align-text-top me-2 text-primary">
            favorite
          </span>
          <span v-else class="material-icons-outlined fs-5 align-text-top me-2">
            favorite_border
          </span>
          <p
            class="d-inline-block py-3"
            @click="$emit('addFavorite', page.product.id)"
            style="cursor: pointer;"
          >
            <span v-if="myFavorite.includes(page.product.id)">已收藏</span>
            <span v-else class="text-decoration-underline">加入我的最愛</span>
          </p>
        </div>
        <hr />
        <p>{{ page.product.description }}</p>
        <p>{{ page.product.content }}</p>
      </div>
    </div>
    <div class="d-md-none col-12" v-for="image in page.product.imagesUrl" :key="image">
        <img
          v-if="image !== page.product.imageUrl"
          class="w-100 my-3"
          :src="image"
          alt=""
        />
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
