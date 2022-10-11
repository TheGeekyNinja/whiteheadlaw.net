<template>
  <div class="container">
    <div class="worksman-page">
      <h1>Workman's Compensation</h1>
      <div class="worksman-desc">
        <p>
          The video below will give you information directly from the attorney
          on how he proceeds with an Idaho Workers Compensation case along with
          what you may be entitled to as an injured worker.
        </p>
        <p>Todo: Design updates</p>
        <videoPlayer src="https://player.vimeo.com/video/63371403" />
        <videoPlayer src="https://player.vimeo.com/video/63372184" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import videoPlayer from "../components/videoPlayer.vue";
export default {
  components: {
    videoPlayer: videoPlayer,
  }
}
</script>