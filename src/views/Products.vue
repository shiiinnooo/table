<template>
  <div class="container-xl">
    <div class="row">
      <div class="col-md-3 sidebar">
        <ProductMenu></ProductMenu>
      </div>
      <div class="col-md-9 content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMenu from '../components/ProductMenu.vue';

export default {
  components: {
    ProductMenu,
  },
};
</script>
