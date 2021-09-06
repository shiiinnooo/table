<template>
  <Navbar @open-offcanvas="offcanvasShow"></Navbar>
  <router-view></router-view>
  <Offcanvas ref="offcanvas" @close-offcanvas="offcanvasHide"></Offcanvas>
  <footer class="py-5 bg-primary">
    <p class="text-dark">FOOTER</p>
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
