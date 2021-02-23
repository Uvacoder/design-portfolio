<template>
  <div>
    <b-alert variant="success" :show="submited">
      <h4 class="alert-heading">Thank you</h4>
      <p>
        You have reached us through our contact form! <br />
        We will get back to you shortly.
      </p>
      <b-button pill variant="outline-success" @click="onReset">
        Done
      </b-button>
    </b-alert>

    <b-form
      v-if="!submited"
      ref="contactForm"
      novalidate
      @submit.stop.prevent="onSubmit"
      @reset="onReset"
    >
      <b-form-row>
        <b-col :cols="12" :sm="6">
          <b-form-group
            label-class="sr-only"
            label="First Name"
            label-for="firstName"
          >
            <b-form-input
              id="firstName"
              v-model="$v.form.firstName.$model"
              :state="validateState('firstName')"
              class="form-rounded"
              type="text"
              placeholder="First Name *"
            ></b-form-input>
            <b-form-invalid-feedback id="firstName-feedback">
              This is a required field and must be at least 3 characters.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col :cols="12" :sm="6">
          <b-form-group
            label-class="sr-only"
            label="Last Name"
            label-for="lastName"
          >
            <b-form-input
              id="lastName"
              v-model="$v.form.lastName.$model"
              :state="validateState('lastName')"
              class="form-rounded"
              type="text"
              placeholder="Last Name *"
            ></b-form-input>
            <b-form-invalid-feedback id="lastName-feedback">
              This is a required field and must be at least 3 characters.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col :cols="12" :sm="6">
          <b-form-group label-class="sr-only" label="Email" label-for="email">
            <b-form-input
              id="email"
              v-model="$v.form.email.$model"
              :state="validateState('email')"
              class="form-rounded"
              placeholder="Email *"
            ></b-form-input>
            <b-form-invalid-feedback id="email-feedback">
              You must enter a valid email address.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col :cols="12" :sm="6">
          <b-form-group
            label-class="sr-only"
            label="Website"
            label-for="website"
          >
            <b-form-input
              id="website"
              v-model="$v.form.website.$model"
              :state="validateState('website')"
              type="tel"
              :class="{ 'form-rounded': true }"
              placeholder="Website"
            ></b-form-input>
            <b-form-invalid-feedback id="website-feedback">
              This field does not look like a correct website
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-form-group
            label-class="sr-only"
            label="Comment"
            label-for="comment"
          >
            <b-form-textarea
              id="comment"
              v-model="$v.form.comment.$model"
              :state="validateState('comment')"
              class="form-rounded"
              placeholder="Comment *"
              rows="3"
            ></b-form-textarea>
            <b-form-invalid-feedback id="comment-feedback">
              This is a required field.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-button
            type="submit"
            class="form-rounded"
            pill
            variant="outline-primary"
            >Send Your Comment</b-button
          >
          <b-button
            type="reset"
            class="form-rounded"
            pill
            variant="outline-danger"
            >Reset</b-button
          >
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, url, minLength } from 'vuelidate/lib/validators'

export default {
  components: {},
  mixins: [validationMixin],
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        comment: ''
      },
      submited: false
    }
  },
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      website: {
        url
      },
      comment: {
        required
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    onSubmit(evt) {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      // TODO
      // You can use validated form data below
      // const formData = JSON.stringify(this.form)
      this.onReset()
      this.submited = true
    },
    onReset() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        comment: ''
      }
      this.submited = false
      this.$nextTick(() => {
        this.$v.$reset()
      })
    }
  }
}
</script>
