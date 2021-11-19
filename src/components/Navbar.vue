<template>
  <div class="sticky-top bg-white">
    <div class="container-xl">
      <nav class="navbar navbar-expand-lg navbar-light">
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
                <a class="nav-link" aria-current="page"
                  data-bs-toggle="collapse"
                  aria-controls="navbarNav"
                  href="#navbarNav"
                  @click="routerPush('')"
                ></a>
              </li>
              <li class="product nav-item">
                <a class="nav-link" aria-current="page"
                  data-bs-toggle="collapse"
                  aria-controls="navbarNav"
                  href="#navbarNav"
                  @click="getProducts, routerPush('product')"
                  ></a
                >
              </li>
              <li class="about nav-item">
                <a class="nav-link" aria-current="page"
                  data-bs-toggle="collapse"
                  aria-controls="navbarNav"
                  href="#navbarNav"
                  @click="routerPush('about')"
                ></a>
              </li>
            </ul>
            <div class="navbar-icon">
              <ul class="d-flex flex-row-reverse p-0 m-0">
                <li
                  class="position-relative ms-3"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  @click="$emit('open-offcanvas')"
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
                  <div
                    class="badge rounded-pill bg-danger position-absolute"
                    :class="{ 'px-1': qty >= 10 }"
                    style="left: 14px; bottom: 20px"
                  >
                    <small class="fw-normal">{{ qty }}</small>
                  </div>
                </li>
                <li
                  class="position-relative ms-3"
                  @click="pushToFavoritePage"
                >
                  <span
                    class="material-icons-round material-icons md-28 text-dark"
                  >
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
    routerPush(page) {
      this.$router.push(`/${page}`);
    },
    pushToFavoritePage() {
      this.$router.push('/favorite');
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
    }
  }
}
</style>
