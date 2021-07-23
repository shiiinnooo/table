<template>
    <Navbar></Navbar>
    <router-view></router-view>
    <footer class="py-5 bg-primary">
      <p class="text-dark">FOOTER</p>
    </footer>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
