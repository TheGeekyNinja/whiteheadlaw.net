<template>
  <div>
    <footer>
      <div class="container">
        <div class="footer-container">
          <hr />
          <div class="footer-nav">
            <ul class="main-nav footer-menu">
              <li>
                <!-- <router-link to="/about">About Us</router-link> -->
                <a href="/#about">About Us</a>
              </li>
              <!-- <li>
                <router-link :to="{ name: 'Video' }">Videos</router-link>
              </li> -->
              <li>
                <!-- <router-link to="/testimonials">Testimonials</router-link> -->
                <a href="/#testimonial">Testimonials</a>
              </li>
              <li>
                <!-- <router-link to="/contact-us">Contact Us</router-link> -->
                <a href="/#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <hr />
          <div class="footer-copy-section">
            <div class="bottom-most">
              &copy; Copyright 2004-2022 <a href="/">whiteheadlaw</a> - All
              Rights Reserved
            </div>
            <div class="icon">
              <a :href="facebook_url" target="_blank">
                <img
                  class="facebook"
                  src="../assets/images/Facebook.png"
                  alt=""
                />
              </a>
              <a :href="instagram_url" target="_blank">
                <img
                  class="instagram"
                  src="../assets/images/Instagram.png"
                  alt=""
                />
              </a>
              <a :href="twitter_url" target="_blank">
                <img
                  class="twitter"
                  src="../assets/images/Twitter.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Footer",
    data() {
      return {
        facebook_url: "https://facebook.com",
        instagram_url: "https://instagram.com",
        twitter_url: "https://twitter.com",
      };
    },
  });
</script>
