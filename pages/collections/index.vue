<template>
  <div class="wrapper">
    <div ref="main">
      <Section id="collectionsHeader" class="head space--bottom">
        <b-container>
          <b-row>
            <b-col>
              <transition name="fade" appear>
                <h1>Collections</h1>
              </transition>
              <transition name="fade" appear>
                <p class="lead">
                  Hand-picked awesome works from all around the world
                </p>
              </transition>
            </b-col>
          </b-row>
        </b-container>
      </Section>

      <Section id="collections" class="space--bottom">
        <b-container>
          <transition-group appear name="slide-in" tag="b-row">
            <b-col
              v-for="(collection, index) in collections"
              :key="`${collection.title}-${index}`"
              class="collections__item"
              :cols="12"
              :md="6"
              :lg="4"
              :style="{ '--i': index }"
            >
              <nuxt-link :to="`/collections/${collection.slug}`">
                <div class="overlay rounded" />
                <div
                  class="embed-responsive embed-responsive-1by1 rounded collections__image--wrapper"
                >
                  <lazy-image
                    :alt="collection.title"
                    class="embed-responsive-item rounded"
                    style="object-fit: cover;"
                    :lazy-srcset="collection.thumb().srcSet"
                    :placeholder="collection.thumb().placeholder"
                    :lazy-src="collection.thumb().src"
                    :width="collection.thumb().width"
                    :height="collection.thumb().height"
                  />
                </div>
                <h2 class="title">{{ collection.title }}</h2>
              </nuxt-link>
            </b-col>
          </transition-group>
        </b-container>
      </Section>

      <Section
        id="collectionsInfo"
        class="space d-flex align-items-center"
        style="min-height: 400px; background-attachment: fixed;"
        :background="require('~/assets/images/photo.jpg?size=1440')"
      >
        <b-container>
          <b-row>
            <b-col :cols="12" :md="10" :offset-md="1" :lg="4" :offset-lg="8">
              <h2 class="text-light">Photography</h2>
              <p class="lead text-light">
                We hope you enjoy our services as much as we enjoy offering them
                to you.
              </p>
              <b-button class="form-rounded" pill variant="outline-light">
                Hire Us
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </Section>
    </div>
    <transition name="fade">
      <Section v-if="show" class="collections__modal">
        <h2>{{ selected }}</h2>
        {{ scrollY }} - {{ savedScroll }}
        <button @click.prevent.stop="close">Close</button>
      </Section>
    </transition>
  </div>
</template>

<script>
import CollectionsData from '~/data/collections.js'

export default {
  name: 'Collections',
  layout: 'main',
  components: {
    LazyImage: () => import('~/components/LazyImage.vue'),
    Section: () => import('~/components/Section.vue')
  },
  data() {
    return {
      pageTitle: 'Collections',
      pageDescription: 'Hand-picked awesome works from all around the world',
      show: false,
      selected: '',
      savedScroll: 0,
      collections: CollectionsData
    }
  },
  methods: {
    test(title) {
      this.selected = title
      this.savedScroll = window.scrollY
      this.show = true
      this.$refs.main.style.position = 'fixed'
    },
    close(evt) {
      this.selected = ''
      this.$refs.main.style.position = ''
      this.$refs.main.style.top = ''
      this.show = false
      // window.scrollTo(0, parseInt(this.savedScroll || '0') * -1)
      window.scrollTo(0, parseInt(this.savedScroll || 0))
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pageDescription
        },
        { hid: 'og:title', name: 'og:title', content: this.pageTitle },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.pageDescription
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.pageTitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.pageDescription
        }
      ]
    }
  }
}
</script>
