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
              <img src="../assets/images/family-crest.png" alt="" srcset="" />
            </div>
            <div class="col-title col-1">
              <h2>Workman&apos;s Compensation</h2>
            </div>
            <div class="col-desc">
              <ul class="our-focus-lists">
                <li>
                  What are your benefits under Idaho Workers Compensation?
                </li>
                <li>
                  Are you tired of dealing with the workers’ compensation
                  adjuster?
                </li>
                <li>
                  Have they denied you medical treatment you believe you are
                  entitled to?
                </li>
                <li>Have your benefits been stopped?</li>
                <li>Are you getting everything you are entitled to?</li>
              </ul>
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
                Richard Whitehead with his over 40 years of experiencing in the
                field of Idaho Workers’ Compensation, Idaho Special Indemnity
                Fund cases, and personal injury accidents believes in an honest
                upfront approach. His legal team includes a very knowledgeable
                paralegal, Christina Sturgill, who has been with him for the
                last 10 years and who has been a certified Idaho Workers’
                Compensation Specialist at the advanced level since April of
                2013. Richard Whitehead and Christina Sturgill work together to
                obtain fair settlements in a timely manner under the Idaho Laws.
                We work together in educate our clients in order for them to
                make an informed decision about their case.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/justice.png" alt="" srcset="" />
            </div>
            <div class="col-title col-3">
              <h2>Special Indemnity Fund for the Permanently Disabled</h2>
            </div>
            <div class="col-desc">
              <p>
                Idaho Special Indemnity Fund is set up to pay Idaho Workers’
                Compensation workers that have pre-existing injuries and then
                suffer an additional accident where the injuries combined with
                their pre-existing injuries render then totally and permanently
                disabled and unable to return to work in any fashion. Do you
                have prior work or non-work-related medical injuries and now
                given a new injury are unsure if you will be able to return to
                work. You may have a case for lifetime benefits through the
                Idaho Special Indemnity Fund. Call our office for a free
                consultation to learn more. .
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/family-crest.png" alt="" srcset="" />
            </div>
            <div class="col-title col-1">
              <h2>Workman&apos;s Compensation</h2>
            </div>
            <div class="col-desc">
              <ul class="our-focus-lists">
                <li>
                  What are your benefits under Idaho Workers Compensation?
                </li>
                <li>
                  Are you tired of dealing with the workers’ compensation
                  adjuster?
                </li>
                <li>
                  Have they denied you medical treatment you believe you are
                  entitled to?
                </li>
                <li>Have your benefits been stopped?</li>
                <li>Are you getting everything you are entitled to?</li>
              </ul>
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
                Richard Whitehead with his over 40 years of experiencing in the
                field of Idaho Workers’ Compensation, Idaho Special Indemnity
                Fund cases, and personal injury accidents believes in an honest
                upfront approach. His legal team includes a very knowledgeable
                paralegal, Christina Sturgill, who has been with him for the
                last 10 years and who has been a certified Idaho Workers’
                Compensation Specialist at the advanced level since April of
                2013. Richard Whitehead and Christina Sturgill work together to
                obtain fair settlements in a timely manner under the Idaho Laws.
                We work together in educate our clients in order for them to
                make an informed decision about their case.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/justice.png" alt="" srcset="" />
            </div>
            <div class="col-title col-3">
              <h2>Special Indemnity Fund for the Permanently Disabled</h2>
            </div>
            <div class="col-desc">
              <p>
                Idaho Special Indemnity Fund is set up to pay Idaho Workers’
                Compensation workers that have pre-existing injuries and then
                suffer an additional accident where the injuries combined with
                their pre-existing injuries render then totally and permanently
                disabled and unable to return to work in any fashion. Do you
                have prior work or non-work-related medical injuries and now
                given a new injury are unsure if you will be able to return to
                work. You may have a case for lifetime benefits through the
                Idaho Special Indemnity Fund. Call our office for a free
                consultation to learn more. .
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/family-crest.png" alt="" srcset="" />
            </div>
            <div class="col-title col-1">
              <h2>Workman&apos;s Compensation</h2>
            </div>
            <div class="col-desc">
              <ul class="our-focus-lists">
                <li>
                  What are your benefits under Idaho Workers Compensation?
                </li>
                <li>
                  Are you tired of dealing with the workers’ compensation
                  adjuster?
                </li>
                <li>
                  Have they denied you medical treatment you believe you are
                  entitled to?
                </li>
                <li>Have your benefits been stopped?</li>
                <li>Are you getting everything you are entitled to?</li>
              </ul>
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
                Richard Whitehead with his over 40 years of experiencing in the
                field of Idaho Workers’ Compensation, Idaho Special Indemnity
                Fund cases, and personal injury accidents believes in an honest
                upfront approach. His legal team includes a very knowledgeable
                paralegal, Christina Sturgill, who has been with him for the
                last 10 years and who has been a certified Idaho Workers’
                Compensation Specialist at the advanced level since April of
                2013. Richard Whitehead and Christina Sturgill work together to
                obtain fair settlements in a timely manner under the Idaho Laws.
                We work together in educate our clients in order for them to
                make an informed decision about their case.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="col">
            <div class="col-img">
              <img src="../assets/images/justice.png" alt="" srcset="" />
            </div>
            <div class="col-title col-3">
              <h2>Special Indemnity Fund for the Permanently Disabled</h2>
            </div>
            <div class="col-desc">
              <p>
                Idaho Special Indemnity Fund is set up to pay Idaho Workers’
                Compensation workers that have pre-existing injuries and then
                suffer an additional accident where the injuries combined with
                their pre-existing injuries render then totally and permanently
                disabled and unable to return to work in any fashion. Do you
                have prior work or non-work-related medical injuries and now
                given a new injury are unsure if you will be able to return to
                work. You may have a case for lifetime benefits through the
                Idaho Special Indemnity Fund. Call our office for a free
                consultation to learn more. .
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
