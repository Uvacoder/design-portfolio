<template>
  <article
    itemscope
    itemtype="http://schema.org/BlogPosting"
    class="blog blog__content"
  >
    <b-row>
      <b-col :cols="12" :lg="6">
        <nuxt-link
          itemprop="url"
          class="blog__link"
          :to="`/blog/${content.slug}`"
        >
          <figure class="blog__image has-badge">
            <div class="badges">
              <b-badge v-for="tag in content.tags" :key="`tag-${tag}`" pill>
                {{ tag }}
              </b-badge>
            </div>
            <LazyImage
              class="img-fluid rounded"
              :alt="content.title"
              :lazy-srcset="content.preview().srcSet"
              :placeholder="content.preview().placeholder"
              :lazy-src="content.preview().src"
              :width="content.preview().width"
              :height="content.preview().height"
            />
          </figure>
        </nuxt-link>
      </b-col>
      <b-col>
        <div>
          <nuxt-link
            itemprop="url"
            class="blog__link"
            :to="`/blog/${content.slug}`"
          >
            <h2 itemprop="name" class="blog__content__title">
              {{ content.title }}
            </h2>
          </nuxt-link>
          <div itemprop="articleBody" v-html="content.teaser" />
          <div class="blog__content--meta mb-4">
            <p>
              <small>
                <unicon height="19" name="clock" fill="var(--gray-500)" />
                <time itemprop="datePublished" :datetime="content.created">{{
                  format(new Date(content.created), 'DD MMMM YYYY')
                }}</time>
              </small>

              <small>
                <unicon
                  height="19"
                  name="comment-message"
                  fill="var(--gray-500)"
                />
                {{ content.comments }}
                Comments
              </small>
            </p>
            <b-button
              class="read-more form-rounded"
              pill
              variant="outline-primary"
              @click="$router.push(`/blog/${content.slug}`)"
            >
              Read more
            </b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </article>
</template>

<script>
import { format } from 'fecha'

export default {
  name: 'BloArticleg',
  components: {
    LazyImage: () => import('~/components/LazyImage.vue')
    // Section: () => import('~/components/Section.vue')
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    format
  }
}
</script>
