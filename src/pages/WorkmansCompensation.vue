<template>
  <div class="about-hero worksman-page">
    <h1>Workman's Compensation</h1>
  </div>
  <div class="container">
    <div class="worksman-desc">
      <p>
        The videos below will give you information directly from the attorney on
        how he proceeds with an Idaho Workers Compensation case along with what
        you may be entitled to as an injured worker.
      </p>
    </div>
    <div class="worksman-video">
      <videoPlayer src="https://player.vimeo.com/video/63371403" />
      <videoPlayer src="https://player.vimeo.com/video/63372184" />
    </div>
  </div>
</template>

<script lang="ts">
  import videoPlayer from "../components/videoPlayer.vue";
  export default {
    components: {
      videoPlayer: videoPlayer,
    },
  };
</script>
