<script lang="ts">
import ContactForm from "../components/Contact-form.vue";
import HeroSlider from "../components/Hero-slider.vue";

export default {
  Name: "The Whiteheadlaw",
  components: {
    ContactForm,
    HeroSlider,
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
            <button>contact us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Form Section -->
  <div id="contact" class="drop-us-form">
    <div class="form-title">
      <h2>Drop us a line!</h2>
    </div>
    <ContactForm />
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
          <button>&nbsp;</button>
          <button class="w-hover">contact us</button>
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
  <div class="container">
    <div id="testimonial" class="our-focus-section our-client-review">
      <h1>Our Clients Reviews</h1>
      <div class="cards">
        <div class="col">
          <div class="col-img our-client-review-img">
            <img src="@/assets/images/John-1.png" alt="" srcset="" />
          </div>
          <div class="col-title col-1 our-client-review-desc">
            <h2>John Doe</h2>
            <p>Client</p>
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
          <div class="col-img our-client-review-img">
            <img src="@/assets/images/John-2.png" alt="" srcset="" />
          </div>
          <div class="col-title col-2 our-client-review-desc">
            <h2>John Doe</h2>
            <p>client</p>
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
          <div class="col-img our-client-review-img">
            <img src="@/assets/images/John-3.png" alt="" srcset="" />
          </div>
          <div class="col-title col-3 our-client-review-desc">
            <h2>John Doe</h2>
            <p>Client</p>
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

  <!-- Our Blog -->
  <div class="our-blog">
    <div class="blog-title container">
      <h3>OUR BLOG</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
    </div>
    <div class="feature-img">
      <img src="@/assets/images/first-blog-feat-img.png" alt="" srcset="" />
      <div class="blog-sum">
        <h4>Payment for medical treatment related to the work accident</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
        <a href="#">View More</a>
      </div>
    </div>
    <div class="blog-slide-nav">
      <div class="blog-slide-nav-line">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <div class="blog-circle">
        <img src="@/assets/images/blog-circle.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
