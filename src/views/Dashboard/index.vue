<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-dark text-white" style="min-height: 100vh">
        <h1 class="fs-3 py-4" style="font-weight: 600; letter-spacing: 1.5px">
          <router-link class="text-white fs-3" to="/admin/product">TAbLe</router-link>
        </h1>
        <div class="list-group">
          <router-link
            to="/admin/product"
            class="list-group-item
            bg-dark text-white border-0"
            >產品列表</router-link
          >
          <router-link
            to="/admin/order"
            class="
              list-group-item
              bg-dark text-white
              border-0
            "
            >訂單管理</router-link
          >
        </div>
      </div>
      <div class="col-10 px-5">
        <div class="login text-end my-3">
          <span v-if="loginStatus" class="px-2">已登入 /</span>
          <button class="btn btn-secondary rounded py-1" @click="logout">登出</button>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
  <loading :active="isLoading"
    :is-full-page="fullPage"/>
</template>

<script>
export default {
  data() {
    return {
      loginStatus: false,
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    checkLogin() {
      // eslint-disable-next-line no-useless-escape
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        const api = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(api).then((res) => {
          if (res.data.success) {
            this.loginStatus = true;
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.loginStatus = false;
            this.$router.push('/login');
          }
        });
      } else {
        // eslint-disable-next-line no-alert
        alert('尚未登入');
        this.loginStatus = false;
        this.$router.push('/login');
      }
    },
    logout() {
      this.loadingShow();
      this.loginStatus = true;
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.loginStatus = false;
          this.$router.push('/login');
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    loadingShow() {
      this.isLoading = true;
    },
    loadingHide() {
      this.isLoading = false;
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
