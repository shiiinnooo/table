<template>
  <div>
    <table class="table mt-4">
      <tbody>
        <tr v-for="item in carts.carts" :key="item.id">
          <td>
            <img
              :src="item.product.imageUrl"
              width="120"
              height="120"
              style="object-fit: cover"
            />
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <input type="number" min="1" max="10" v-model.number="item.qty" class="form-control"
            @change="updateCart(item)">
          </td>
          <td class="text-start">NT. {{ item.total }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="delCartItem(item.id)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-end p-4" colspan="5">
            總計金額: NT. {{ carts.total }}
          </td>
        </tr>
      </tfoot>
    </table>
    <button class="btn btn-primary" type="button"
    @click="$router.push('/checkout/step2')">
      Continue
    </button>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      carts: {},
    };
  },
  methods: {
    getCarts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res);
          this.carts = res.data.data;
          console.log(this.carts, 'carts');
        } else {
          console.log(res.data.message);
        }
      });
    },
    delCartItem(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.getCarts();
          emitter.emit('update-cart');
          emitter.emit('get-cart-offcanvas');
        } else {
          console.log(res.data.message);
        }
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.getCarts();
            emitter.emit('update-cart');
            emitter.emit('get-cart-offcanvas');
          } else {
            console.log(res.data.meassage);
          }
        });
    },
  },
  created() {
    this.getCarts();
  },
};
</script>
