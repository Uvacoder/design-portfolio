<template>
  <component :is="errorPage" :error="error" />
</template>
<script>
export default {
  name: 'NuxtError',
  layout: 'main', // optional
  transition: 'fade',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return () => import('~/components/404.vue')
      }
      // catch everything else
      return () => import('~/components/500.vue')
    }
  }
}
</script>
