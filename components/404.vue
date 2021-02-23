<template>
  <div class="error error__404">
    <article class="error__body">
      <h2 class="error__code">{{ error.statusCode }}</h2>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <b-button
        pill
        variant="primary"
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
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      title: 'This page doesn’t exist!',
      description: 'The link you clicked on may be broken or no longer exist.'
    }
  }
}
</script>
