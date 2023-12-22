<template>
  <div class="container">
    <div id="testimonial" class="our-focus-section our-client-review">
      <h1>Our AVVO Clients Reviews</h1>
      <a
        class="review-link"
        href="https://www.avvo.com/attorneys/83816-id-richard-whitehead-21563.html#reviews"
        target="_blank"
        >Learn More</a
      >
      <div class="cards">
        <swiper
          :slidesPerView="1"
          :spaceBetween="50"
          :autoplay="{
            delay: 3000,
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
                <!-- <img src="@/assets/images/John-1.png" alt="" srcset="" /> -->
              </div>
              <div class="col-title col-1 our-client-review-desc">
                <h2>Brenda</h2>
                <p>Client</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="col-desc">
                <p>
                  He and his office staff are excellent to work with. They kept
                  us informed every step of the way. EXTREMELY knowledgeable. I
                  would, and have, refer family/friends to him. Can't say enough
                  about all they did for us through the entire process. He tells
                  it like it is, no bull, right to the point, no hidden agenda
                  or surprises. So happy he represented us !!!
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <!-- <img src="@/assets/images/John-2.png" alt="" srcset="" /> -->
              </div>
              <div class="col-title col-2 our-client-review-desc">
                <h2>John</h2>
                <p>client</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div class="col-desc">
                <p>
                  Richard Whitehead is an amazing lawyer. He is very reliable
                  and achieves great results. We are grateful for the help
                  received and if needed would again use his services. We would
                  highly recommend Richard to friends and family for his
                  services. Chrissy his Paralegal is very efficient, timely in
                  her responses and knowledgeable in her guidance. Great Team!.
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <!-- <img src="@/assets/images/John-3.png" alt="" srcset="" /> -->
              </div>
              <div class="col-title col-3 our-client-review-desc">
                <h2>Farmer Dave</h2>
                <p>Client</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="col-desc">
                <p>
                  “That's when I hired Mr. Whitehead for the damages part. He
                  did an excellent job of getting my medical and disability
                  portion of the suit resolved. While I am still suffering from
                  the accident I have additional monies to continue therapy.”
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <!-- <img src="@/assets/images/John-1.png" alt="" srcset="" /> -->
              </div>
              <div class="col-title col-1 our-client-review-desc">
                <h2>Jim</h2>
                <p>Client</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="col-desc">
                <p>
                  He was definitely on top of the case, even meeting with me to
                  view the site where I was injured. I highly recommend Richard
                  for anyone with any type of personal injury case..
                </p>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col">
              <div class="col-img our-client-review-img">
                <!-- <img src="@/assets/images/John-2.png" alt="" srcset="" /> -->
              </div>
              <div class="col-title col-2 our-client-review-desc">
                <h2>Scott</h2>
                <p>client</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div class="col-desc">
                <p>
                  I would like to take this opportunity to thank and highly
                  recommend the Whitehead Law Office in Coeur d'Alene for the
                  prompt and attentive service they provided in representing me.
                  It's hard to find enough superlatives, but they are one,
                  top-notch firm.
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
