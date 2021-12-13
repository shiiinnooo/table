<template>
  <div class="order-completed container-lg bg-white mt-4">
    <p
      class="py-5 text-center fs-4"
      style="
        font-family: 'Playfair Display', 'Noto Sans TC', serif;
        letter-spacing: 0.8px;
      "
    >
      訂單已建立！感謝您的訂購
      <span class="material-icons-outlined"> sentiment_satisfied </span>
    </p>
  </div>
  <div
    class="
      order-payment
      container-lg
      bg-white
      mt-4
      px-4
      pb-4
      px-sm-5
      position-relative
    "
  >
    <h2
      class="py-4 fw-bold position-absolute"
      style="
        font-family: 'Playfair Display', 'Noto Sans TC', serif;
        letter-spacing: 0.8px;
      "
    >
      Order info
    </h2>
    <div class="shopping-info pt-4">
      <p class="text-sm-end pt-5 pt-sm-0">
        <a
          class="btnCollapse"
          data-bs-toggle="collapse"
          href="#shoppingInfo"
          role="button"
          aria-expanded="false"
          aria-controls="shoppingInfo"
        >
          點此<span class="fw-bold"></span> 訂單內容
        </a>
      </p>
      <div class="collapse" id="shoppingInfo">
        <div
          class="row py-2 py-sm-3"
          v-for="item in order.products"
          :key="item.id"
        >
          <div class="col-3 col-sm-2 text-md-center">
            <img :src="item.product.imageUrl" />
          </div>
          <div class="col-6 col-sm-8 d-flex flex-column justify-content-center">
            <p class="m-0 p-0">{{ item.product.title }}</p>
            <p class="m-0 p-0">
              單價
              <span>NT. {{ toCurrency(Number(item.product.price)) }}</span>
              <span
                class="text-decoration-line-through ms-2"
                v-if="item.product.price !== item.product.origin_price"
              >
                NT. {{ toCurrency(Number(item.product.origin_price)) }}
              </span>
            </p>
            <p class="m-0 p-0">
              小計
              <span>NT. {{ toCurrency(Number(item.total)) }}</span>
            </p>
          </div>
          <div class="col-3 col-sm-2 text-end">
            <p>數量:{{ item.qty }}</p>
          </div>
        </div>
        <div class="text-end">
          <p>
            總金額
            <span class="ps-5">NT.{{ toCurrency(Number(order?.total)) }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="order-info py-3">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">訂單金額</th>
            <td>NT. {{ order?.total }}</td>
          </tr>
          <tr>
            <th scope="row">訂單編號</th>
            <td>{{ order?.id }}</td>
          </tr>
          <tr>
            <th scope="row">訂單成立時間</th>
            <td>{{ order?.create_at }}</td>
          </tr>
          <tr>
            <th scope="row">付款狀態</th>
            <td class="fw-bold" :class="[order.is_paid ? 'text-success' : 'text-danger']">
              {{ order?.is_paid ? "付款完成" : "尚未付款" }}
            </td>
          </tr>
          <tr>
            <th scope="row">E-mail</th>
            <td>{{ order?.user?.email }}</td>
          </tr>
          <tr>
            <th scope="row">訂購人姓名</th>
            <td>{{ order?.user?.name }}</td>
          </tr>
          <tr>
            <th scope="row">聯絡電話</th>
            <td>{{ order?.user?.tel }}</td>
          </tr>
          <tr>
            <th scope="row">收件地址</th>
            <td>{{ order?.user?.address }}</td>
          </tr>
          <tr>
            <th scope="row">備註</th>
            <td v-if="order.message === undefined">無</td>
            <td v-else>{{ order?.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <button v-if="!order.is_paid" class="btn btn-primary w-100 rounded py-2" @click="payOrder">
        前往付款
      </button>
      <button v-if="order.is_paid"
        class="btn btn-outline-primary w-50 rounded py-2 fw-bold"
        style="letter-spacing: 2px;">
        繼續選購
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      order: {},
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
          console.log(this.order);
          const date = new Date(this.order.create_at * 1000).toLocaleString();
          this.order.create_at = date;
        } else {
          console.log(res.data.message);
        }
      });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          console.log(res.data.message);
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>

.<style lang="scss" scoped>
.order-completed {
  width: 75%;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
}
.order-payment {
  width: 75%;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  .shopping-info {
    img {
      width: 60px;
      height: 60px;
    }
    .btnCollapse {
      span {
        &::after {
          content: "展開";
        }
      }
    }
    .btnCollapse[aria-expanded="true"] {
      span {
        &::after {
          content: "收合";
        }
      }
    }
  }
}
</style>
