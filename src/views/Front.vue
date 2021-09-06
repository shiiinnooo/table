<template>
  <Navbar @open-offcanvas="offcanvasShow"></Navbar>
  <router-view style="min-height: 70vh;"></router-view>
  <Offcanvas ref="offcanvas" @close-offcanvas="offcanvasHide"></Offcanvas>
  <footer class="py-5 bg-primary">
    <p class="text-dark m-0">FOOTER</p>
  </footer>
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
  },
};
</script>
