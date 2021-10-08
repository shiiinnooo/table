<template>
  <div class="myFavorite bg-light pt-4">
    <div class="bg-white mx-auto" style="width: 800px">
      <h3 class="p-5 text-secondary">My WishList</h3>
      <table class="table mt-4">
        <tbody>
          <tr v-for="(item, index) in myFavorite" :key="item.id">
            <td>
              <img
                :src="item.imageUrl"
                width="120"
                height="120"
                style="object-fit: cover"
              />
            </td>
            <td>{{ item.title }}</td>
            <td class="text-start">{{ item.origin_price }}</td>
            <td class="text-start">{{ item.price }}</td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  @click="addToCart(item.id)"
                >
                  加入購物車
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeFavItem(item.id, index)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter';

const storageMethods = {
  setItem(item) {
    localStorage.setItem('myFavorite', JSON.stringify(item));
  },
  getItem() {
    return JSON.parse(localStorage.getItem('myFavorite'));
  },
};

export default {
  data() {
    return {
      myFavoriteId: storageMethods.getItem() || [],
      myFavorite: [],
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          const { products } = res.data;
          this.myFavorite = products.filter((item) => this.myFavoriteId.includes(item.id));
        }
      });
    },
    removeFavItem(id, index) {
      this.myFavorite.splice(index, 1);
      this.myFavoriteId.splice(this.myFavoriteId.indexOf(id), 1);
      storageMethods.setItem(this.myFavoriteId);
      this.getProducts();
    },
    addToCart(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          console.log(res);
          emitter.emit('update-cart');
          emitter.emit('get-cart-offcanvas');
        } else {
          console.log(res.data.message);
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.myFavorite {
  h3 {
    font-family: "Playfair Display", serif;
    letter-spacing: 1px;
  }
}
</style>
