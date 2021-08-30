<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ProductMenu class="position-sticky" style="top: 70px;"></ProductMenu>
      </div>
      <div class="col-md-9">
        <Breadcrumb></Breadcrumb>
        <ProductContent></ProductContent>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMenu from './components/ProductMenu.vue';
import ProductContent from './components/ProductContent.vue';
import Breadcrumb from './components/Breadcrumb.vue';

export default {
  components: {
    ProductMenu,
    ProductContent,
    Breadcrumb,
  },
};
</script>
