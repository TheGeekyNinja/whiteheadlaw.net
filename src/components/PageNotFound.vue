<template>
  <div class="hero-bg">
    <div class="container">
      <div class="error">
        <h1>404</h1>
        <h2>ERROR</h2>
        <p>You have lost your way</p>
        <router-link :to="{ name: 'Home' }"
          ><button class="error-button">
            <i class="fas fa-reply"></i> Return Home
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Page Not Found",
});
</script>
