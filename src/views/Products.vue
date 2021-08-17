<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ProductMenu></ProductMenu>
      </div>
      <div class="col-md-9">
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
            v-for="product in products"
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
        <div class="d-flex justify-content-center">
          <Pagination
            :page="pagination"
            @get-product="getProducts"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMenu from '../components/ProductMenu.vue';
import Pagination from '../components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  components: {
    ProductMenu,
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          console.log(res);
        }
      });
    },
  },
  mounted() {
    this.getProducts();
    console.log(this.products);
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
