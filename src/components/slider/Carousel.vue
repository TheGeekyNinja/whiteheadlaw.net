<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Slide Navigation -->
    <div v-if="slideNavEnabled" class="slider-nav">
      <div class="toggle-img left">
        <i @click="nextSlideControl" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-img right">
        <i @click="prevSlideControl" class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- Pagination feature -->
    <div class="pagination">
      <span
        v-if="paginationEnabled"
        v-for="(slide, index) in getSlideNumber"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        @click="goToSlideControl(index)"
      >
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  name: "Carousel",
  props: [
    "slideNavigation",
    "slidePagination",
    "slideAutoPlay",
    "slideTimeOut",
  ],

  setup(props) {
    // Control the current Slide visible
    const currentSlide = ref(1);
    // Get the number of slide we have
    const getSlideNumber = ref(null);

    // For Autoplay feature
    const autoPlaySlide = ref(
      props.slideAutoPlay === undefined ? true : props.slideAutoPlay
    );
    const timeOutSlideDuration = ref(
      props.slideTimeOut === undefined ? 5000 : props.slideTimeOut
    );

    // For Dynamic Slider Feature
    const paginationEnabled = ref(
      props.slidePagination === undefined ? true : props.slidePagination
    );
    const slideNavEnabled = ref(
      props.slideNavigation === undefined ? true : props.slideNavigation
    );

    // Next slide control
    const nextSlideControl = () => {
      if (currentSlide.value === getSlideNumber.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    // Previous slide Control
    const prevSlideControl = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    // Pagination click control

    const goToSlideControl = (index) => {
      currentSlide.value = index + 1;
    };

    // For Autoplay feature function
    const autoPlayControl = () => {
      setInterval(() => {
        nextSlideControl();
      }, timeOutSlideDuration.value);
    };

    if (autoPlaySlide.value) {
      autoPlayControl();
    }

    // Check the Number of slide we have | use for pagination control
    onMounted(() => {
      getSlideNumber.value = document.querySelectorAll(".slider").length;
      console.log(getSlideNumber.value);
    });

    return {
      currentSlide,
      getSlideNumber,
      nextSlideControl,
      prevSlideControl,
      goToSlideControl,
      paginationEnabled,
      slideNavEnabled,
    };
  },
};
</script>

<style scoped></style>
