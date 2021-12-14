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
    <div v-if="carts.length" class="offcanvas-body">
      <div class="card mb-3 border-0" v-for="item in carts" :key="item.id">
        <div class="row">
          <div class="col-3">
            <img
              :src="item.product.imageUrl"
              @click="$emit('close-offcanvas'); $router.push(`/product/${item.product_id}`)"
              width="80"
              height="80"
              style="object-fit: cover"
            />
          </div>
          <div class="col-9">
            <div class="card-body p-0">
              <h6 class="card-title fs-6 fw-normal"
              @click="$emit('close-offcanvas'); $router.push(`/product/${item.product_id}`)">
                {{ item.product.title }}
              </h6>
              <div class="card-text">
                <p class="my-1">
                  <span class="me-2">價格</span>
                  <span
                    class="me-2"
                    :class="{
                      'text-decoration-line-through':
                        item.product.origin_price !== item.product.price,
                    }"
                  >
                    NT.{{ item.product.origin_price }}
                  </span>
                  <span
                    v-if="item.product.origin_price !== item.product.price"
                    class="text-danger"
                    >NT.{{ item.product.price }}</span
                  >
                </p>
                <p class="my-1">
                  <span class="me-2">數量</span> {{ item.qty }}
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="col-2">
            <button
              type="button"
              class="bg-transparent border border-secondary p-1"
              @click="delCart(item.id)"
            >
              刪除
            </button>
          </div> -->
        </div>
      </div>
      <hr />
      <button
        type="button"
        class="btn btn-primary py-2 w-100 fw-bold text-center"
        style="letter-spacing: 2px"
        @click="$emit('close-offcanvas'); $router.push('/checkout/step1');"
        >前往結帳
      </button>
    </div>
    <div v-else class="offcanvas-body">
      <p class="text-center py-2">您目前尚未選購任何商品喔！</p>
      <hr />
      <button
        type="button"
        class="btn btn-outline-primary py-2 w-100 fw-bold text-center"
        style="letter-spacing: 2px"
        @click="$emit('close-offcanvas'); $router.push('/product');"
        >繼續選購
        </button>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      carts: [],
      cartOffcanvas: '',
    };
  },
  methods: {
    getCarts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.carts = res.data.data.carts;
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
.card {
  img {
    &:hover {
      cursor: pointer;
    }
  }
  .card-title {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
