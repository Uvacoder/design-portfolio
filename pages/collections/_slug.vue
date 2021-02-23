<template>
  <div>
    <Section class="head space--bottom">
      <b-container>
        <b-row style="position: relative;">
          <!-- <b-button
            pill
            variant="light"
            aria-label="Back"
            class="d-none d-md-block button--back form-rounded btn-with-icon"
            @click.prevent.stop="$router.go(-1)"
          >
            <unicon name="arrow-left" fill="currentColor" />
            Back
          </b-button> -->
          <b-col :cols="12" :lg="8">
            <h2 class="text-capitalize">{{ collection.title }}</h2>
            <p class="lead">{{ collection.info }}</p>
          </b-col>
        </b-row>
      </b-container>
    </Section>

    <Section>
      <b-container fluid class="m_b--50">
        <LightBoxZoom :images="[collection]" />
      </b-container>

      <!-- Collection description -->
      <b-container>
        <b-row class="m_b--50">
          <b-col :cols="12" :lg="9" :offset-lg="2">
            <article class="content text-lg-center">
              <p class="mb-md-0" v-html="collection.description" />
            </article>
          </b-col>
        </b-row>
      </b-container>

      <!-- Collection Articles -->
      <b-container>
        <b-row
          v-for="(a, index) in collection.articles"
          :key="`collection-${a.title}-${index}`"
          class="m_b--50"
        >
          <b-col :cols="12" :lg="8" :order="0" :order-lg="index % 2 ? 1 : 0">
            <figure>
              <LightBoxZoom :images="[a]" />
            </figure>
          </b-col>
          <b-col>
            <article class="m_t--50">
              <h3 class="title h5" v-html="a.title" />
              <p v-html="a.body" />
            </article>
          </b-col>
        </b-row>

        <!-- Collection Gallery -->
        <LightBoxGallery
          v-if="collection.gallery"
          :images="collection.gallery"
        />
      </b-container>
    </Section>

    <Section>
      <b-container>
        <b-row>
          <b-col>
            <div class="d-flex justify-content-center my-5">
              <b-button
                pill
                variant="light"
                aria-label="Back"
                class="button--back--bottom form-rounded btn-with-icon"
                @click.prevent.stop="$router.go(-1)"
              >
                <unicon name="arrow-left" fill="currentColor" />
                Back
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </Section>
  </div>
</template>
<script>
// Data
const collectionsData = () => import('~/data/collections-post.js')

export default {
  layout: 'main',
  transition: 'fade',
  components: {
    // LazyImage: () => import('~/components/LazyImage.vue'),
    Section: () => import('~/components/Section.vue'),
    LightBoxGallery: () => import('~/components/LightBoxGallery.vue'),
    LightBoxZoom: () => import('~/components/LightBoxZoom.vue')
  },
  validate({ params }) {
    return /^[a-z]\w+$/.test(params.slug)
  },
  async asyncData(ctx) {
    const slug = ctx.params.slug
    // DATA or API call
    const data = await collectionsData().then((c) =>
      c.default.find((c) => c.slug === slug)
    )
    return { slug, collection: data }
  },
  data() {
    return {
      collection: {},
      images: false
    }
  },
  methods: {
    columnLg(length) {
      if (length >= 4) return 12 / 4
      return 12 / length
    },
    columnMd(length) {
      if (length >= 2) return 12 / 2
      return 12
    }
  },
  head() {
    return {
      title: this.collection.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.collection.info
        },
        { hid: 'og:title', name: 'og:title', content: this.collection.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.collection.info
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.collection.image().images.slice(-1).pop().path || ''
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.collection.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.collection.info
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.collection.image().images.slice(-1).pop().path || ''
        }
      ]
    }
  }
}
</script>

<style lang="sass">
article
  position: relative
.button--back
  position: absolute
  top: -70px
  left: 0
  @include media-breakpoint-down(sm)
    left: 15px
</style>
