<template>
  <div class="container">
    <div class="player-container">
      <div class="player">
        <div class="player-sizer">
          <iframe
            :src="src"
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
    props: ["src"],
    name: "videoPlayer",
    data(props) {
      return {
        videoSource: "https://player.vimeo.com/video/63371403",
        paramsrc: props.src,
      };
    },
  });
</script>
