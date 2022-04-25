<template>
  <div class="navigation">
    <div class="container">
      <nav class="top-nav">
        <div class="logo">
          <router-link to="/"
            ><img
              class="logo-img"
              src="../assets/images/logo.png"
              alt=""
              srcset=""
          /></router-link>
        </div>
        <div>
          <ul class="main-nav">
            <li>
              <router-link to="/about">About Us</router-link>
            </li>
            <li>
              <router-link to="/videos">Videos</router-link>
            </li>
            <li>
              <router-link to="/testimonial">Testimonials</router-link>
            </li>
            <li>
              <router-link to="/contact-us">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
