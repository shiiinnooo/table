<template>
  <div class="modal" ref="orderDelAllModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">刪除全部訂單</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            確認要<span class="text-danger fw-bold">刪除全部</span>訂單嗎？（刪除後不可再修復）
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
            @click="$emit('del-allOrder')"
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
  emits: ['del-allOrder'],
  deta() {
    return {
      delModal: '',
    };
  },
  mounted() {
    this.delModal = new Modal(this.$refs.orderDelAllModal);
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
