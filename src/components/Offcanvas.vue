<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
    ref="cartOffcanvas"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">購物車</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="card mb-3 border-0" v-for="item in carts" :key="item.id">
        <div class="row">
          <div class="col-3">
            <img :src="item.product.imageUrl"
              width="80"
              height="80"
              style="object-fit: cover">
          </div>
          <div class="col-7">
            <div class="card-body p-0">
              <h6 class="card-title fs-6">{{ item.product.title }}</h6>
              <div class="card-text">
                <p class="my-1"><span class="me-2">價格</span> NT.{{ item.product.price }}</p>
                <p class="my-1"><span class="me-2">數量</span> {{ item.qty }}</p>
              </div>
            </div>
          </div>
          <div class="col-2">
            <button type="button" class="bg-transparent border border-secondary p-1"
            @click="delCart(item.id)">刪除</button>
          </div>
        </div>
      </div>
      <hr />
      <router-link type="button" to="/checkout/step1"
      class="submit border py-2 w-100 text-light fw-bold text-center"
      style="letter-spacing: 2px"
      @click="$emit('close-offcanvas')">前往結帳</router-link>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import emitter from '../assets/javascript/emitter';

export default {
  // props: {
  //   cartsData: {
  //     type: Array,
  //     default() {
  //       return [];
  //     },
  //   },
  // },
  data() {
    return {
      carts: [],
      cartOffcanvas: '',
    };
  },
  // watch: {
  //   cartsData() {
  //     this.carts = this.cartsData;
  //     console.log(this.carts, 'mycart');
  //   },
  // },
  methods: {
    getCarts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.carts = res.data.data.carts;
          console.log(this.carts, 'carts');
        } else {
          console.log(res.data.message);
        }
      });
    },
    delCart(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.getCarts();
          emitter.emit('update-cart');
        } else {
          console.log(res.data.message);
        }
      });
    },
    show() {
      this.cartOffcanvas.show();
    },
    hide() {
      this.cartOffcanvas.hide();
    },
  },
  created() {
    this.getCarts();
    emitter.on('get-cart-offcanvas', () => {
      this.getCarts();
    });
  },
  mounted() {
    this.cartOffcanvas = new Offcanvas(this.$refs.cartOffcanvas);
  },
};
</script>

<style lang="scss" scoped>
.submit {
  background-color: #AF926B;
  &:hover {
    background-color: #CEB591;
  }
}
</style>
