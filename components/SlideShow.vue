<template>
  <section>
    <transition-group tag="picture" :duration="800" name="slide" mode="out-in">
      <img
        :key="`${current}-photo`"
        :alt="alt"
        :src="photo.src"
        :srcset="photo.srcSet"
      />
    </transition-group>
    <b-container
      class="position-relative overflow-hidden h-100 d-flex align-items-center"
    >
      <transition :duration="700" name="text">
        <div
          ref="contentContainer"
          :key="`${current}-details`"
          class="slideshow__content text-center absolute-center"
          :class="`text-${color} text-md-${align} ${align}`"
        >
          <h1 :key="`${current}-title`" class="display-3" v-html="title" />
          <p
            v-if="description"
            :key="`${current}-description`"
            class="lead"
            v-html="description"
          />
        </div>
      </transition>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SlideShow',
  computed: {
    current() {
      return this.$store.state.slideshow.current
    },
    photo() {
      const slideshow = this.$store.state.slideshow
      if (slideshow.slides.length) {
        return slideshow.slides[slideshow.current].image()
      }
      return ''
    },
    align() {
      const slideshow = this.$store.state.slideshow
      if (slideshow.slides.length) {
        return slideshow.slides[slideshow.current].align
      }
      return ''
    },
    color() {
      const slideshow = this.$store.state.slideshow
      if (slideshow.slides.length) {
        return slideshow.slides[slideshow.current].color
      }
      return ''
    },
    title() {
      const slideshow = this.$store.state.slideshow
      if (slideshow.slides.length) {
        return slideshow.slides[slideshow.current].title
      }
      return ''
    },
    alt() {
      const slideshow = this.$store.state.slideshow
      if (slideshow.slides.length) {
        return slideshow.slides[slideshow.current].title.replace(
          /<[^>]*>?/gm,
          ''
        )
      }
      return ''
    },
    description() {
      const slideshow = this.$store.state.slideshow
      if (slideshow.slides.length) {
        return slideshow.slides[slideshow.current].description
      }
      return ''
    }
  }
}
</script>

<style lang="sass" scoped>
section
  user-select: none
  width: 100%
picture,
img
  overflow: hidden
  object-fit: cover
  position: absolute
  width: 100%
  height: 100%
  z-index: 0

.absolute-center
  position: absolute
  &.right
    right: 0
  &.left
    left: 0
  &.center
    left: 50%
    transform: translate(-50%, 0)
.slideshow__content
  // padding: 0 1.5em
  // user-select: none
  // width: 100%
  // max-width: 52em
  // h1
  //   text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.05)
  // p
  //   max-width: 30em

/* .slide-enter { transform: sclae(2); opacity: 0;} */
/* .slide-enter-to { transform: scale(1); opacity: 1;} */

/* .slide-enter-active { transform: scale(3) } */

/* .slide-leave { transform: scale(1); opacity: 1; } */
/* .slide-leave-to { transform: scale(2); opacity: 0; } */

.slide-enter-active
  animation: zoom 0.8s

.slide-leave-active
  animation: zoom 0.8s reverse

.text-enter-active
  animation: text 0.8s

.text-leave-active
  animation: text 0.9s reverse

@keyframes text
  0%
    opacity: 0
    filter: blur(5px)
    /* transform: scale(1.1); */
  100%
    opacity: 1
    filter: blur(0)
    /* transform: scale(1); */

@keyframes zoom
  0%
    transform: scale(1.5)
    opacity: 0
  100%
    transform: scale(1)
    opacity: 1
</style>
