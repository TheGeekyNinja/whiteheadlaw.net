<script lang="ts">
  import ContactForm from "../components/Contact-form.vue";
  import HeroSlider from "../components/Hero-slider.vue";
  import OurFocusSlider from "../components/OurFocusSlider.vue";
  import Testimonials from "../components/TestimonialSlider.vue";
  import Blog from "../components/BlogSlider.vue";

  export default {
    Name: "The Whiteheadlaw",
    data() {
      return {
        about_contact_button: "#contact",
      };
    },
    components: {
      ContactForm,
      HeroSlider,
      OurFocusSlider,
      Testimonials,
      Blog,
    },
  };
</script>

<template>
  <!-- <div> -->
  <!-- <div class="hero-section">
      <main class="container">
        <div class="inner-section"></div>
        <div class="left-col"></div>
        <div class="right-col">
          <div class="art-board">
            <img src="@/assets/images/Artboard 19 1.png" alt="" srcset="" />
          </div>
          <div class="hero-text">
            <h2>IS IT TIME TO PUSH BACK?</h2>
            <h4>Get a solid legal opinion, today.</h4>
            <div class="btns">
              <button>&nbsp;</button>
              <button>Call WHITEHEAD</button>
              <button>&nbsp;</button>
              <button>Send us an Email</button>
            </div>
          </div>
        </div>
      </main>
      <div class="hero-footer">
        <img
          class="hero-footer-img"
          src="@/assets/images/bottomborderheader-01.png"
          alt=""
        />
      </div>
    </div>
  </div> -->

  <div class="Hero-slider-Section">
    <HeroSlider />
  </div>

  <!-- Focus Section -->
  <OurFocusSlider />
  <!-- About-us Page -->
  <div id="about" class="about-us">
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
          </div>
          <div class="about-us-btn">
            <button>&nbsp;</button>

            <button>
              <a class="about-btn-link" :href="about_contact_button"
                >contact us</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Idaho Workers Section -->
  <div class="idaho-workers-section">
    <div class="container">
      <div class="idaho-row-1">
        <div class="idaho-title-desc">
          <h2>Idaho Workers Compensation</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div class="idaho-btn">
          <button type="button">&nbsp;</button>
          <button type="button" class="w-hover">
            <a :href="about_contact_button">contact us</a>
          </button>
        </div>
      </div>
      <div class="idaho-row-2">
        <div class="idaho-img-left">
          <img src="@/assets/images/are-you-tired.png" alt="" srcset="" />
          <div class="idaho-img-left-desc">
            <p>
              Are you tired of dealing with the workers compensation adjusters?
            </p>
            <h3>read more</h3>
          </div>
        </div>
        <div class="idaho-img-right">
          <div class="idaho-img-right-top">
            <img
              src="../assets/images/have-they-stopped-you.png"
              alt=""
              srcset=""
            />
            <div class="idaho-img-right-top-desc">
              <p>Have they stopped your benefits?</p>
              <h3>read more</h3>
            </div>
          </div>
          <div class="idaho-img-right-bottom">
            <img
              src="../assets/images/are-you-getting-everything.png"
              alt=""
              srcset=""
            />
            <div class="idaho-img-right-bottom-desc">
              <p>Are you getting everything you are entitled to?</p>
              <h3>read more</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Our Client Reviews Section -->
  <Testimonials />

  <!-- Have Pre-existing Conditions Section -->
  <div class="container">
    <div class="pre-exixting-conditions-section">
      <div class="pre-ex-cond-img">
        <img src="../assets/images/HavePre-existingConditions.png" alt="" />
      </div>
      <div class="pre-ex-title">
        <h3>Have Pre-existing Conditions</h3>
        <div class="pre-ex-line-circle">
          <div class="pre-ex-line">
            <img src="@/assets/images/Rectangle-51.png" alt="" />
          </div>
          <div class="pre-ex-circle">
            <img src="@/assets/images/Ellipse-2.png" alt="" />
          </div>
        </div>
      </div>
      <div class="pre-ex-desc">
        <p>
          Have pre-existing conditions and now a new injury and unsure if you
          will be able to return to work. You may have a case for lifetime
          benefits through the idaho special indemnity fund.
        </p>
      </div>
    </div>
  </div>
  <!-- Form Section -->
  <div class="container">
    <div id="contact" class="drop-us-form">
      <div class="form-title">
        <h2>Drop us a line!</h2>
      </div>
      <div class="contact-inner-column">
        <ContactForm />
        <div class="contact-right-side">
          <div class="form-title">
            <h3>Contact information</h3>
            <p>
              You can contact us using the details below or use the contact
              form.
            </p>
          </div>
          <div class="address">
            <img src="../assets/images/map-icon.svg" alt="" />
            <div class="address-desc">
              <h4>Address&colon;</h4>
              <p>
                2469 South Silver Beach Road <br />
                Coeur d&apos;Alene&comma; ID 83814
              </p>
            </div>
          </div>
          <div class="office-hours">
            <img src="../assets/images/schedule.svg" alt="" />
            <div class="office-hours-desc">
              <h4>Office Hours&colon;</h4>
              <p>
                Monday&dash;Thursday <br />
                8&colon;00 am &dash; 5:&colon;00 pm PST<br />
                Friday <br />
                8&colon;00 am &dash; 3:&colon;00 pm PST
              </p>
            </div>
          </div>
          <div class="phone">
            <img src="../assets/images/phone.svg" alt="" />
            <div class="phone-desc">
              <h4>Phone&colon;</h4>
              <p>
                Toll free &lpar;800&rpar; 334&dash;5291 <br />
                &#40;208&#41; 765&dash;5291
              </p>
            </div>
          </div>
          <div class="fax">
            <img src="../assets/images/fax.svg" alt="" />
            <div class="fax-desc">
              <h4>Fax&colon;</h4>
              <p>&#40;208&#41; 765&dash;6895</p>
            </div>
          </div>
          <div class="email-add">
            <img src="../assets/images/email.svg" alt="" />
            <div class="email-add-desc">
              <h4>Email Address&colon;</h4>
              <p>info&commat;whiteheadlaw.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Our Blog -->
  <!-- <Blog /> -->
</template>
