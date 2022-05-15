<template>
  <div class="container">
    <div id="testimonial" class="our-focus-section our-client-review">
      <h1>Our Clients Reviews</h1>
      <div class="cards">
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
          :pagination="{ clickable: true }"
          :navigation="false"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
              pagination: {
                clickable: true,
              },
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
              slidesPerGroup: 3,
              pagination: {
                clickable: true,
              },
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 50,
              slidesPerGroup: 3,
              pagination: {
                clickable: true,
              },
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-1.png" alt="" srcset="" />
              </div>
              <div class="col-title col-1 our-client-review-desc">
                <h2>John Doe</h2>
                <p>Client</p>
              </div>
              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-2.png" alt="" srcset="" />
              </div>
              <div class="col-title col-2 our-client-review-desc">
                <h2>John Doe</h2>
                <p>client</p>
              </div>

              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-3.png" alt="" srcset="" />
              </div>
              <div class="col-title col-3 our-client-review-desc">
                <h2>John Doe</h2>
                <p>Client</p>
              </div>
              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-1.png" alt="" srcset="" />
              </div>
              <div class="col-title col-1 our-client-review-desc">
                <h2>John Doe</h2>
                <p>Client</p>
              </div>
              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-2.png" alt="" srcset="" />
              </div>
              <div class="col-title col-2 our-client-review-desc">
                <h2>John Doe</h2>
                <p>client</p>
              </div>

              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-3.png" alt="" srcset="" />
              </div>
              <div class="col-title col-3 our-client-review-desc">
                <h2>John Doe</h2>
                <p>Client</p>
              </div>
              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-1.png" alt="" srcset="" />
              </div>
              <div class="col-title col-1 our-client-review-desc">
                <h2>John Doe</h2>
                <p>Client</p>
              </div>
              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-2.png" alt="" srcset="" />
              </div>
              <div class="col-title col-2 our-client-review-desc">
                <h2>John Doe</h2>
                <p>client</p>
              </div>

              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <img src="@/assets/images/John-3.png" alt="" srcset="" />
              </div>
              <div class="col-title col-3 our-client-review-desc">
                <h2>John Doe</h2>
                <p>Client</p>
              </div>
              <div class="col-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagitt is ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibul um lacinia arcu
                  eget nulla.
                </p>
              </div>
            </div></swiper-slide
          >
        </swiper>
      </div>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: " Testimonials",
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
