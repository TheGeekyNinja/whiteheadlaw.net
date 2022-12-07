<template>
  <div class="main-home-slider">
    <div class="home-slider-inner">
      <Swiper
        :space-between="50"
        :modules="[Autoplay, Pagination, Navigation, EffectFade]"
        navigation
        :effect="'fade'"
        :pagination="{ clickable: true }"
        :loop="true"
        :autoplay="{ delay: 2500 }"
        :speed="800"
      >
        <SwiperSlide
          v-for="slides in sliderContent"
          :key="sliderImage"
        >
          <img
            :src="slides.sliderImage"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <main class="inner-container">
          <div class="inner-section">
            <div class="left-col">
              <div class="left-side-text">
                <ul>
                  <li>Idaho Workers Compensation Law</li>
                  <li>Personal Injury Auto Accident</li>
                  <li>Wrongful Death</li>
                </ul>
              </div>
            </div>
            <div class="right-col">
              <div class="art-board">
                <img
                  src="@/assets/images/Artboard-3.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="hero-text">
                <h2>IS IT TIME TO PUSH BACK?</h2>
                <h4>Get a solid legal opinion, today.</h4>
                <div class="btns">
                  <button>&nbsp;</button>
                  <button><a href="tel:2087655291"> Call WHITEHEAD</a></button>
                  <button>&nbsp;</button>
                  <button>
                    <a href="mailto:Info@whiteheadlaw.net">Send us an Email</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "swiper/css/effect-fade";
  import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
  const imageUrl = (imgName: string) => {
    return new URL(`../assets/images/hero-slider/${imgName}`, import.meta.url)
      .href;
  };
  console.log(imageUrl("Hero-1.jpg"));
  const sliderImage = ref("");
  const sliderContent = ref([
    {
      sliderImage: imageUrl("Hero-1.jpg"),
    },
    {
      sliderImage: imageUrl("Hero-2.jpg"),
    },
    {
      sliderImage: imageUrl("Hero-3.jpg"),
    },
    {
      sliderImage: imageUrl("Hero-4.jpg"),
    },
    {
      sliderImage: imageUrl("Hero-5.jpg"),
    },
  ]);
</script>

<style>
  /* .main-home-slider {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  } */

  .home-slider-inner {
    position: relative;
    height: 100vh;
  }

  .main-home-slider .swiper-button-prev {
    background-color: var(--secondary-color);
    color: #fff;
    border-radius: 100%;
    padding: 25px;
  }

  .main-home-slider .swiper-button-next {
    background-color: var(--secondary-color);
    color: #fff;
    border-radius: 100%;
    padding: 25px;
  }

  .main-home-slider .swiper-button-prev::after,
  .main-home-slider .swiper-button-next::after {
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
  }
  .main-home-slider .swiper-button-prev::after {
    margin-right: 5px;
  }

  .main-home-slider .swiper-pagination-bullet {
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 15px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 15px)
    );
    border-radius: 50%;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
    background: var(--secondary-color);
  }

  .main-home-slider .swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    border-radius: 50%;
    background: var(--white);
  }

  main {
    padding: 50px 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .left-side-text {
    background-color: rgba(0, 0, 0, 0.3);
    margin-left: 80px;
    padding: 20px 0 30px 80px;
    border-radius: 10px;
  }

  .left-side-text ul li {
    color: var(--white);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    line-height: 55px;
    font-weight: 600;
    padding-top: 20px;
  }

  .inner-section {
    padding-top: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 100px;
  }

  @media only screen and (max-width: 1366px) {
    .left-side-text ul li {
      font-size: 40px;
      line-height: 45px;
    }
  }
  @media only screen and (max-width: 767px) {
    .main-home-slider .swiper-button-prev,
    .main-home-slider .swiper-button-next {
      display: none;
    }
    .inner-section {
      flex-direction: column;
      gap: 40px;
    }

    .left-side-text {
      margin: 0;
    }
    .inner-container .inner-section .left-col {
      width: 100%;
    }

    .left-side-text ul li {
      font-size: 20px;
      line-height: 25px;
      padding-top: 8px;
    }
    .left-side-text {
      margin: 0 30px;
      padding: 20px 0 30px 50px;
    }
    .home-slider-inner {
      max-height: 1000px;
    }
  }

  @media only screen and (min-width: 1600px) {
    .inner-section {
      padding-top: 200px;
    }
  }
</style>
