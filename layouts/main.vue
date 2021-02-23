<template>
  <div>
    <Header :menu-show="menuShow" :toggle-menu="toggleMenu" />
    <main class="site__main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('~/components/Header.vue'),
    Footer: () => import('~/components/Footer.vue')
  },
  data() {
    return {
      menuShow: false
    }
  },
  watch: {
    // $route(to, from) {
    $route() {
      this.menuShow = false
    }
  },
  methods: {
    toggleMenu(e) {
      if (e === undefined) {
        // Outside clicks always false
        this.menuShow = Boolean(0)
      } else {
        this.menuShow = !this.menuShow
      }
    }
  }
}
</script>

<style lang="sass">
body,
#__nuxt,
#__layout,
#__layout > div
  height: 100vh
  min-height: 100%
</style>
