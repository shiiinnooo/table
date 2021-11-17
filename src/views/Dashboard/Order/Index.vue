<template>
  <div class="d-flex justify-content-end mt-4">
    <button class="btn btn-danger text-white" @click="openDelAllModal"
      :class="{ 'disabled' : !orders.length }">刪除全部訂單</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="200">訂單建立時間</th>
        <th width="120">訂單編號</th>
        <th width="120">金額</th>
        <th width="120">付款狀態</th>
        <th width="200">付款時間</th>
        <th width="100">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!orders.length">
        <td class="fst-italic text-center py-5" colspan="6">無訂單</td>
      </tr>
      <tr v-for="item in orders" :key="item.id">
        <td>{{ new Date(item.create_at * 1000).toLocaleString() }}</td>
        <td>{{ item.id }}</td>
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
              @click="openModal(item.id)"
            >
              查看
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
  <div class="d-flex justify-content-center">
    <Pagination :page="pagination" @get-product="getOrders"></Pagination>
  </div>
  <OrderModal ref="modal" :order="tempOrder"></OrderModal>
  <OrderDelModal
    ref="delModal"
    :order="tempOrder"
    @del-order="delOrder"
  ></OrderDelModal>
  <OrderDelAllModal ref="delAllModal" @del-allOrder="delAllOrder"></OrderDelAllModal>
</template>

<script>
import Pagination from '../../../components/Dashboard_Pagination.vue';
import OrderModal from './components/OrderModal.vue';
import OrderDelModal from './components/OrderDelModal.vue';
import OrderDelAllModal from './components/OrderDelAllModal.vue';

export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
    };
  },
  components: {
    Pagination,
    OrderModal,
    OrderDelModal,
    OrderDelAllModal,
  },
  methods: {
    getOrders(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          const { orders, pagination } = res.data;
          this.orders = orders;
          this.pagination = pagination;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    delOrder(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          console.log(res.data.message);
          this.$refs.delModal.hide();
          this.getOrders();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    delAllOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          console.log(res.data.message);
          this.$refs.delAllModal.hide();
          this.getOrders();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    openModal(orderId) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.tempOrder = res.data.order;
          console.log(this.tempOrder);
        }
      });
      this.$refs.modal.show();
    },
    openDelModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.show();
    },
    openDelAllModal() {
      this.$refs.delAllModal.show();
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
