<template>
  <div class="product-menu pe-lg-4">
    <ul class="p-0 text-center border border-secondary rounded">
      <li class="border-bottom p-2 border-secondary">
        <router-link to="/product?category=所有商品"
          >所有商品</router-link
        >
      </li>
      <li class="p-2 border-bottom border-secondary">
        <a
          class="tableBtn d-block"
          data-bs-toggle="collapse"
          role="button"
          href="#table-collapse"
          aria-controls="table-collapse"
        >
          <span>餐桌</span>
          <span
            class="material-icons-outlined align-top fs-5 fw-light ms-1"
          >
          </span>
        </a>
        <ul class="sub-product-menu collapse" id="table-collapse">
          <li class="my-2" v-for="item in categories.table" :key="item">
            <a @click="routerPush(item)"
            data-bs-toggle="collapse"
            href="#table-collapse" role="button"
            aria-controls="table-collapse">
              {{ item }}
            </a>
          </li>
        </ul>
      </li>
      <li class="p-2 border-bottom border-secondary">
        <a
          class="tableBtn d-block"
          data-bs-toggle="collapse"
          role="button"
          href="#kitchen-collapse"
          aria-controls="kitchen-collapse"
        >
          <span>廚房</span>
          <span
            class="material-icons-outlined align-top fs-5 fw-light ms-1"
          >
          </span>
        </a>
        <ul class="sub-product-menu collapse" id="kitchen-collapse">
          <li class="my-2" v-for="item in categories.kitchen" :key="item">
            <a @click="routerPush(item)"
            data-bs-toggle="collapse"
            href="#kitchen-collapse" role="button"
            aria-controls="kitchen-collapse">
              {{ item }}
            </a>
          </li>
        </ul>
      </li>
      <li class="p-2 border-bottom border-secondary">
        <router-link to="/product?category=香氛系列"
          >香氛系列</router-link
        >
      </li>
      <li class="p-2 border-secondary">
        <router-link to="/product?category=TAbLe選物">
          <span style="font-weight: 500">TAbLe </span>選物
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import Collapse from 'bootstrap/js/dist/collapse';

export default {
  data() {
    return {
      categories: {
        table: ['玻璃杯', '馬克杯', '碗', '盤子', '其他餐具'],
        kitchen: ['鍋具', '砧板', '托盤'],
      },
    };
  },
  methods: {
    routerPush(item) {
      this.$router.push(`/product?category=${item}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-menu {
  @media (min-width: 992px) {
    position: sticky;
    top: 80px;
    padding-bottom: 1rem;
  }
  .sub-product-menu li {
    text-indent: -1.5rem;
  }
  .tableBtn .material-icons-outlined::after {
    content: "arrow_drop_down";
  }
  .tableBtn[aria-expanded="true"] .material-icons-outlined::after {
    content: "arrow_drop_up";
  }
}
a:hover {
  color: #9b9999;
}
</style>
