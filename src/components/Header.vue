<template>
  <div class="navigation" :class="{ 'scrolled-nav': scrollNav }">
    <div class="container">
      <nav class="top-nav">
        <div class="logo">
          <router-link :to="{ name: 'Home' }"
            ><img
              class="logo-img"
              src="@/assets/images/logo.png"
              alt=""
              srcset=""
          /></router-link>
        </div>
        <ul v-show="!mobile" class="main-nav">
          <li>
            <router-link :to="{}">About Us</router-link>
          </li>
          <li>
            <router-link :to="{}">Videos</router-link>
          </li>
          <li>
            <router-link :to="{}">Testimonials</router-link>
          </li>
          <li>
            <router-link :to="{}">Contact Us</router-link>
          </li>
        </ul>
        <div class="nav-icon">
          <i
            @click="toToggleMobileNav"
            v-show="mobile"
            class="fas fa-bars"
            :class="{ 'icon-active': mobileNav }"
          ></i>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropDown-nav">
            <li>
              <router-link :to="{}">About Us</router-link>
            </li>
            <li>
              <router-link :to="{}">Videos</router-link>
            </li>
            <li>
              <router-link :to="{}">Testimonials</router-link>
            </li>
            <li>
              <router-link :to="{}">Contact Us</router-link>
            </li>
          </ul>
        </transition>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Header",
  data() {
    return {
      scrollNav: null,
      mobile: false,
      mobileNav: false,
      windowsWidth: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toToggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowsWidth = window.innerWidth;
      if (this.windowsWidth <= 767) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>
