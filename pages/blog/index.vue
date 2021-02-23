<template>
  <div>
    <Section id="blogHeader" class="head space--bottom">
      <b-container>
        <b-row>
          <b-col :cols="12" :md="8" :lg="10">
            <h1>Blog</h1>
            <p class="lead">
              If you want to be a better photographer, stand in front of more
              interesting stuff <span class="sr-only">— Jim Richardson</span>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </Section>

    <Section id="blogContents">
      <b-container>
        <b-row>
          <b-col v-for="item in items" :key="item.title" :cols="12">
            <BlogArticle class="m_b--50" :content="item" />
          </b-col>
        </b-row>
      </b-container>
    </Section>

    <div class="overflow-auto pt-1 mb-5">
      <Pagination />
    </div>
  </div>
</template>

<script>
import BlogData from '~/data/blog.js'
// import LoadingComponent from '~/components/LoadingComponent.vue'
// import ErrorComponent from '~/components/ErrorComponent.vue'

const smImage = () => import('~/assets/images/blog/blog-socialmedia.jpg')

export default {
  name: 'Blog',
  layout: 'main',
  transition: 'fade',
  components: {
    // LazyImage: () => import('~/components/LazyImage.vue'),
    Section: () => import('~/components/Section.vue'),
    Pagination: () => import('~/components/Pagination.vue'),
    BlogArticle: () => import('~/components/BlogArticle.vue')
    // BlogArticle: () => ({
    //   component: import('~/components/BlogArticle.vue'),
    //   loading: LoadingComponent,
    //   error: ErrorComponent,
    //   // Delay before showing the loading component. Default: 200ms.
    //   delay: 200,
    //   // The error component will be displayed if a timeout is
    //   // provided and exceeded. Default: Infinity.
    //   timeout: 3000
    // })
  },
  async asyncData(ctx) {
    const i = await smImage().then((m) => m.images.slice(-1).pop().path)
    return { socialMediaImage: i }
  },
  data() {
    return {
      items: BlogData,
      pageTitle: 'Blog',
      pageDescription:
        'If you want to be a better photographer, stand in front of more interesting stuff'
    }
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
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
          hid: 'og:image',
          name: 'og:image',
          content: this.socialMediaImage
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
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.socialMediaImage
        }
      ]
    }
  }
}
</script>
