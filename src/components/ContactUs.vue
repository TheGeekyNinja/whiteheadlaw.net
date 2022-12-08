<template>
  <div class="contact-left-side">
    <form
      ref="form"
      @submit.prevent="sendEmail"
      method="POST"
      class="contact-form"
    >
      <input
        @blur="v$.firstName.$touch"
        v-model="firstName"
        type="text"
        name="firstName"
        placeholder="First Name"
      />

      <span
        role="alert"
        v-if="v$.firstName.$error"
        >First Name Required</span
      >

      <input
        @blur="v$.lastName.$touch"
        v-model="lastName"
        type="text"
        name="lastName"
        placeholder="Last Name"
      />

      <span
        role="alert"
        v-if="v$.lastName.$error"
        >Last Name Required</span
      >

      <input
        @blur="v$.email.$touch"
        v-model="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <span
        role="alert"
        v-if="v$.email.$error"
        >Email Required</span
      >

      <input
        @blur="v$.contactNumber.$touch"
        v-model="contactNumber"
        type="phone"
        name="contactNumber"
        placeholder="Contact Number"
      />
      <span
        role="alert"
        v-if="v$.contactNumber.$error"
        >Contact Number Required</span
      >

      <textarea
        @blur="v$.message.$touch"
        v-model="message"
        name="message"
        placeholder="Message"
        cols="30"
        rows="7"
      ></textarea>

      <span
        role="alert"
        v-if="v$.message.$error"
        >Message is Required</span
      >
      <span v-if="messageSending">Message received. Thank you!</span>
      <div class="form-btn">
        <input
          class=""
          type="button"
          value="&nbsp;"
        />
        <button type="submit">Make A Request</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useVuelidate } from "@vuelidate/core";
  import { required, email } from "@vuelidate/validators";
  import axios from "axios";

  export default defineComponent({
    setup() {
      return { v$: useVuelidate() };
    },
    data() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        message: "",
        messageSending: false,
      };
    },
    validations() {
      return {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        contactNumber: { required },
        message: { required },
      };
    },
    methods: {
      async sendEmail() {
        const isFormCorrect = await this.v$.$validate();

        if (isFormCorrect) {
          axios
            .post("https://formspree.io/f/xoqbgleq", {
              FirstName: this.firstName,
              LastName: this.lastName,
              Email: this.email,
              ContactNumber: this.contactNumber,
              _subject: `${this.firstName} | New  Message from Whiteheadlaw Page`,
              message: this.message,
            })
            .then((response) => {
              this.firstName = "";
              this.lastName = "";
              this.email = "";
              this.contactNumber = "";
              this.message = "";
            })
            .catch((error) => {
              if (error.response) {
                console.log(error.response.data);
              }
            });
          this.messageSending = true;
          (this.$refs.form as any).reset();
        } else {
          console.log("Error");
        }
      },
    },
  });
</script>

<style scoped></style>
