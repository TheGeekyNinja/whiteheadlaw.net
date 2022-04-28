<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "app",
  components: {
    Header,
    Footer,
  },
});
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
