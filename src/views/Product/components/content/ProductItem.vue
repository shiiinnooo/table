<template>
  <div class="row">
    <div class="col-8">
      <img class="w-100 mb-3" :src="product.imageUrl" alt="" />
      <div v-for="image in product.imagesUrl" :key="image">
        <img
          v-if="image !== product.imageUrl"
          class="w-100 my-3"
          :src="image"
          alt=""
        />
      </div>
    </div>
    <div class="col-4">
      <div class="product-title">
        <h4 class="py-3 fw-normal">
          {{ product.title }}
        </h4>
      </div>
      <div class="product-content">
        <p class="fs-5">
          <span
            class="text-dark me-2"
            v-if="product.price !== product.origin_price"
          >
            NT. {{ product.price }}
          </span>
          <span
            :class="{
              'text-decoration-line-through':
                product.price !== product.origin_price,
            }"
          >
            NT. {{ product.origin_price }}
          </span>
        </p>
        <button type="button" class="btn btn-secondary" @click="addToCart">
          加入購物車
        </button>
        <p>{{ product.description }}</p>
        <p>{{ product.content }}</p>
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
      id: '',
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
          this.recordPage(this.product);
          // console.log(res);
          console.log(typeof this.product.price);
        } else {
          console.log(res.data.message);
        }
      });
    },
    addToCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.product.id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          console.log(res);
          emitter.emit('update-cart');
        } else {
          console.log(res.data.message);
        }
      });
    },
    recordPage(product) {
      emitter.emit('record-current-page', {
        selected: 'item',
        category: product.category,
        title: product.title,
      });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
