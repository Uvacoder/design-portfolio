<template>
  <b-row class="testimonials">
    <b-col
      v-for="t in testimonials"
      :key="t.name"
      class="testimonial"
      :cols="12"
      :lg="6"
    >
      <div class="testimonial--content">
        <p class="text-h3 mb-4">
          {{ t.body }}
        </p>
        <footer>
          <lazy-image
            alt="Team"
            class="testimonial--image rounded-circle mr-3"
            :height="50"
            :lazy-srcset="t.image().srcSet"
            :placeholder="t.image().placeholder"
            :lazy-src="t.image().src"
          />
          <p>
            <strong class="d-block">{{ t.name }}</strong>
            <small>{{ t.occupation }}</small>
          </p>
          <div class="testimonial--rating">
            <unicon
              v-for="(s, index) in 5"
              :key="index"
              name="star"
              fill="#ffe449"
              icon-style="monochrome"
            />
          </div>
        </footer>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  components: {
    LazyImage: () => import('~/components/LazyImage.vue')
  },
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      starts: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="sass" scoped>
.testimonial
  // background-color: red
  margin-bottom: 2em
  &:last-child
    margin-bottom: 0
  &--content
    display: flex
    flex-direction: column
    // background-color: white
    padding: 1.5em 1.5em
    border-radius: 10px
    // box-shadow: 1px 5px 10px rgba(0,0,0,0.025)
    // border: 1px solid rgba(0,0,0,0.055)
    height: 100%
  &--image
    width: 50px!important
    height: 50px!important
  &--rating
    margin-left: 0
    @include media-breakpoint-up(sm)
      margin-left: auto
  footer
    display: flex
    align-items: center
    margin-top: auto
    flex-direction: column
    @include media-breakpoint-up(sm)
     flex-direction: row
    p
      margin: 0
</style>
