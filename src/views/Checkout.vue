<template>
  <div class="checkout bg-light">
    <div class="container">
      <div class="checkout-list">
        <ul class="d-flex justify-content-center">
          <li :class="{ 'bg-primary': $route.path.includes('step1') }">step1</li>
          <li :class="{ 'bg-primary': $route.path.includes('step2') }">step2</li>
          <li :class="{ 'bg-primary': $route.path.includes('step3') }">step3</li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.checkout-list {
  ul {
    li {
      width: 200px;
    }
  }
}
</style>
