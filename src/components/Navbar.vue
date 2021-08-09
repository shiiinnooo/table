<template>
  <div class="sticky-top bg-white">
    <div class="container-xl">
      <nav class="navbar navbar-expand-lg navbar-light my-2">
        <div class="container-fluid">
          <h1
            class="navbar-brand"
            style="font-weight: 600; letter-spacing: 1.5px"
          >
            <router-link class="text-dark fs-3" to="/"
              >TAbLe</router-link
            >
          </h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link class="nav-link fs-sm" aria-current="page" to="/"
                  >HOME</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link fs-sm" to="/product/all"
                  >PRODUCTS</router-link
                >
              </li>
            </ul>
            <ul class="d-flex">
              <li class="position-relative">
                <router-link to="/checkout/step1">
                  <i class="bi bi-bag fs-4 text-dark"></i>
                  <div
                    v-if="qty < 10"
                    class="rounded-pill text-dark position-absolute fs-sm"
                    style="left: 8px; top: 10px"
                  >
                    {{ qty }}
                  </div>
                  <div
                    v-else
                    class="rounded-pill text-dark position-absolute fs-sm"
                    style="left: 7px; top: 10px"
                  >
                    {{ qty }}
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      cart: {},
      qty: 0,
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data;
          // console.log(this.cart);
          this.countNum();
        }
      });
    },
    countNum() {
      this.qty = 0;
      this.cart.carts.forEach((item) => {
        this.qty += item.qty;
      });
    },
  },
  mounted() {
    this.getCart();
    // 監聽購物車
    emitter.on('update-cart', () => {
      this.getCart();
    });
    // window.addEventListener('scroll', () => {
    //   const windowY = window.scrollY;
    //   // console.log(windowY);
    // });
  },
};
</script>
