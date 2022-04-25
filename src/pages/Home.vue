<template>
  <div>
    <div class="hero-section">
      <main class="container">
        <div class="inner-section"></div>
        <div class="left-col"></div>
        <div class="right-col">
          <div class="art-board">
            <img src="../assets/images/Artboard 19 1.png" alt="" srcset="" />
          </div>
          <div class="hero-text">
            <h3>IS IT TIME TO PUSH BACK?</h3>
            <h4>Get a solid legal opinion, today.</h4>
            <div class="btns">
              <button>Call WHITEHEAD</button>
              <button>Send us an Email</button>
            </div>
          </div>
        </div>
      </main>
      <div class="hero-footer">
        <img
          class="hero-footer-img"
          src="../assets/images/bottomborderheader-01.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- Focus Section -->
  <div class="container">
    <div class="our-focus-section">
      <h1>OUR FOCUS</h1>
      <div class="cards">
        <div class="col">
          <div class="col-img">
            <img src="../assets/images/badges-01.png" alt="" srcset="" />
          </div>
          <div class="col-title col-1">
            <h2>Workman&apos;s Compensation</h2>
          </div>
          <div class="col-desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagitt is ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibul um lacinia arcu eget nulla.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="col-img">
            <img src="../assets/images/badges-02.png" alt="" srcset="" />
          </div>
          <div class="col-title col-2"><h2>Legal Representation</h2></div>
          <div class="col-desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagitt is ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibul um lacinia arcu eget nulla.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="col-img">
            <img src="../assets/images/badges-03.png" alt="" srcset="" />
          </div>
          <div class="col-title col-3">
            <h2>Special Indemnity Fund for the Permanently Disabled</h2>
          </div>
          <div class="col-desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagitt is ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibul um lacinia arcu eget nulla.
            </p>
          </div>
        </div>
      </div>
      <div class="hr-line"><hr /></div>
      <div class="three-line">
        <div class="line-three"><hr /></div>
        <div class="line-two"><hr /></div>
        <div class="line-three"><hr /></div>
      </div>
    </div>
  </div>
  <!-- About-us Page -->
  <div class="about-us">
    <div class="container">
      <div class="about-us-inner-sec">
        <div class="about-us-sec-img">
          <img
            class="about-us-img"
            src="../assets/images/about-us-img.png"
            alt=""
          />
        </div>
        <div class="about-us-title-desc">
          <div class="about-us-title">
            <h2>About Us</h2>
          </div>
          <div class="about-us-desc">
            <p>
              We believe in providing a direct, honest approach in evaluating
              your workers compensation case. We provide caring support through
              our knowledgeable legal team, which is dedicated to providing
              processional legal representation to victims of serious on-the-job
              injuries and other actions caused by the negligence of
              individuals. Our firm practices Idaho Workers Compensation Law and
              personal injury actions for the state of Idaho. We practice
              personal injury in the State of Montana as well as Idaho.
            </p>
            <p>
              We believe in providing a direct, honest approach in evaluating
              your workers compensation case. We provide caring support through
              our knowledgeable legal team, which is dedicated to providing
              processional legal representation to victims of serious on-the-job
              injuries and other actions caused by the negligence of
              individuals. Our firm practices Idaho Workers Compensation Law and
              personal injury actions for the state of Idaho. We practice
              personal injury in the State of Montana as well as Idaho.
            </p>
          </div>
          <div class="about-us-btn">
            <button>contact us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Form Section -->
  <div class="drop-us-form">
    <div class="form-title">
      <h2>Drop us a line!</h2>
    </div>
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import ContactForm from "../components/Contact-form.vue";
</script>
