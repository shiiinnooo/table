<template>
  <div
    class="modal fade"
    ref="orderModal"
    id="orderModal"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="orderModalLabel">訂單詳情</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="orderStatus border p-1">
            <p>
              訂單編號:<span>{{ order.id }}</span>
            </p>
            <p>
              付款狀態:
              <span v-if="order.is_paid" class="text-success">已付款</span>
              <span v-else>未付款</span>
            </p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="orderUser w-100">
              <h6>訂購資訊</h6>
              <ul class="p-0">
                <li>
                  建立時間:<span>{{
                    new Date(order?.create_at * 1000).toLocaleString()
                  }}</span>
                </li>
                <li>
                  email:<span>{{ order?.user?.email }}</span>
                </li>
                <li>
                  姓名:<span>{{ order?.user?.name }}</span>
                </li>
                <li>
                  手機:<span>{{ order?.user?.tel }}</span>
                </li>
                <li>
                  地址:<span>{{ order?.user?.address }}</span>
                </li>
                <li>
                  備註:<span>{{ order?.message }}</span>
                </li>
              </ul>
            </div>
            <div class="ordercContent w-100">
              <h6>訂單內容</h6>
              <table class="table table-borderless">
                <tbody v-for="item in order.products" :key="item.id"
                  style="font-size: 6px;">
                  <tr>
                    <td rowspan="3">
                      <img
                        :src="item.product.imageUrl"
                        width="60"
                        height="60"
                        style="object-fit: cover"
                      />
                    </td>
                    <td class="p-0 text-start">{{ item.product.title }}</td>
                  </tr>
                  <tr>
                    <td class="p-0 text-start">價格: NT. {{ item.product.price }}</td>
                  </tr>
                  <tr>
                    <td class="p-0 text-start">數量: {{ item.qty }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td class="text-end p-4" colspan="5">
                      總計金額: NT. {{ order.total }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      orderModal: '',
    };
  },
  methods: {
    show() {
      this.orderModal.show();
    },
    hide() {
      this.orderModal.hide();
    },
  },
  mounted() {
    this.orderModal = new Modal(this.$refs.orderModal);
  },
};
</script>
