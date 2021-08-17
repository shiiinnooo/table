<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ProductMenu></ProductMenu>
      </div>
      <div class="col-md-9">
        <div>
          <img :src="product.imgUrl" alt="" />
          {{ product.title }}
          <button type="button" class="btn btn-secondary" @click="addToCart">
            加入購物車
          </button>
          <p>{{ product.description }}</p>
          <p>{{ product.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMenu from '../components/ProductMenu.vue';
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      product: {},
      id: '',
    };
  },
  components: {
    ProductMenu,
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
          console.log(res);
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
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
