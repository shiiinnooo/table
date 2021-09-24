<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">HOME</router-link>
      </li>
      <li class="breadcrumb-item" :class="{active : page.selected === 'list'}" aria-current="page">
        <router-link :to="`/product?category=${page.category}`">
          {{ page.category }}
        </router-link>
      </li>
      <li v-if="page.selected === 'item'"
        class="breadcrumb-item active" aria-current="page">
        {{ page.title }}
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  inject: ['page'],
};
</script>

<style lang="scss" scoped>
  a:hover {
    text-decoration: underline;
  }
</style>
