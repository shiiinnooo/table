<template>
  <div class="shopping-info bg-white container-lg mt-4 px-4 pb-4 px-sm-5">
    <h2 class="py-4 fw-bold"
        style="
        font-family: 'Playfair Display', 'Noto Sans TC', serif;
        letter-spacing: 0.8px;">
        Shipping info
    </h2>
    <div class="justify-content-center">
      <Form ref="form" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <Field
            id="email"
            name="Email"
            placeholder="請輸入 E-mail"
            type="email"
            class="form-control"
            rules="email|required"
            v-model="form.user.email"
            :class="{
              'is-invalid': errors['Email'],
              'is-valid': !errors['Email'] && form.user.email,
            }"
          ></Field>
          <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            rules="required"
            placeholder="請輸入姓名"
            v-model="form.user.name"
            :class="{
              'is-invalid': errors['姓名'],
              'is-valid': !errors['姓名'] && form.user.name,
            }"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人手機號碼</label>
          <Field
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :rules="isPhone"
            placeholder="請輸入手機號碼"
            v-model="form.user.tel"
            :class="{
              'is-invalid': errors['電話'],
              'is-valid': !errors['電話'] && form.user.tel,
            }"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            rules="required"
            placeholder="請輸入地址"
            v-model="form.user.address"
            :class="{
              'is-invalid': errors['地址'],
              'is-valid': !errors['地址'] && form.user.address,
            }"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="20"
            rows="5"
            placeholder="備註"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-secondary rounded" @click="goBack">
            <span class="material-icons-outlined fs-6 align-middle">
              west
            </span>
            修改訂單
          </button>
          <button type="submit" class="btn btn-primary rounded">建立訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import emitter from '@/assets/javascript/emitter';

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      if (!value) {
        return '手機號碼 為必填';
      }
      return phoneNumber.test(value) ? true : '手機號碼格式不正確';
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(api, { data: this.form }).then((res) => {
        if (res.data.success) {
          emitter.emit('update-cart');
          emitter.emit('get-cart-offcanvas');
          const { orderId } = res.data;
          this.$refs.form.resetForm();
          this.form = {
            user: {
              name: '',
              email: '',
              tel: '',
              address: '',
            },
            message: '',
          };
          this.$router.push(`/checkout/step3/${orderId}`);
        }
      });
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

.<style lang="scss" scoped>
.shopping-info {
  width: 50%;
  @media (max-width: 991px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
}
</style>
