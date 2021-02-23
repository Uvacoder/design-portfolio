<template>
  <div>
    <Section id="exampleHeader" class="head">
      <b-container>
        <b-row>
          <b-col>
            <h1>{{ pageTitle }}</h1>
            <p class="lead">{{ lead }}</p>
          </b-col>
        </b-row>
      </b-container>
    </Section>
    <Section id="examplePosts" class="space">
      <b-container>
        <p v-if="$fetchState.pending">Fetching posts...</p>
        <p v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </p>
        <!-- <b-button @click="$fetch">Refresh</b-button> -->
        <b-row>
          <b-col v-for="post in posts" :key="post.id" :cols="12" :lg="6">
            <article>
              <h2>{{ post.title }}</h2>
              <p>{{ post.body }}</p>
            </article>
          </b-col>
        </b-row>
      </b-container>
    </Section>
  </div>
</template>

<script>
export default {
  name: 'ExampleAPI',
  layout: 'main',
  transition: 'fade',
  components: {
    Section: () => import('~/components/Section.vue')
  },
  async fetch() {
    this.posts = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10'
    )
  },
  data() {
    return {
      pageTitle: 'Example API',
      lead: 'Page example created using dynamic data instead of static data.',
      posts: []
    }
  },
  fetchOnServer: false,
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.lead
        }
      ]
    }
  }
}
</script>
