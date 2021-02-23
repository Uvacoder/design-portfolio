<template>
  <img
    :data-src="lazySrc"
    :data-srcset="lazySrcset"
    :style="style"
    :sizes="sizes"
    :alt="alt"
    :width="width"
    :height="height"
    class="LazyImage"
  />
</template>

<script>
// https://markus.oberlehner.net/blog/lazy-loading-responsive-images-with-vue/

import lozad from 'lozad'

export default {
  name: 'LazyImage',
  props: {
    placeholder: {
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      default: '#efefef'
    },
    height: {
      type: Number,
      default: null
    },
    lazySrc: {
      type: String,
      default: null
    },
    lazySrcset: {
      type: String,
      default: null
    },
    sizes: {
      type: String,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
    alt: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    aspectRatio() {
      // Calculate the aspect ratio of the image
      // if the width and the height are given.
      if (!this.width || !this.height) return null

      return (this.height / this.width) * 100
    },
    style() {
      // The background color is used as a
      // placeholder while loading the image.
      // You can use the dominant color of the
      // image to improve perceived performance.
      // See: https://manu.ninja/dominant-colors-for-lazy-loading-images/
      const style = { backgroundColor: this.backgroundColor }

      if (this.width) style.width = `${this.width}px`

      // If the image is still loading and an
      // aspect ratio could be calculated, we
      // apply the calculated aspect ratio by
      // using padding top.
      const applyAspectRatio = this.loading && this.aspectRatio
      if (applyAspectRatio) {
        // Prevent flash of unstyled image
        // after the image is loaded.
        style.height = 0
        // Scale the image container according
        // to the aspect ratio.
        style.paddingTop = `${this.aspectRatio}%`
      }

      if (this.placeholder) {
        // filter(url(data:image/jpeg;base64,/9j/4AAQ ...[truncated] ...), blur(20px)
        style.backgroundImage = `url(${this.placeholder})`
        style.backgroundSize = 'cover'
      }

      return style
    }
  },
  watch: {
    loading(val) {
      if (!val) {
        this.$el.classList.add('loaded')
        this.$el.style = ''
      }
    }
  },
  mounted() {
    // As soon as the <img> element triggers
    // the `load` event, the loading state is
    // set to `false`, which removes the apsect
    // ratio we've applied earlier.
    const setLoadingState = () => {
      this.loading = false
    }
    this.$el.addEventListener('load', setLoadingState)
    // We remove the event listener as soon as
    // the component is destroyed to prevent
    // potential memory leaks.
    this.$once('hook:destroyed', () => {
      this.$el.removeEventListener('load', setLoadingState)
    })

    // We initialize Lozad.js on the root
    // element of our component.
    const observer = lozad(this.$el)
    observer.observe()
  }
}
</script>

<style lang="scss">
// Responsive image styles.
.LazyImage {
  /* max-width: 100%; */
  /* max-height: 100%; */
  width: 100% !important;
  /* width: 100%; */
  height: auto;
  vertical-align: middle;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  filter: blur(20px);
  /* transform: translateZ(0) scale(1.1); */
  transition: filter 200ms ease;
  &.loaded {
    filter: blur(0);
    /* transform: translateZ(0) scale(1); */
  }
}
</style>
