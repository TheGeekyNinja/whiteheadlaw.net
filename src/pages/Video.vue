<template>
  <div class="container">
    <div class="player">
      <div class="player-sizer">
        <VideoPlayer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import VideoPlayer from "../components/VideoPlayer.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Video Page",
    components: {
      VideoPlayer,
    },
  });
</script>
