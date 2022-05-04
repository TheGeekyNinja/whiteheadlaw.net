<template>
  <div class="container">
    <Form ref="form" @submit="onSubmit" class="contact-form">
      <title class="form-title">Drop us a line!</title>
      <Field
        name="firstName"
        type="text"
        placeholder="First Name"
        :rules="isRequired"
      />
      <ErrorMessage name="firstName" />
      <Field
        name="lastName"
        type="text"
        placeholder="Last Name"
        :rules="isRequired"
      />
      <ErrorMessage name="lastName" />
      <Field
        name="email"
        type="email"
        placeholder="Email"
        :rules="validateEmail"
      />
      <ErrorMessage name="email" />
      <Field
        name="telNumber"
        type="tel"
        placeholder="Contact Number"
        :rules="isRequired"
      />
      <ErrorMessage name="telNumber" />
      <Field
        as="textarea"
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
        :rules="isRequired"
      />
      <ErrorMessage name="message" />
      <div class="form-btn">
        <input class="" type="button" value="&nbsp;" />
        <button>Make Request</button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values: any) {
      console.log(JSON.stringify(values, null, 2)); //Send the data to the database/ API

      (this.$refs.form as any).resetForm();
    },
    isRequired(value: any) {
      if (!value) {
        return "The field should not be empty";
      }
      return true;
    },
    validateEmail(value: any) {
      if (!value) {
        return "This field should be empty";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must contain a valid email";
      }
      return true;
    },
  },
});
</script>
