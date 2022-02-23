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
          <div class="orderStatus border p-2">
            <p class="m-0 py-1">
              訂單編號：<span class="orderId">{{ order.id }}</span>
            </p>
            <p class="m-0 py-1">
              付款狀態：
              <span v-if="order.is_paid" class="text-success">已付款</span>
              <span v-else>
                未付款
                <button @click="copyUrl"
                class="btn btn-dark rounded px-2 py-1 ms-2">付款連結</button>
              </span>
            </p>
          </div>
          <div class="d-flex justify-content-between p-2 mt-4">
            <div class="orderInfo w-100">
              <h6 class="pb-1">訂購資訊</h6>
              <table>
                <tbody>
                  <tr>
                    <th scope="row" style="width: 40%" class="align-top">建立時間</th>
                    <td>
                      <span class="d-block">{{
                        new Date(order?.create_at * 1000).toLocaleDateString()
                      }}</span>
                      <span style="font-size: 6px">
                        {{
                          new Date(order?.create_at * 1000).toLocaleTimeString()
                        }}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">email</th>
                    <td>{{ order?.user?.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">姓名</th>
                    <td>{{ order?.user?.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">手機</th>
                    <td>{{ order?.user?.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="row">地址</th>
                    <td>{{ order?.user?.address }}</td>
                  </tr>
                  <tr>
                    <th scope="row">備註</th>
                    <td v-if="order.message" class="text-center">
                      {{ order?.message }}
                    </td>
                    <td v-else>無備註</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="orderContent w-100">
              <h6>訂單內容</h6>
              <table>
                <tbody
                  v-for="item in order.products"
                  :key="item.id"
                >
                  <tr>
                    <td class="pb-3">
                      <img
                        :src="item.product.imageUrl"
                        width="60"
                        height="60"
                        style="object-fit: cover"
                        class="me-3"
                      />
                    </td>
                    <td class="pb-3">
                      <p class="m-0">{{ item.product.title }}</p>
                      <p class="m-0">價格：NT. {{ toCurrency(Number(item.product.price)) }}</p>
                      <p class="m-0">數量：{{ item.qty }}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="text-end py-2 border-top h6">
                總計：NT. {{ toCurrency(Number(order.total)) }}</p>
            </div>
          </div>
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
    copyUrl() {
      const copyText = document.querySelector('.orderId');
      navigator.clipboard.writeText(`https://shiiinnooo.github.io/table/#/checkout/step3/${copyText.textContent}`);

      // eslint-disable-next-line no-alert
      alert('已複製連結');
    },
  },
  mounted() {
    this.orderModal = new Modal(this.$refs.orderModal);
  },
};
</script>
