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
            to="/admin"
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
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        // eslint-disable-next-line no-useless-escape
        /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        const api = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(api).then((res) => {
          if (res.data.success) {
            console.log(res.data.message);
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.$router.push('/login');
          }
        });
      }
      // else {
      //   // eslint-disable-next-line no-alert
      //   alert('尚未登入');
      //   this.$router.push('/login');
      // }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
