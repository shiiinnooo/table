<template>
  <Offcanvas ref="offcanvas" @close-offcanvas="offcanvasHide"></Offcanvas>
  <Navbar @open-offcanvas="offcanvasShow"></Navbar>
  <router-view></router-view>
  <footer class="py-5 mb-4 mb-md-0 bg-primary">
    <div class="text-center">
      <span class="text-dark">Copyright &copy; 2021 TAbLe. 僅供練習使用無商業用途</span>
      <a class="btn btn-light rounded ms-2 my-2 my-sm-0 py-1 fw-bold" href="#"
        @click.prevent="$router.push('/login')">登入後台</a>
    </div>
  </footer>
  <div
    @click="scrollTop"
    class="btnScrollTop text-dark position-fixed position-relative" type="button"
    style="right: 30px; bottom: 10px;">
    <span class="material-icons-outlined position-absolute"
      style="bottom: 10px; left: 2px;">
      arrow_drop_up
    </span>
    <p class="m-0">TOP</p>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Offcanvas from '../components/CartOffcanvas.vue';

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
    handleScroll() {
      const btnScrollTop = document.querySelector('.btnScrollTop');
      const rootElement = document.documentElement;
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if ((rootElement.scrollTop / scrollTotal) > 0.50) {
        btnScrollTop.classList.add('showBtn');
      } else {
        btnScrollTop.classList.remove('showBtn');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
  .btnScrollTop {
    opacity: 0;
    transform: translateY(10px);
    transition: all .3s ease;
  }
  .showBtn {
    opacity: 1;
    transform: translateY(0);
  }
</style>
