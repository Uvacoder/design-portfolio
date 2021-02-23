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
import ExampleData from '~/data/example.js'

export default {
  name: 'Example',
  layout: 'main',
  transition: 'fade',
  components: {
    Section: () => import('~/components/Section.vue')
  },
  data() {
    return ExampleData
  },
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
