<template>
  <div class="d-flex justify-content-end mt-4">
    <button class="btn btn-danger text-white" @click="openDelAllModal"
      :class="{ 'disabled' : !orders.length }">刪除全部訂單</button>
  </div>
  <table class="table mt-4 text-center">
    <thead>
      <tr>
        <th width="120">訂單建立時間</th>
        <th width="240">訂單編號</th>
        <th width="100" class="text-start">金額</th>
        <th width="100">付款狀態</th>
        <th width="200">付款時間</th>
        <th width="100">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!orders.length">
        <td class="fst-italic text-center py-5" colspan="6">無訂單</td>
      </tr>
      <tr v-for="item in orders" :key="item.id">
        <td>
          <div>
            <p class="m-0">
              {{ new Date(item.create_at * 1000).toLocaleDateString() }}
            </p>
            <p class="m-0" style="font-size: 12px;">
              {{ new Date(item.create_at * 1000).toLocaleTimeString() }}
            </p>
          </div>
        </td>
        <td>{{ item.id }}</td>
        <td class="text-start">NT. {{ toCurrency(item.total) }}</td>
        <td>
          <span v-if="item.is_paid" class="text-success">已付款</span>
          <span v-else>未付款</span>
        </td>
        <td>
          <div v-if="item.is_paid">
            <p class="m-0">
              {{ new Date(item.paid_date * 1000).toLocaleDateString() }}
            </p>
            <p class="m-0" style="font-size: 12px;">
              {{ new Date(item.paid_date * 1000).toLocaleTimeString() }}
            </p>
          </div>
          <div v-else></div>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-dark btn-sm rounded-start"
              @click="openModal(item.id)"
            >
              查看
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm rounded-end"
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
  <loading :active="isLoading"
    :is-full-page="fullPage"/>
</template>

<script>
import Pagination from '@/components/Dashboard_Pagination.vue';
import OrderModal from './components/OrderModal.vue';
import OrderDelModal from './components/OrderDelModal.vue';
import OrderDelAllModal from './components/OrderDelAllModal.vue';

export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
      fullPage: true,
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
      this.loadingShow();
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          const { orders, pagination } = res.data;
          this.orders = orders;
          this.pagination = pagination;
          this.loadingHide();
        } else {
          this.loadingHide();
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    delOrder(id) {
      this.loadingShow();
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.loadingHide();
          this.$refs.delModal.hide();
          this.getOrders();
        } else {
          this.loadingHide();
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    delAllOrder() {
      this.loadingShow();
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.loadingHide();
          this.$refs.delAllModal.hide();
          this.getOrders();
        } else {
          this.loadingHide();
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    openModal(orderId) {
      this.loadingShow();
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.tempOrder = res.data.order;
          this.loadingHide();
          this.$refs.modal.show();
        }
      });
    },
    openDelModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.show();
    },
    openDelAllModal() {
      this.$refs.delAllModal.show();
    },
    loadingShow() {
      this.isLoading = true;
    },
    loadingHide() {
      this.isLoading = false;
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
