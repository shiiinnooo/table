<template>
  <div class="swiper">
    <swiper :autoplay="{ delay: 5000 }">
      <swiper-slide>
        <div class="slide slide-1">
          <div class="container-xl h-100 d-flex flex-column justify-content-around">
            <div
              class="slide-text ms-sm-5 ms-xl-0"
              style="
                background: rgba(0, 0, 0, 0.25);
              "
            >
              <h2 class="slide-title text-light m-0">一日之計在於晨</h2>
              <p class="text-light m-0">BreakFast Time</p>
            </div>
            <div class="align-self-center text-center">
              <button
                type="button"
                class="btn btn-outline-light border-2 py-3 px-5 rounded-pill fw-bold"
                @click="$router.push('/product')"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide slide-2">
          <div class="container-xl h-100 d-flex flex-column justify-content-around">
            <div
              class="slide-text ms-sm-5 ms-xl-0"
              style="
                background: rgba(0, 0, 0, 0.3);
              "
            >
              <h2 class="slide-title text-white m-0">午後時光，享受愜意的午茶</h2>
              <p class="text-white m-0">Tea Time</p>
            </div>
            <div class="align-self-center text-center">
              <button
                type="button"
                class="btn btn-outline-light border-2 py-3 px-5 rounded-pill fw-bold"
                @click="$router.push('/product')"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide slide-3">
          <div class="container-xl h-100 d-flex flex-column justify-content-around">
            <div
              class="slide-text ms-sm-5 ms-xl-0"
              style="
                background: rgba(235, 235, 235, 0.3);
              "
            >
              <h2 class="slide-title text-light m-0">與家人相聚的晚餐時光</h2>
              <p class="text-light m-0">Dinner with family.</p>
            </div>
            <div class="align-self-center text-center">
              <button
                type="button"
                class="btn btn-outline-light border-2 py-3 px-5 rounded-pill fw-bold"
                @click="$router.push('/product')"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="slogan container-lg">
    <div class="row py-5 animate__animated animate__backInUp">
      <div
        class="
          slogan-item
          col-sm-4
          h-100
          d-flex
          justify-content-center
          align-items-center
          text-center
          py-4
        "
      >
        <div>
          <span class="material-icons-outlined material-icons md-36">
            thumb_up_off_alt
          </span>
          <p class="fw-bold">MIT 製造，品質安心有保證</p>
        </div>
      </div>
      <div
        class="
          slogan-item
          col-sm-4
          h-100
          d-flex
          justify-content-center
          align-items-center
          text-center
          py-4
        "
      >
        <div>
          <span class="material-icons-outlined material-icons md-36">
            timer
          </span>
          <p class="fw-bold">出貨需等待 3-5 個工作天</p>
        </div>
      </div>
      <div
        class="
          col-sm-4
          h-100
          d-flex
          justify-content-center
          align-items-center
          text-center
          py-4
        "
      >
        <div>
          <span class="material-icons-outlined material-icons md-36">
            sentiment_satisfied_alt
          </span>
          <p class="fw-bold">TAbLe 提供完善的售後服務</p>
        </div>
      </div>
    </div>
    <div class="newProduct row">
      <div class="image col-lg-7 text-white
      d-flex flex-column justify-content-center align-items-center">
        <h5 style="letter-spacing: 2px;">打造專屬於您的餐桌時尚</h5>
        <h2 class="fs-1 fw-bold pt-3 pb-2" style="letter-spacing: 4px;">最新商品</h2>
        <button type="button"
          class="btn btn-outline-light rounded-pill my-3 py-3 px-5
          border-2 fw-bold"
          style="letter-spacing: 2px;"
          @click="$router.push('/product')"
          >SHOP NOW</button>
      </div>
      <div class="sub-img col-lg-5 d-flex align-items-end d-none d-lg-flex
        animate__animated animate__backInUp">
        <img class="w-100 position-relative"
        style="left: -48px;"
        src="https://images.pexels.com/photos/8112775/pexels-photo-8112775.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
      </div>
    </div>
  </div>
  <div class="categoryProduct my-5">
    <div class="row m-0">
      <div class="image-block image col-md-3 h-100 m-0 p-0 text-white position-relative"
        @click="routerPush('玻璃杯')">
        <img src="https://images.unsplash.com/photo-1589657214420-1916de2c34cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEwNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="">
        <p class="position-absolute text-center fs-3 fw-bold">
          玻璃杯
          <span class="d-block fs-6 fw-normal">Glass</span>
        </p>
      </div>
      <div class="image-block col-md-3 row h-100 m-0 p-0">
        <div class="image col-12 h-50 m-0 p-0 text-white position-relative"
          @click="routerPush('馬克杯')">
          <img src="https://images.pexels.com/photos/4065894/pexels-photo-4065894.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
          <p class="position-absolute text-center fs-4 fw-bold">
            馬克杯
            <span class="d-block fs-6 fw-normal">Cup</span>
          </p>
        </div>
        <div class="col-12 h-50 m-0 p-0 row">
          <div class="image col-6 h-100 m-0 p-0 text-white position-relative"
            @click="routerPush('盤子')">
            <img src="https://images.pexels.com/photos/6469339/pexels-photo-6469339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <p class="position-absolute text-center fs-4 fw-bold">
              盤子
              <span class="d-block fs-6 fw-normal">Plate</span>
            </p>
          </div>
          <div class="image col-6 h-100 m-0 p-0 text-white position-relative"
            @click="routerPush('其他餐具')">
            <img src="https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEwMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="">
            <p class="position-absolute text-center fs-4 fw-bold">
              其他餐具
              <span class="d-block fs-6 fw-normal">Others</span>
            </p>
          </div>
        </div>
      </div>
      <div class="image-block image col-md-3 h-100 m-0 p-0 text-light position-relative"
        @click="routerPush('碗')">
        <img src="https://images.pexels.com/photos/6962808/pexels-photo-6962808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
        <p class="position-absolute text-center fs-3 fw-bold">
          碗
          <span class="d-block fs-6 fw-normal">Bowl</span>
        </p>
      </div>
      <div class="image-block col-md-3 row h-100 m-0 p-0">
        <div class="col-12 h-50 m-0 p-0 row">
          <div class="image col-6 h-100 m-0 p-0 text-white position-relative shadow"
            @click="routerPush('砧板')">
            <img src="https://images.unsplash.com/photo-1587411768913-623b76d243c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDM3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="">
            <p class="position-absolute text-center fs-4 fw-bold">
              砧板
              <span class="d-block fs-6 fw-normal">Cutting board</span>
            </p>
          </div>
          <div class="image col-6 h-100 m-0 p-0 text-white position-relative"
            @click="routerPush('托盤')">
            <img src="https://images.pexels.com/photos/6962405/pexels-photo-6962405.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
            <p class="position-absolute text-center fs-4 fw-bold">
              托盤
              <span class="d-block fs-6 fw-normal">Tray</span>
            </p>
          </div>
        </div>
        <div class="image col-12 h-50 m-0 p-0 text-white position-relative"
          @click="routerPush('鍋具')">
          <img src="https://images.unsplash.com/photo-1587377224035-72144bf39e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDMzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="">
          <p class="position-absolute text-center fs-4 fw-bold">
            鍋具
            <span class="d-block fs-6 fw-normal">Pot / Pan</span>
          </p>
        </div>
      </div>
    </div>
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
  methods: {
    routerPush(category) {
      this.$router.push(`/product?category=${category}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  .swiper {
    .slide-1 {
      background-image: url('https://images.unsplash.com/photo-1604300026894-75f90702c181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80');
    }
    .slide-2 {
      background-image: url('https://images.unsplash.com/photo-1596789320219-f43eaaa45e02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80');
    }
    .slide-3 {
      background-image: url('https://images.unsplash.com/photo-1607448421773-f74d4b9b5919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80');
    }
    .slide {
      height: 80vh;
      width: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      .slide-text {
        padding: 50px 60px;
        width: 600px;
        @media (max-width: 767px) {
          width: 480px;
          padding: 40px 50px;
        }
        @media (max-width: 575px) {
          max-width: 400px;
        }
        h2 {
          font-size: 36px;
          font-family: 'Noto Serif TC', serif;
          font-weight: 700;
          letter-spacing: 2px;
          @media (max-width: 767px) {
            font-size: 32px;
          }
          @media (max-width: 575px) {
            font-size: 28px;
          }
        }
        p {
          font-size: 18px;
          // font-family: "Playfair Display", serif;
          letter-spacing: 2px;
          @media (max-width: 767px) {
            font-size: 16px;
          }
          @media (max-width: 575px) {
            font-size: 14px;
          }
        }
      }
      button {
        letter-spacing: 2px;
      }
    }
  }

  .slogan {
    .slogan-item {
      border-right: 2px solid #dcdcdc;
      @media (max-width: 575px) {
        border-right: 0;
        border-bottom: 2px solid #dcdcdc;
      }
    }
  }

  .newProduct {
    margin-bottom: 80px;
    .image {
      height: 600px;
      background-image: url('https://images.pexels.com/photos/6123359/pexels-photo-6123359.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      opacity: 0.9;
      @media (max-width: 575px) {
        height: 400px;
      }
    }
    .sub-img {
      img {
        height: 480px;
        object-fit: cover;
        border: 8px solid white;
      }
    }
  }

  .categoryProduct {
    >div {
      height: 400px;
      @media (max-width: 991px) {
        height: 300px;
      }
      @media (max-width: 767px) {
        height: auto;
      }
    }
    .image {
      overflow: hidden;
      &:hover {
        cursor: pointer;
        img {
          opacity: 1;
          filter: grayscale(0);
          -webkit-filter: grayscale(0);
          transform: scale(1.1);
          -ms-transform: scale(1.1); /* IE 9 */
          -moz-transform: scale(1.1); /* Firefox */
          -webkit-transform: scale(1.1); /* Safari and Chrome */
          -o-transform: scale(1.1); /* Opera */
        }
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: transform .5s;
        opacity: 0.9;
        filter: grayscale(0.9);
        -ms-filter: grayscale(0.9); /* IE 9 */
        -moz-filter: grayscale(0.9); /* Firefox */
        -webkit-filter: grayscale(0.9); /* Safari and Chrome */
        -o-filter: grayscale(0.9); /* Opera */
        @media (max-width: 767px) {
          height: 200px;
          filter: 0;
          -ms-filter: grayscale(0); /* IE 9 */
          -moz-filter: grayscale(0); /* Firefox */
          -webkit-filter: grayscale(0); /* Safari and Chrome */
          -o-filter: grayscale(0); /* Opera */
        }
        @media (max-width: 767px) {
          height: 160px;
        }
      }
      p {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 100px;
        height: 30px;
      }
    }
  }
</style>
