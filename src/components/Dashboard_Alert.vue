<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417
        5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0
        1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
      />
    </symbol>
  </svg>
  <div
    ref="alert"
    class="alert alert-success fade d-flex align-items-center"
    role="alert"
  >
    <svg
      class="bi flex-shrink-0 me-2"
      width="24"
      height="24"
      role="img"
      aria-label="Info:"
    >
      <use xlink:href="#check-circle-fill" />
    </svg>
    <div class="me-auto">已刪除產品</div>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
import Alert from 'bootstrap/js/dist/alert';

export default {
  data() {
    return {
      alert: '',
    };
  },
  mounted() {
    this.alert = new Alert(this.$refs.alert);

    setTimeout(() => {
      this.alert.close();
    }, 2000);
  },
};
</script>
