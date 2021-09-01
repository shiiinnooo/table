<template>
  <div class="product-menu" style="min-height: 80vh">
    <ul>
      <li class="my-2">
        <router-link
          class="fw-bold"
          to="/product"
          @click.prevent="selectCategory(''); recordPage('所有商品');"
          >所有商品</router-link
        >
      </li>
      <li class="my-2">
        <a
          class="fw-bold tableBtn"
          data-bs-toggle="collapse"
          role="button"
          href="#table-collapse"
          aria-expanded="true"
        >
          <span>餐桌</span>
          <span
            class="material-icons-outlined align-top fs-5 fw-light"
            style="padding-left: 48px"
          >
          </span>
        </a>
        <ul class="sub-product-menu show collapse" id="table-collapse">
          <li class="my-1" v-for="item in categories.table" :key="item">
            <router-link
              :to="`/product?category=${item}`"
              @click.prevent="selectCategory(item); recordPage(item);"
            >
              {{ item }}
            </router-link>
          </li>
        </ul>
      </li>
      <li class="my-2">
        <a
          class="fw-bold tableBtn"
          data-bs-toggle="collapse"
          role="button"
          href="#kitchen-collapse"
          aria-expanded="true"
        >
          <span>廚房</span>
          <span
            class="material-icons-outlined align-top fs-5 fw-light"
            style="padding-left: 48px"
          >
          </span>
        </a>
        <ul class="sub-product-menu show collapse" id="kitchen-collapse">
          <li class="my-1" v-for="item in categories.kitchen" :key="item">
            <router-link
              :to="`/product?category=${item}`"
              @click.prevent="selectCategory(item); recordPage(item);"
            >
              {{ item }}
            </router-link>
          </li>
        </ul>
      </li>
      <li class="my-2">
        <router-link
          class="fw-bold"
          to="/product?category=香氛系列"
          @click.prevent="selectCategory('香氛系列'); recordPage('香氛系列');"
          >香氛系列</router-link
        >
      </li>
      <li class="my-2">
        <router-link
          class="fw-bold"
          to="/product?category=TAbLe選物"
          @click.prevent="selectCategory('TAbLe選物'); recordPage('TAbLe選物');">
          <span style="font-weight: 500;">TAbLe </span>選物
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import emitter from '../../../assets/javascript/emitter';

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
    selectCategory(category) {
      emitter.emit('select-category', category);
    },
    recordPage(category) {
      emitter.emit('record-current-page', { selected: 'list', category });
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-product-menu li {
  text-indent: -1.5rem;
}
.tableBtn .material-icons-outlined::after {
  content: "add";
}
.tableBtn[aria-expanded="true"] .material-icons-outlined::after {
  content: "remove";
}
</style>
