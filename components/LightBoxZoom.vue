<template>
  <div>
    <CoolLightBox
      :items="items"
      :index="index"
      :use-zoom-bar="true"
      :full-screen="true"
      @close="index = null"
    >
    </CoolLightBox>

    <figure
      v-for="(i, imageIndex) in images"
      :key="`lightbox-zoom-${i.title}-${imageIndex}`"
      class="clickable"
      @click="setIndex(imageIndex)"
    >
      <lazy-image
        class="img-fluid rounded"
        :alt="i.title"
        :lazy-srcset="i.image().srcSet"
        :placeholder="i.image().placeholder"
        :lazy-src="i.image().src"
        :height="i.image().height"
        :width="i.image().width"
      />
    </figure>
  </div>
</template>

<script>
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  name: 'LightBoxZoom',
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
    }
  }
}
</script>

<style lang="sass" scoped>
.clickable
  cursor: pointer
</style>
