<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">HOME</router-link>
      </li>
      <li class="breadcrumb-item" :class="{active : selected === 'list'}" aria-current="page">
        <router-link :to="`/product?category=${category}`">
          {{ category }}
        </router-link>
      </li>
      <li v-if="selected === 'item'"
        class="breadcrumb-item active" aria-current="page">
        {{ title }}
      </li>
    </ol>
  </nav>
</template>

<script>
import emitter from '../../../assets/javascript/emitter';

export default {
  data() {
    return {
      selected: '',
      category: '',
      title: '',
    };
  },
  created() {
    emitter.on('record-current-page', (item) => {
      this.title = '';
      this.selected = item.selected;
      if (item.category === undefined) {
        this.category = '所有商品';
      } else {
        this.category = item.category;
        if (item.selected === 'item') {
          this.title = item.title;
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
  a:hover {
    text-decoration: underline;
  }
</style>
