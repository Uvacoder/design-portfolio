<template>
  <div>
    <figure class="hero">
      <LazyImage
        class="img-fluid"
        :alt="title"
        :lazy-srcset="preview().srcSet"
        :placeholder="preview().placeholder"
        :lazy-src="preview().src"
      />
    </figure>

    <Section id="blogItemHeader" style="margin-top: 50px;">
      <b-container>
        <b-row>
          <b-col :cols="12" :lg="10" class="mx-auto">
            <article class="blog">
              <h1 class="text-lg-center">{{ title }}</h1>
              <p class="text-lg-center lead">{{ lead }}</p>

              <b-row class="mt-5">
                <b-col :cols="12" :md="6" :lg="5">
                  <div class="blog__post__content" v-html="body" />
                </b-col>
                <b-col :offset-lg="1">
                  <LightBoxZoom class="rounded" :images="images" />
                </b-col>
              </b-row>
            </article>

            <TextDivider />

            <b-row class="mt-5">
              <b-col :cols="12" :md="10" class="mx-auto">
                <blockquote class="blockquote text-md-center">
                  <p>
                    When words become unclear, I shall focus with photographs.
                    When images become inadequate, I shall be content with
                    silence.
                  </p>
                  <p><small>— Ansel Adams</small></p>
                </blockquote>
              </b-col>
            </b-row>

            <div class="mt-5">
              <LightBoxGallery :images="gallery" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </Section>

    <Section id="blogAuthor" class="bg-light">
      <b-container>
        <b-row class="mt-5">
          <b-col :cols="12" :lg="8" class="mx-auto">
            <div class="py-5">
              <BlogAuthor :author="author" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </Section>

    <Section id="blogComments" class="bg-">
      <b-container>
        <b-row class="py-5">
          <b-col :cols="12" :lg="10" class="mx-auto">
            <h3 class="mb-5">Comments</h3>
            <BlogComments :comments="comments" />
          </b-col>
          <b-col :cols="12" :lg="7" class="mx-auto">
            <div>
              <h3 class="h4 mb-4">Comment Form</h3>
              <div id="Reply">
                <CommentForm />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </Section>
  </div>
</template>

<script>
import BlogPostData from '~/data/blog-post.js'

export default {
  layout: 'main',
  transition: 'fade',
  components: {
    LazyImage: () => import('~/components/LazyImage.vue'),
    Section: () => import('~/components/Section.vue'),
    TextDivider: () => import('~/components/TextDivider.vue'),
    LightBoxZoom: () => import('~/components/LightBoxZoom.vue'),
    LightBoxGallery: () => import('~/components/LightBoxGallery.vue'),
    BlogAuthor: () => import('~/components/BlogAuthor.vue'),
    BlogComments: () => import('~/components/BlogComments.vue'),
    CommentForm: () => import('~/components/CommentForm.vue')
  },
  validate({ params }) {
    // Slug validation
    // test case: 6gg0-ad-6-h-tf4-fh6h6y6-ftg6g-gh09-j66y6n90
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(params.slug)
  },
  data() {
    return BlogPostData
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.lead
        },
        { hid: 'og:title', name: 'og:title', content: this.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.lead
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.preview().images.slice(-1).pop().path || ''
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.lead
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.preview().images.slice(-1).pop().path || ''
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.hero
  img
    height: auto
    width: auto
    @include media-breakpoint-up(md)
      height: 325px !important
      width: 100% !important
    @include media-breakpoint-up(lg)
      height: 650px !important
      width: 100% !important
</style>
