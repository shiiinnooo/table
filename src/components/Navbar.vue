<template>
  <div class="sticky-top bg-white border-bottom">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <h1
            class="navbar-brand fs-1"
            style="font-weight: 600; letter-spacing: 1.5px"
          >
            <router-link class="text-dark" to="/"
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
                <router-link class="nav-link fs-sm" to="/product"
                @click.prevent="selectCategory(''); recordPage('所有商品');"
                  >PRODUCTS</router-link
                >
              </li>
            </ul>
            <div>
              <ul class="d-flex flex-row-reverse p-0 m-0">
                <li class="position-relative ms-3"
                  type="button"
                  data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                  @click="$emit('open-offcanvas')">
                  <span class="material-icons-outlined material-icons md-28 text-dark">
                    shopping_bag
                  </span>
                  <div
                    class="badge rounded-pill bg-danger position-absolute"
                    :class="{'px-1' : qty >= 10}"
                    style="left: 14px; bottom: 20px;"
                    >
                      <small class="fw-normal">{{ qty }}</small>
                  </div>
                </li>
                <li class="position-relative ms-3"
                type="button"
                @click="pushToFavoritePage">
                  <span class="material-icons-round material-icons md-28 text-dark">
                    favorite_border
                  </span>
                </li>
              </ul>
            </div>
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
    pushToFavoritePage() {
      this.$router.push('/favorite');
    },
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
    selectCategory(category) {
      emitter.emit('select-category', category);
    },
    recordPage(category) {
      emitter.emit('record-current-page', { selected: 'list', category });
    },
  },
  mounted() {
    this.getCart();
    // 監聽購物車
    emitter.on('update-cart', () => {
      this.getCart();
    });
    console.log(this.$router);
    // window.addEventListener('scroll', () => {
    //   const windowY = window.scrollY;
    //   // console.log(windowY);
    // });
  },
};
</script>

<style lang="scss" scoped>
a {
  font-family: 'Montserrat', sans-serif;
}
</style>
