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
        learn_more_comp: "/worksman",
        learn_more_special: "/indemnityfund",
        call_us_now: "tel:2087655291",
        email_us_now: "mailto:Info@whiteheadlaw.net",
        read_more: "/about",
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
<style type="text/css">

.free-consultations-section {
  padding: 80px 0 50px 0;
}
.free-consultations-section p {
  font-size:25px;
  font-family: var(--secondary-font);
}

.free-consultations-section h1 {
  text-align: center;
  font-size: 80px;
  padding-bottom: 40px;
}

</style>

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

  <div class="container">
    <h1 class="free-consultation">FREE CONSULTATION</h1>
    <div class="free-con-desc">
      <p>
        Our office works on a contingency fee basis which means that we do not
        get paid unless we are able to win you benefits. Given this we offer a
        one-hour free consultation for you to ask questions and to allow us to
        evaluate your claim.
      </p>
    </div>
    <div class="free-con-buttons">
      <div class="about-us-btn learn-more">
        <button>&nbsp;</button>

        <button>
          <a class="about-btn-link" :href="call_us_now">CALL US NOW</a>
        </button>
      </div>
      <div class="about-us-btn learn-more">
        <button>&nbsp;</button>

        <button>
          <a class="about-btn-link" :href="email_us_now">EMAIL US NOW</a>
        </button>
      </div>
    </div>
  </div>
  <!-- Focus Section -->
  <div class="container">
    <div class="our-focus-section">
      <h1>OUR FOCUS</h1>
      <div class="cards">
        <div class="col foc">
          <div class="col-img">
            <img src="../assets/images/family-crest.png" alt="" srcset="" />
          </div>
          <div class="col-title col-1">
            <h2>Workman&apos;s Compensation</h2>
          </div>
          <div class="col-desc">
            <ul class="our-focus-lists">
              <li>What are your benefits under Idaho Workers Compensation?</li>
              <li>
                Are you tired of dealing with the workers’ compensation
                adjuster?
              </li>
              <li>
                Have they denied you medical treatment you believe you are
                entitled to?
              </li>
              <li>Have your benefits been stopped?</li>
              <li>Are you getting everything you are entitled to?</li>
            </ul>
          </div>
          <div class="about-us-btn learn-more">
            <button>&nbsp;</button>

            <button>
              <a class="about-btn-link" :href="learn_more_comp">LEARN MORE</a>
            </button>
          </div>
        </div>

        <div class="col foc">
          <div class="col-img">
            <img src="../assets/images/badges-02.png" alt="" srcset="" />
          </div>
          <div class="col-title col-2">
            <h2>Personal Injury / Wrongful Death</h2>
          </div>
          <div class="col-desc">
            <p>
              Whitehead Law Group has a proven track record in automobile
              accidents, semi-truck accidents, propane gas explosions, and
              wrongful death cases. This wealth of experience includes claims
              against insurance companies and corporate America.
            </p>
            <p>
              Mr. Whitehead’s practice is limited to a contingency fee
              representation. This means no fee unless a recovery is received.
            </p>
            <p>
              Mr. Whitehead is licensed in Idaho and has been since 1982,
              Montana since 2001 and was a member of the Washington Bar until
              recently.
            </p>
          </div>
        </div>

        <div class="col foc">
          <div class="col-img">
            <img src="../assets/images/justice.png" alt="" srcset="" />
          </div>
          <div class="col-title col-3">
            <h2>Special Indemnity Fund for the Permanently Disabled</h2>
          </div>
          <div class="col-desc">
            <p>
              Idaho Special Indemnity Fund is set up to pay Idaho Workers’
              Compensation workers that have
              <strong> <u> pre-existing </u></strong> injuries and then suffer
              an <strong><u>additional accident</u></strong> where the injuries
              combined with their pre-existing injuries render then totally and
              permanently disabled and
              <strong> <u> unable to return to work in any fashion.</u></strong>
              Do you have prior work or non-work-related medical injuries and
              now given a new injury are unsure if you will be able to return to
              work. You may have a case for lifetime benefits through the Idaho
              Special Indemnity Fund.
            </p>
          </div>
          <div class="about-us-btn learn-more">
            <button>&nbsp;</button>

            <button>
              <a class="about-btn-link" :href="learn_more_special"
                >LEARN MORE</a
              >
            </button>
          </div>
        </div>
      </div>

      <!-- <div class="hr-line foc"><hr /></div>
      <div class="three-line">
          <div class="line-one"></div>
          <div class="line-two"></div>
          <div class="line-three"></div>
        </div> -->
    </div>
  </div>

  <!-- <OurFocusSlider /> -->
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
              We believe in providing a direct and aggressive approach in
              evaluating your workers compensation case. We provide caring
              support through our knowledgeable legal team, which is dedicated
              to providing professional legal representation to victims of
              serious on the job injuries and other victims of negligence.
            </p>
            <p>
              Attorney Richard Whitehead has over 41 years of experience in the
              field of injury law and has achieved certification as a Lifetime
              Idaho Workers’ Compensation Specialist through the Idaho Trial
              Lawyers Association.
            </p>
            <p>
              Richard Whitehead’s knowledgeable paralegal, Christina Sturgill,
              is a Certified Idaho Workers’ Compensation Specialist Advanced
              Level and has held this certification since 2013. She received her
              Associates of Applied Science with a major in paralegal from North
              Idaho College. She has three amazing children who she loves
              spending time with in the great outdoors of Idaho and Montana.
            </p>
            <p>
              Our firm practices Idaho Workers Compensation Law, personal injury
              law and wrongful death actions in Idaho and Montana.
            </p>
          </div>
          <div class="about-us-buttons">
            <div class="about-us-btn">
              <button>&nbsp;</button>
              <button>
                <a class="about-btn-link" :href="about_contact_button"
                  >contact us</a
                >
              </button>
            </div>
            <div class="about-us-btn">
              <button>&nbsp;</button>

              <button>
                <a class="about-btn-link" :href="read_more">READ MORE</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Idaho Workers Section -->
  <!-- <div class="idaho-workers-section">
    <div class="container">
      <div class="idaho-row-1">
        <div class="idaho-title-desc">
          <h2>Idaho Workers Compensation</h2>
          <p>
            If you are injured on the job in the state of Idaho, the Idaho
            workers’ compensation law ideally is supposed to provide you “sure
            and certain relief”. It doesn’t always work that way.
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
  </div> -->
  <!-- Our Client Reviews Section -->
  <Testimonials />

  <!-- Have Pre-existing Conditions Section -->
  <!-- <div class="container">
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
  </div> -->
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
