<template>
  <div v-if="page.selected === 'list'"
    class="header-image d-flex align-items-center"
      style="height: 240px; padding-left: 25%;">
    <h2 v-if="page.category" class="text-white">
      {{ page.category }} <hr>
      <span v-if="page.category === '所有商品'">All</span>
      <span v-if="page.category === '玻璃杯'">Glass</span>
      <span v-if="page.category === '馬克杯'">Cup</span>
      <span v-if="page.category === '碗'">Bowl</span>
      <span v-if="page.category === '盤子'">Plate</span>
      <span v-if="page.category === '其他餐具'">Others</span>
      <span v-if="page.category === '鍋具'">Pot / Pan</span>
      <span v-if="page.category === '砧板'">Cutting board</span>
      <span v-if="page.category === '托盤'">Tray</span>
      <span v-if="page.category === '香氛系列'">Fragrance</span>
      <span v-if="page.category === 'TAbLe選物'">Select</span>
    </h2>
    <h2 v-else class="text-white">商品總覽</h2>
  </div>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-3">
        <ProductMenu class="position-sticky" style="top: 80px;">
        </ProductMenu>
      </div>
      <div class="col-md-9">
        <Breadcrumb>
        </Breadcrumb>
        <ProductContent>
        </ProductContent>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMenu from './components/ProductMenu.vue';
import ProductContent from './components/ProductContent.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import emitter from '../../assets/javascript/emitter';

export default {
  data() {
    return {
      product: {},
      page: {
        selected: 'list',
        category: '所有商品',
        id: '',
        title: '',
        product: {},
      },
    };
  },
  components: {
    ProductMenu,
    ProductContent,
    Breadcrumb,
  },
  provide() {
    return {
      page: this.page,
    };
  },
  watch: {
    $route(to) {
      console.log('to', to);
      const { id } = to.params;
      const { category } = to.query;
      if (id) {
        this.page.id = id;
        this.page.selected = 'item';
        this.getProduct(id);
      }
      if (category) {
        this.page.id = '';
        this.page.title = '';
        this.page.product = {};
        this.page.selected = 'list';
        this.page.category = category;
      }
    },
  },
  methods: {
    getProduct(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.page.category = res.data.product.category;
          this.page.title = res.data.product.title;
          this.page.product = res.data.product;
          console.log(res.data.product);
        } else {
          console.log(res.data.message);
        }
      });
    },
  },
  created() {
    const { id } = this.$route.params;
    const { category } = this.$route.query;
    if (id) {
      this.getProduct(id);
      this.page.id = id;
      this.page.selected = 'item';
    }
    if (category) {
      this.page.category = category;
      this.page.selected = 'list';
    }
  },
  mounted() {
    emitter.on('navbar-get-product', () => {
      this.page.category = '所有商品';
      this.page.selected = 'list';
    });
  },
};
</script>

<style lang="scss" scoped>
.header-image {
  background-image: url('https://images.unsplash.com/photo-1595871213029-7476de0d71dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1844&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    font-family: 'Playfair Display', "Noto Sans TC", serif;
    letter-spacing: 1.5px;
  }
}
</style>
