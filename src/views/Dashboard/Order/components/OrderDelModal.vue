<template>
  <div class="modal" ref="orderDelModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">刪除訂單</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            確認要刪除
            <span class="text-danger">{{ order.id }}</span>
            此筆訂單嗎？（刪除後不可再修復）
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('del-order', order.id)"
          >
            刪除
          </button>
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
  emits: ['del-order'],
  deta() {
    return {
      delModal: '',
    };
  },
  mounted() {
    this.delModal = new Modal(this.$refs.orderDelModal);
  },
  methods: {
    show() {
      this.delModal.show();
    },
    hide() {
      this.delModal.hide();
    },
  },
};
</script>
