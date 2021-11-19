<template>
  <Navbar @open-offcanvas="offcanvasShow"></Navbar>
  <router-view></router-view>
  <Offcanvas ref="offcanvas" @close-offcanvas="offcanvasHide"></Offcanvas>
  <footer class="py-5 mb-4 mb-md-0 bg-primary">
    <div class="text-dark text-center">
      <p>Copyright &copy; 2021 TAbLe. 僅供練習使用無商業用途</p>
      <a class="text-dark text-decoration-underline" href="#"
        @click.prevent="$router.push('/login')">登入後台</a>
    </div>
  </footer>
  <div
    @click="scrollTop"
    class="text-dark position-fixed position-relative" type="button"
    style="right: 40px; bottom: 10px;">
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
