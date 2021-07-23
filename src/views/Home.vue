<template>
  <div class="container">
    <swiper :autoplay="{delay: 3000}">
      <swiper-slide>
          <img
          src="https://images.unsplash.com/photo-1517870662726-c1d98ee36250?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
          />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://images.unsplash.com/photo-1520869578617-557561d7b114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://images.unsplash.com/photo-1556909172-6ab63f18fd12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </swiper-slide>
      ...
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Autoplay, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 85vh;
  width: 100%;
  object-fit: cover;
}
</style>
