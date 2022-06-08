<template>
  <div class="container">
    <div class="video-heading">
      <h1>Videos</h1>
    </div>
    <div class="player-container">
      <div class="player">
        <div class="player-sizer">
          <iframe
            :src="source1"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="player">
        <div class="player-sizer">
          <iframe
            :src="source2"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="player">
        <div class="player-sizer">
          <iframe
            :src="source3"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="player">
        <div class="player-sizer">
          <iframe
            :src="source4"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Video Page",
    data() {
      return {
        source1: "https://player.vimeo.com/video/63371403",
        source2: "https://player.vimeo.com/video/63372184",
        source3: "https://player.vimeo.com/video/63482032",
        source4: "https://player.vimeo.com/video/63370198",
      };
    },
  });
</script>
