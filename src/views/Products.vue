<template>
  <div class="container-xl">
    <div class="row">
      <div class="col-md-3 sidebar">
        <Accordion></Accordion>
      </div>
      <div class="col-md-9 content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '../components/Accordion.vue';

export default {
  components: {
    Accordion,
  },
};
</script>
