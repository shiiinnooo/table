<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="200">訂單建立時間</th>
        <th width="120">訂單編號</th>
        <th width="120">品項</th>
        <th width="120">金額</th>
        <th width="120">付款狀態</th>
        <th width="200">付款時間</th>
        <th width="100">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orders" :key="item.id">
        <td>{{ new Date(item.create_at * 1000).toLocaleString() }}</td>
        <td>{{ item.id }}</td>
        <td class="text-start">{{ item.num }}</td>
        <td class="text-start">{{ item.total }}</td>
        <td>
          <span v-if="item.is_paid" class="text-success">已付款</span>
          <span v-else>未付款</span>
        </td>
        <td>
          <span v-if="item.is_paid">{{ new Date(item.paid_date * 1000).toLocaleString() }}</span>
          <span v-else></span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-dark btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- <div class="d-flex justify-content-center">
    <Pagination :page="pagination" @get-product="getProducts"></Pagination>
  </div>
  <Modal
    ref="modal"
    :product="tempProduct"
    :is-new="isNew"
    @update-product="updateProduct"
  ></Modal>
  <DelModal
    ref="delModal"
    :product="tempProduct"
    @del-product="delProduct"
  ></DelModal> -->
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      pagination: {},
    };
  },
  methods: {
    getOrders(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          console.log(res);
          const { orders, pagination } = res.data;
          this.orders = orders;
          this.pagination = pagination;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
