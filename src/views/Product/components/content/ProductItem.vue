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
        <button type="button" class="btn btn-secondary" @click="addToCart">
          加入購物車
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
    };
  },
  inject: ['page'],
  methods: {
    addToCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.page.product.id,
        qty: 1,
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
