<template>
  <h3 class="text-center">訂購人資訊</h3>
  <div class="row justify-content-center">
    <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
      {{ errors }}
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <Field
          id="email"
          name="Email"
          placeholder="請輸入E-mail"
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
          cols="30"
          rows="10"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-primary" @click="goBack">
          Back 修改
        </button>
        <button type="submit" class="btn btn-danger">建立訂單</button>
      </div>
    </Form>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter';

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
