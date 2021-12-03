<template>
  <div class="sticky-top bg-white">
    <div class="container-xl">
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <h1 class="navbar-brand fs-1">
            <router-link class="text-dark" to="/">TAbLe</router-link>
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
              <li class="home nav-item">
                <a
                  class="nav-link d-md-block d-none"
                  aria-current="page"
                  @click="routerPush('')"
                ></a>
                <a
                  class="nav-link d-md-none"
                  aria-current="page"
                  data-bs-toggle="collapse"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  href="#navbarNav"
                  @click="routerPush('')"
                ></a>
              </li>
              <li class="product nav-item">
                <a
                  class="nav-link d-md-block d-none"
                  aria-current="page"
                  @click="routerPush('product')"
                ></a>
                <a
                  class="nav-link d-md-none"
                  aria-current="page"
                  data-bs-toggle="collapse"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  href="#navbarNav"
                  @click="routerPush('product')"
                ></a>
              </li>
              <li class="about nav-item">
                <a
                  class="nav-link d-md-block d-none"
                  aria-current="page"
                  @click="routerPush('about')"
                ></a>
                <a
                  class="nav-link d-md-none"
                  aria-current="page"
                  data-bs-toggle="collapse"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  href="#navbarNav"
                  @click="routerPush('about')"
                ></a>
              </li>
            </ul>
            <div class="navbar-icon d-none d-md-block">
              <ul class="d-flex flex-row-reverse p-0 m-0">
                <li
                  class="cart position-relative ms-1"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  @click="$emit('open-offcanvas')"
                  style="width: 48px;"
                >
                  <span
                    class="
                      material-icons-outlined material-icons
                      md-28
                      text-dark
                    "
                  >
                    shopping_bag
                  </span>
                  <p class="position-absolute fw-bold"
                    style="font-size: 4px; left: -2px; top: 30px;">購物車</p>
                  <div
                    class="badge rounded-pill bg-danger position-absolute"
                    :class="{ 'px-1': qty >= 10 }"
                    style="left: 14px; bottom: 20px"
                  >
                    <small class="fw-normal">{{ qty }}</small>
                  </div>
                </li>
                <li
                  class="favorite position-relative ms-1"
                  style="width: 48px;"
                >
                  <a class="d-block" href="#"
                    @click.prevent="routerPush('favorite')">
                    <span
                      class="material-icons-round material-icons md-28 text-dark"
                    >
                      favorite_border
                    </span>
                    <p class="position-absolute fw-bold"
                      style="font-size: 4px; left: -10px; top: 30px;">我的收藏</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div class="navbar-icon d-md-none d-sm-block fixed-bottom">
    <ul class="d-flex p-0 m-0 border-top">
      <li
        class="position-relative bg-white w-100 text-center py-1"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        @click="$emit('open-offcanvas')"
      >
        <span class="material-icons-outlined material-icons md-28 text-dark">
          shopping_bag
        </span>
        <div
          class="badge rounded-pill bg-danger position-absolute"
          :class="{ 'px-1': qty >= 10 }"
          style="left: 53%; bottom: 20px"
        >
          <small class="fw-normal">{{ qty }}</small>
        </div>
      </li>
      <li
        class="position-relative bg-white w-100 text-center py-1
        border-start border-dark border-1"
      >
        <a
          class="d-block"
          aria-expanded="false"
          aria-controls="navbarNav"
          @click="routerPush('favorite')">
          <span class="material-icons-round material-icons md-28 text-dark">
            favorite_border
          </span>
        </a>
      </li>
    </ul>
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
  emits: ['open-offcanvas'],
  methods: {
    routerPush(page) {
      this.$router.push(`/${page}`);
      if (page === 'product') {
        this.getProducts();
      }
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data;
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
    getProducts() {
      emitter.emit('navbar-get-product');
    },
  },
  mounted() {
    this.getCart();
    // 監聽購物車，為了更新icon數字，可再調整到offcanvas
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

<style lang="scss" scoped>
.navbar h1 {
  font-weight: 600;
  letter-spacing: 3px;
}
.navbar-nav {
  .nav-item {
    min-width: 90px;
    text-align: center;
    a {
      font-family: "Josefin Sans", "Noto Sans TC", sans-serif;
      &:hover {
      cursor: pointer;
    }
    }
  }
  .home a {
    &::after {
      content: "HOME";
    }
    &:hover::after {
      content: "首頁";
    }
  }
  .product a {
    &::after {
      content: "PRODUCT";
    }
    &:hover::after {
      content: "商品專區";
    }
  }
  .about a {
    &::after {
      content: "ABOUT";
    }
    &:hover::after {
      content: "關於我們";
    }
  }
}
.navbar-icon {
  li {
    &:hover {
      cursor: pointer;
      p {
        display: block;
      }
    }
  }
  .cart p, .favorite p {
    display: none;
    letter-spacing: 0px;
  }
}
</style>
