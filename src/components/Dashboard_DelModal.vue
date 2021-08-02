<template>
  <div class="modal" ref="delModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">刪除產品</h5>
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
            <span class="text-danger">{{ product.title }}</span>
            嗎？（刪除後不可再修復）
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
            @click="$emit('del-product', product.id)"
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
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['del-product'],
  deta() {
    return {
      delModal: '',
    };
  },
  mounted() {
    this.delModal = new Modal(this.$refs.delModal);
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
