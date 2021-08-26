<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">HOME</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">產品頁</li>
    </ol>
  </nav>
  <div class="row">
    <div
      class="col-6 col-lg-3"
      v-for="product in filterProducts"
      :key="product.id"
    >
      <div class="card h-100 border-0">
        <router-link :to="`/product/${product.id}`">
          <img
            :src="product.imgUrl || product.imageUrl"
            class="card-img-top"
            style="object-fit: cover"
          />
        </router-link>
        <div class="card-body d-flex flex-column justify-content-between">
          <h6 class="card-title">
            <router-link :to="`/product/${product.id}`">
              {{ product.title }}
            </router-link>
          </h6>
          <p class="card-text">NT. {{ toCurrency(product.price) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../../../../assets/javascript/emitter';

export default {
  data() {
    return {
      products: [],
      category: '',
    };
  },
  computed: {
    filterProducts() {
      return this.products.filter((item) => item.category.match(this.category));
    },
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
        }
        console.log(res);
      });
    },
    selectCategory(item) {
      this.category = item;
    },
  },
  created() {
    emitter.on('select-category', (category) => {
      this.selectCategory(category);
    });
  },
  mounted() {
    this.category = this.$route.query.category;
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 200px;
  @media (min-width: 415px) {
    height: 280px;
  }
  @media (min-width: 576px) {
    height: 320px;
  }
  @media (min-width: 992px) {
    height: 240px;
  }
  @media (min-width: 1200px) {
    height: 270px;
  }
}
</style>
