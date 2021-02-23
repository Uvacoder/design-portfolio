<template>
  <b-row>
    <b-col :cols="12" :xs="4" :sm="3">
      <figure class="mb-0">
        <LazyImage
          class="img-fluid rounded-circle"
          :alt="author.name"
          :lazy-srcset="author.image().srcSet"
          :placeholder="author.image().placeholder"
          :lazy-src="author.image().src"
        />
        <figcaption>
          <p class="mb-0 text-center">
            <small>
              <i>{{ author.name }}</i>
            </small>
          </p>
        </figcaption>
      </figure>
    </b-col>
    <b-col>
      <h3 class="h4">About the Author</h3>
      <p>
        Hi, my name is <b>{{ author.name }}</b>
        {{ author.info }}
      </p>
      <ul class="list-inline mb-0">
        <li v-for="l in author.links" :key="l.title" class="list-inline-item">
          <a :href="l.url" rel="noreferrer" target="_blank">
            <unicon :name="l.icon" :fill="l.color" />
            <span class="sr-only">{{ l.title }}</span>
          </a>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'BlogAuthor',
  components: {
    LazyImage: () => import('~/components/LazyImage.vue')
  },
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
