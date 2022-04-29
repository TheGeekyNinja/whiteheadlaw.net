<template>
  <div class="hero-slider">
    <Carousel
      :slideNavigation="true"
      :slidePagination="true"
      :slideAutoPlay="true"
      :slideTimeOut="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slider v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slider-info">
          <img :src="getImageUrl(slide)" alt="" />
        </div>
      </Slider>
    </Carousel>
    <main class="inner-container">
      <div class="inner-section"></div>
      <div class="left-col"></div>
      <div class="right-col">
        <div class="art-board">
          <img src="@/assets/images/Artboard 19 1.png" alt="" srcset="" />
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
    </main>
  </div>
</template>

<script lang="ts">
import Carousel from "../components/slider/Carousel.vue";
import Slider from "../components/slider/Slider.vue";

export default {
  name: "Hero Slider",
  components: {
    Carousel,
    Slider,
  },
  setup() {
    // Get the url of the images for slider
    const getImageUrl = (imgName: string) => {
      return new URL(
        `../assets/images/hero-slider/${imgName}.jpg`,
        import.meta.url
      ).href;
    };
    // Use to run the for loop
    const carouselSlides = ["Hero-1", "Hero-2", "Hero-3", "Hero-4", "Hero-5"];

    return { carouselSlides, getImageUrl };
  },
};
</script>
