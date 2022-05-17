<template>
  <div class="container">
    <div class="our-focus-section">
      <h1>OUR FOCUS</h1>
      <swiper
        :slidesPerView="1"
        :spaceBetween="50"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :speed="5000"
        :slidesPerGroup="1"
        :grabCursor="true"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-01.png" alt="" srcset="" />
            </div>
            <div class="col-title col-1">
              <h2>Workman&apos;s Compensation</h2>
            </div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-02.png" alt="" srcset="" />
            </div>
            <div class="col-title col-2"><h2>Legal Representation</h2></div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-03.png" alt="" srcset="" />
            </div>
            <div class="col-title col-3">
              <h2>Special Indemnity Fund for the Permanently Disabled</h2>
            </div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-01.png" alt="" srcset="" />
            </div>
            <div class="col-title col-1">
              <h2>Workman&apos;s Compensation</h2>
            </div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-02.png" alt="" srcset="" />
            </div>
            <div class="col-title col-2"><h2>Legal Representation</h2></div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-03.png" alt="" srcset="" />
            </div>
            <div class="col-title col-3">
              <h2>Special Indemnity Fund for the Permanently Disabled</h2>
            </div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-01.png" alt="" srcset="" />
            </div>
            <div class="col-title col-1">
              <h2>Workman&apos;s Compensation</h2>
            </div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-02.png" alt="" srcset="" />
            </div>
            <div class="col-title col-2"><h2>Legal Representation</h2></div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/badges-03.png" alt="" srcset="" />
            </div>
            <div class="col-title col-3">
              <h2>Special Indemnity Fund for the Permanently Disabled</h2>
            </div>
            <div class="col-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagitt is ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibul um lacinia arcu eget nulla.
              </p>
            </div>
          </div></swiper-slide
        >
      </swiper>
      <div class="hr-line"><hr /></div>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
