<template>
  後台
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    checkLogin() {
      // eslint-disable-next-line no-useless-escape
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        const api = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(api)
          .then((res) => {
            if (res.data.success) {
              console.log(res.data.message);
            } else {
              // eslint-disable-next-line no-alert
              alert(res.data.message);
              this.$router.push('/login');
            }
          });
      } else {
        // eslint-disable-next-line no-alert
        alert('尚未登入');
        this.$router.push('/login');
      }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
