<template>
  <div class="slider">
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "Slider",
};
</script>

<style scoped></style>
