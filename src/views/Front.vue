<template>
  <Navbar @open-offcanvas="offcanvasShow"></Navbar>
  <router-view style="min-height: 70vh;"></router-view>
  <Offcanvas ref="offcanvas" @close-offcanvas="offcanvasHide"></Offcanvas>
  <footer class="py-5 bg-primary">
    <p class="text-dark m-0">FOOTER</p>
  </footer>
  <div
    @click="scrollTop"
    class="text-dark position-fixed position-relative" type="button"
    style="right: 40px; bottom: 80px;">
    <span class="material-icons-outlined position-absolute"
      style="bottom: 10px; left: 2px;">
      arrow_drop_up
    </span>
    <p class="m-0">TOP</p>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Offcanvas from '../components/Offcanvas.vue';

export default {
  components: {
    Navbar,
    Offcanvas,
  },
  methods: {
    offcanvasShow() {
      this.$refs.offcanvas.show();
    },
    offcanvasHide() {
      this.$refs.offcanvas.hide();
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
