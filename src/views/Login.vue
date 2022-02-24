<template>
  <div class="bg-light py-5" style="height: 70vh">
    <div class="mx-auto login">
      <h2 class="py-4">登入後台</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
          type="email" v-model="user.username" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
          type="password" v-model="user.password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary">登入</button>
      </form>
    </div>
  </div>
  <loading :active="isLoading"
    :is-full-page="fullPage"/>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    login() {
      this.loadingShow();
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `token=${token}; expires=${new Date(expired)}; path=/`;
            this.$router.push('/admin/product');
          } else {
            console.log(res.data.message);
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
};
</script>

<style lang="scss" scoped>
.login {
  width: 80%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 992px) {
    width: 40%;
  }
}
</style>
