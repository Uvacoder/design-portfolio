<template>
  <b-row class="justify-content-center">
    <CoolLightBox :items="items" :index="index" @close="index = null" />

    <b-col
      v-for="(g, imageIndex) in images"
      :key="`collection-gallery-lightbox-${g.title}-${imageIndex}`"
      :cols="12"
      :md="columnMd(items.length)"
      :lg="columnLg(items.length)"
    >
      <figure class="clickable rounded" @click="setIndex(imageIndex)">
        <lazy-image
          class="img-fluid rounded"
          :alt="g.title"
          :lazy-srcset="g.image().srcSet"
          :placeholder="g.image().placeholder"
          :lazy-src="g.image().src"
          :height="g.image().height"
          :width="g.image().width"
        />
        <figcaption class="text-center">
          <small>
            <i>
              {{ g.title }}
            </i>
          </small>
        </figcaption>
      </figure>
    </b-col>
  </b-row>
</template>

<script>
// use the component
// import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  name: 'LightBoxGallery',
  components: {
    LazyImage: () => import('~/components/LazyImage.vue'),
    CoolLightBox: () => import('vue-cool-lightbox')
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      index: null
    }
  },
  computed: {
    items() {
      return this.images.map((i) => {
        const image = i.image()
        return {
          title: i.title,
          description: i.description || '',
          // geting the highest resolution photo
          src: image.images[image.images.length - 1].path
        }
      })
    }
  },
  methods: {
    setIndex(index) {
      this.index = index
    },
    columnLg(length) {
      if (length >= 4) return 12 / 4
      return 12 / length
    },
    columnMd(length) {
      if (length >= 2) return 12 / 2
      return 12
    }
  }
}
</script>

<style lang="sass" scoped>
.clickable
  cursor: pointer
figure
  // overflow: hidden
  img
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05)
    transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out
  &:hover
    img
      transform: scale(1.025)
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
</style>
