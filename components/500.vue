<template>
  <div class="error error__500">
    <article class="error__body">
      <h2 class="error__code">{{ error.statusCode }}</h2>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>{{ note }}</p>
      <b-button
        pill
        variant="light"
        aria-label="Back"
        class="form-rounded btn-with-icon"
        @click.prevent.stop="$router.go(-1)"
      >
        <unicon name="arrow-left" fill="currentColor" />
        <span class="mr-3">Go Back</span>
      </b-button>
    </article>
  </div>
</template>
<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      title: 'Internal Server Error',
      description: 'An unexpected error has occurred.',
      note:
        "This error has been committed to server logs and our employees will be notified of this issue. We'll fix this as soon as possible.."
    }
  }
}
</script>
