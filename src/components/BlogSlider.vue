<template>
  <div class="our-blog">
    <div class="blog-title container">
      <h3>OUR BLOG</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
    </div>

    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :slidesPerGroup="1"
      :loop="true"
      :grabCursor="true"
      :loopFillGroupWithBlank="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :speed="4000"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="feature-img container">
          <img src="@/assets/images/first-blog-feat-img.png" alt="" srcset="" />
          <div class="blog-sum">
            <h4>Payment for medical treatment related to the work accident</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <a href="#">View More</a>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="feature-img container">
          <img src="@/assets/images/first-blog-feat-img.png" alt="" srcset="" />
          <div class="blog-sum">
            <h4>Payment for medical treatment related to the work accident</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <a href="#">View More</a>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="feature-img container">
          <img src="@/assets/images/first-blog-feat-img.png" alt="" srcset="" />
          <div class="blog-sum">
            <h4>Payment for medical treatment related to the work accident</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <a href="#">View More</a>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="feature-img container">
          <img src="@/assets/images/first-blog-feat-img.png" alt="" srcset="" />
          <div class="blog-sum">
            <h4>Payment for medical treatment related to the work accident</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <a href="#">View More</a>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="feature-img container">
          <img src="@/assets/images/first-blog-feat-img.png" alt="" srcset="" />
          <div class="blog-sum">
            <h4>Payment for medical treatment related to the work accident</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <a href="#">View More</a>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="feature-img container">
          <img src="@/assets/images/first-blog-feat-img.png" alt="" srcset="" />
          <div class="blog-sum">
            <h4>Payment for medical treatment related to the work accident</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <a href="#">View More</a>
          </div>
        </div></swiper-slide
      >
    </swiper>

    <div class="blog-slide-nav">
      <div class="blog-circle">
        <img src="@/assets/images/blog-circle.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
});
</script>
