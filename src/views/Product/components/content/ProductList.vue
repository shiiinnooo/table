<template>
  <div class="row">
    <div
      class="col-6 col-lg-3"
      v-for="product in filterProducts"
      :key="product.id"
    >
      <div class="card h-100 border-0">
        <router-link
          :to="`/product/${product.id}`"
          class="card-top d-block position-relative"
        >
          <img
            :src="product.imageUrl"
            class="card-img-top w-100 d-block"
            style="object-fit: cover; height: auto"
          />
          <div
            class="card-img-hover position-absolute bg-secondary w-100 h-100"
            style="top: 0"
          ></div>
          <div
            class="
              card-img-icon
              position-absolute position-relative
              bg-white
              rounded-circle
            "
            style="top: 6px; right: 6px; width: 2rem; height: 2rem"
          >
            <span
              class="
                material-icons-outlined material-icons
                favorite-icon
                fw-lighter
                p-1
              "
              style="font-weight: 100px"
              @click.prevent="$emit('addFavorite', product.id);"
            >
            </span>
            <span
              v-if="myFavorite.includes(product.id)"
              class="
                material-icons-outlined material-icons
                fw-lighter
                p-1
                position-absolute
              "
              style="font-weight: 100px; right: 0px; color: #ceb591"
              @click.prevent="$emit('addFavorite', product.id);"
            >
              favorite
            </span>
          </div>
        </router-link>
        <div class="card-body d-flex flex-column justify-content-between px-0">
          <h6 class="card-title mb-2" style="font-weight: 400">
            <router-link
              :to="`/product/${product.id}`"
            >
              {{ product.title }}
            </router-link>
          </h6>
          <div class="card-text d-flex justify-content-between">
            <div>
              <span
                :class="{
                  'text-decoration-line-through':
                    product.price !== product.origin_price,
                }"
              >
                NT. {{ toCurrency(product.origin_price) }}
              </span>
              <span
                class="text-danger ms-1"
                v-if="product.price !== product.origin_price"
              >
                NT. {{ toCurrency(product.price) }}
              </span>
            </div>
            <span
              class="saleText text-danger border border-danger px-1"
              v-if="product.price !== product.origin_price"
              style="font-size: 10px;"
              >SALE</span
            >
          </div>
          <button
            type="button"
            class="my-2 py-1 border border-secondary fs-sm"
            style="color: #6f6a66; letter-spacing: 1px"
            @click.prevent="addToCart(product.id)"
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../../../../assets/javascript/emitter';

export default {
  data() {
    return {
      products: [],
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
  computed: {
    filterProducts() {
      if (this.page.category === '所有商品') {
        return this.products;
      }
      return this.products.filter((item) => item.category.match(this.page.category));
    },
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
        }
      });
    },
    addToCart(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          console.log(res);
          emitter.emit('update-cart');
          emitter.emit('get-cart-offcanvas');
        } else {
          console.log(res.data.message);
        }
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
*:not(.material-icons) {
  font-family: "Lato";
}
.card-top {
  .card-img-hover,
  .card-img-icon {
    display: none;
    opacity: 0.1;
    .favorite-icon {
      &::after {
        content: "favorite_border";
        color: #ceb591;
      }
      &:hover::after {
        content: "favorite";
        color: #ceb591;
      }
    }
  }
  &:hover {
    .card-img-hover {
      display: block;
    }
    .card-img-icon {
      display: block;
      opacity: 1;
    }
  }
}

.card-body {
  button {
    background: none;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .card-title a:hover {
    text-decoration: underline;
  }
  .saleText {
    @media (max-width: 569px) {
      display: none;
    }
  }
}
</style>
