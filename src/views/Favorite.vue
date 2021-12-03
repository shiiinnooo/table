<template>
  <div class="myFavorite bg-light py-4" style="min-height: 80vh">
    <div class="content bg-white mx-auto px-4 pb-4">
      <h2 class="py-4 py-lg-5 px-3 m-0 text-secondary">
        My WishList
        <span class="px-1 fs-6 fw-bold d-block d-sm-inline">我的收藏</span>
      </h2>
      <div class="container">
        <div
          class="row align-items-center border-bottom py-2"
          v-for="(item, index) in myFavorite"
          :key="item.id"
        >
          <div class="col-4 col-lg-3 text-center">
            <img
              :src="item.imageUrl"
              style="object-fit: cover"
            />
          </div>
          <div class="col-8 col-lg-9">
            <div class="row">
              <div class="col-12 col-lg-4 pb-1 py-lg-0">
                <router-link class="productTitle" :to="`/product/${item.id}`">
                  {{ item.title }}
                </router-link>
              </div>
              <div class="col-12 col-lg-4 pb-1 py-lg-0 text-lg-center">
                <span
                  v-if="item.price !== item.origin_price"
                  :class="{
                    'text-decoration-line-through':
                      item.price !== item.origin_price,
                  }"
                  class="pe-2"
                >
                  NT.{{ item.origin_price }}</span
                >
                <span :class="{ 'text-danger': item.price !== item.origin_price }">
                  NT.{{ item.price }}</span
                >
              </div>
              <div class="col-12 col-lg-4 pb-1 py-lg-0">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm rounded px-2 px-sm-3 px-lg-2 py-0"
                    @click="addToCart(item.id)"
                  >
                    Add to bag
                  </button>
                  <span
                    class="delIcon material-icons-outlined mx-3 material-icons"
                    @click="removeFavItem(item.id, index)"
                  >
                    delete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!myFavorite.length">
          <p class="text-secondary text-center fst-italic py-5">目前無收藏</p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button
        class="btn btn-primary rounded py-2 px-4 mt-3"
        @click="$router.push('/product')"
      >
        Continue shopping
      </button>
    </div>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter';

const storageMethods = {
  setItem(item) {
    localStorage.setItem('myFavorite', JSON.stringify(item));
  },
  getItem() {
    return JSON.parse(localStorage.getItem('myFavorite'));
  },
};

export default {
  data() {
    return {
      myFavoriteId: storageMethods.getItem() || [],
      myFavorite: [],
      isIconHover: false,
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          const { products } = res.data;
          this.myFavorite = products.filter((item) => this.myFavoriteId.includes(item.id));
        }
      });
    },
    removeFavItem(id, index) {
      this.myFavorite.splice(index, 1);
      this.myFavoriteId.splice(this.myFavoriteId.indexOf(id), 1);
      storageMethods.setItem(this.myFavoriteId);
      this.getProducts();
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
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.myFavorite {
  .content {
    width: 90%;
    @media (min-width: 768px) {
      width: 75%;
    }
    @media (min-width: 992px) {
      width: 70%;
    }
    @media (min-width: 1200px) {
      width: 65%;
    }
    @media (min-width: 1400px) {
      width: 60%;
    }
    img {
      width: 60px;
      height: 60px;
      @media (min-width: 375px) {
        width: 80px;
        height: 80px;
      }
      @media (min-width: 768px) {
        width: 100px;
        height: 100px;
      }
      @media (min-width: 992px) {
        width: 120px;
        height: 120px;
      }
    }
    .delIcon {
      &:hover {
        cursor: pointer;
        color: rgb(168, 167, 167);
      }
    }
    .productTitle {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  h2 {
    font-family: "Playfair Display", serif;
    letter-spacing: 1px;
  }
}
</style>
