<template>
  <b-row class="d-grid d-grid--gap-25">
    <figure v-for="c in clients" :key="c.idx" class="bg-light imagebox">
      <lazy-image :alt="c.alt" :src="c.pathLong" />
      <figcaption class="sr-only">{{ c.alt }}</figcaption>
    </figure>
  </b-row>
</template>
<script>
export default {
  name: 'ClientsLogo',
  components: {
    LazyImage: () => import('~/components/LazyImage.vue')
  },
  data() {
    return {
      clients: []
    }
  },
  mounted() {
    this.importAll(require.context('~/assets/images/logo/', true, /\.svg$/))
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.clients.push({
          pathLong: r(key),
          pathShort: key,
          alt: key.replace(/((\.\/)|\.[a-z]+)/g, '')
        })
      )
    }
  }
}
</script>
