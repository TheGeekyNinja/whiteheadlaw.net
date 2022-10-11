<template>
  <div class="container">
    <div class="indemnityfund-page">
      <h1>Special Indemnity Fund</h1>
      <div>
        <p>
          Have you or a family member been injured in an automobile accident due
          to the negligence of another driver? Do you have questions on how
          personal injury cases work and what you may be entitled to? The video
          below will give you answers to some of those questions directly from
          attorney Richard Whitehead.
        </p>
        <p>
          Have you lost a family member due to the negligence of someone else.
          Do you need help in evaluating your case and your rights. Below is a
          video that will help explain the process as described by attorney
          Richard Whitehead who has 41 years of experience practicing injury
          law.
        </p>
        <p>Todo: Design updates</p>
        <videoPlayer src="https://player.vimeo.com/video/63482032" />
        <videoPlayer src="https://player.vimeo.com/video/63370198" />
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