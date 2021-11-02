<template>
  <h3 class="text-center py-4">付款確認</h3>
  <div class="mx-auto">
    <div>
      <h4 class="text-center">訂單內容</h4>
      <table class="table table-sm table-bordered">
        <thead>
          <tr>
            <th scope="col">商品名稱</th>
            <th scope="col">數量</th>
            <th scope="col">金額</th>
          </tr>
        </thead>
        <tbody v-for="item in order.products" :key="item.id">
          <tr>
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}</td>
            <td>NT.{{ item.total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colspan="2" class="text-center">總計金額</th>
            <td>NT.{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div>
      <table class="table caption-top">
        <caption>
          <h4 class="text-center">訂購資訊</h4>
        </caption>
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
            <td :class="[ order.is_paid ? 'text-success' : 'text-danger']">
              {{ order?.is_paid ? '付款完成' : '尚未付款' }}
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
      <button v-if="!order.is_paid" class="btn btn-primary"
        @click="payOrder">前往付款</button>
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
