<template>
  <div class="about-hero indemnity-fund">
    <h1>Personal Injury / Wrongful Death</h1>
  </div>

  <div class="container">
    <div class="special-sec-1">
      <div class="special-text">
        <p>
          Have you or a family member been injured in an automobile accident due
          to the negligence of another driver? Do you have questions on how
          personal injury cases work and what you may be entitled to? The video
          will give you answers to some of those questions directly from
          attorney Richard Whitehead.
        </p>
      </div>
      <div class="special-video">
        <videoPlayer src="https://player.vimeo.com/video/63482032" />
      </div>
    </div>
    <div class="special-sec-1 mobile-ver">
      <div class="special-video">
        <videoPlayer src="https://player.vimeo.com/video/63370198" />
      </div>
      <div class="special-text">
        <p>
          Have you lost a family member due to the negligence of someone else.
          Do you need help in evaluating your case and your rights. The video
          will help explain the process as described by attorney Richard
          Whitehead who has 41 years of experience practicing injury law.
        </p>
      </div>
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
