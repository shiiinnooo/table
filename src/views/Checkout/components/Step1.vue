<template>
  <div class="shopping-bag container-lg bg-white my-4 px-4 pb-4 px-sm-5">
    <h2
      class="py-4 fw-bold"
      style="
        font-family: 'Playfair Display', 'Noto Sans TC', serif;
        letter-spacing: 0.8px;
      "
    >
      Your shopping bag
    </h2>
    <div v-if="!carts.carts?.length">
      <p class="text-center py-5">購物車無商品</p>
      <button
        class="btn btn-primary rounded w-100 py-2"
        type="button"
        @click="$router.push('/product')"
      >
        前往購物
      </button>
    </div>
    <div v-else>
      <div
        class="row border-bottom py-3"
        v-for="item in carts.carts"
        :key="item.id"
      >
        <div class="col-4 col-md-3 text-md-center">
          <img
            :src="item.product.imageUrl"
            @click.prevent="$router.push(`/product/${item.product_id}`)"
            style="cursor: pointer"
          />
        </div>
        <div
          class="
            col-8 col-md-5 col-lg-6
            ps-0 ps-lg-3
            d-flex
            flex-column
            justify-content-center
          "
        >
          <p class="m-0 p-0">
            <a
              href="#"
              class="text-dark text-decoration-underline"
              @click.prevent="$router.push(`/product/${item.product_id}`)"
            >
              {{ item.product.title }}</a
            >
          </p>
          <p class="m-0 p-0">
            單價
            <span
              class="text-decoration-line-through me-1"
              v-if="item.product.price !== item.product.origin_price"
            >
              NT. {{ toCurrency(Number(item.product.origin_price)) }}
            </span>
            <span
              :class="{
                'text-danger': item.product.price !== item.product.origin_price,
              }"
            >
              NT. {{ toCurrency(Number(item.product.price)) }}</span
            >
          </p>
          <p class="m-0 p-0">
            小計
            <span>NT. {{ toCurrency(Number(item.total)) }}</span>
          </p>
        </div>
        <div
          class="
            col-12 col-md-4 col-lg-3
            py-3 py-md-0
            d-flex
            flex-column
            justify-content-center
          "
        >
          <div class="input-group w-100">
            <button
              :class="{'disabled' : item.qty === 1}"
              class="btn btn-outline-secondary py-1 rounded-start"
              type="button"
              @click="updateCart(item, 'minus')"
            >
              -
            </button>
            <input
              type="text"
              class="form-control bg-white border-secondary text-center py-1"
              v-model.number="item.qty"
              readonly
            />
            <button
              class="btn btn-outline-secondary py-1 rounded-end"
              type="button"
              @click="updateCart(item, 'plus')"
            >
              +
            </button>
          </div>
          <button
            type="button"
            class="
              btn btn-outline-secondary btn-sm
              mt-2
              py-1
              rounded
              d-inline-block d-md-block
            "
            @click="delCartItem(item.id)"
          >
            刪除
          </button>
        </div>
      </div>
      <p class="text-end py-3">
        總計:
        <span class="fs-3 fw-bold">
          NT. {{ toCurrency(Number(carts.total)) }}
          <!-- NT. {{ toCurrency(carts?.total) }} -->
        </span>
      </p>
      <div class="text-sm-end d-none d-md-block">
        <button
          class="btn btn-primary rounded w-25"
          type="button"
          @click="$router.push('/checkout/step2')"
        >
          Continue
          <span class="material-icons-outlined fs-6 align-middle"> east </span>
        </button>
      </div>
      <div class="d-block d-md-none">
        <button
          class="btn btn-primary rounded w-100"
          type="button"
          @click="$router.push('/checkout/step2')"
        >
          Continue
          <span class="material-icons-outlined fs-6 align-middle"> east </span>
        </button>
      </div>
    </div>
  </div>
  <loading :active="isLoading" :is-full-page="fullPage" />
</template>

<script>
import emitter from '@/assets/javascript/emitter';

export default {
  data() {
    return {
      carts: {},
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    getCarts() {
      this.loadingShow();
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.carts = res.data.data;
          this.loadingHide();
        }
      });
    },
    delCartItem(id) {
      this.loadingShow();
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.getCarts();
          emitter.emit('update-cart');
          emitter.emit('get-cart-offcanvas');
          this.loadingHide();
        }
      });
    },
    updateCart(item, state) {
      this.loadingShow();
      let qty = 0;
      if (state === 'plus') {
        qty = item.qty + 1;
      } else {
        qty = item.qty - 1;
      }
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product.id,
        qty,
      };
      this.$http.put(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.getCarts();
          emitter.emit('update-cart');
          emitter.emit('get-cart-offcanvas');
          this.loadingHide();
        }
      });
    },
    loadingShow() {
      this.isLoading = true;
    },
    loadingHide() {
      this.isLoading = false;
    },
  },
  created() {
    this.getCarts();
  },
};
</script>

<style lang="scss" scoped>
.shopping-bag {
  width: 75%;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  img {
    width: 100px;
    height: 100px;
    @media (max-width: 991px) {
      width: 80px;
      height: 80px;
    }
    @media (max-width: 414px) {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
