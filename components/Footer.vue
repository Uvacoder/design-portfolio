<template>
  <footer class="site__footer bg-gradient-primary">
    <b-container>
      <b-row class="row text-center align-items-center">
        <b-col>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" title="Home" exact>
                Home
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about" class="nav-link" title="About" exact>
                About
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/collections"
                class="nav-link"
                title="Collections"
                exact
              >
                Collections
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/blog" class="nav-link" title="Blog" exact>
                Blog
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link" title="Contact" exact>
                Contact
              </nuxt-link>
            </li>
          </ul>

          <SocialMediaLinksInline class="mt-3 mb-0" />

          <h2 class="site__name mb-2 mt-5" v-html="site.name_html" />
          <p class="text-muted" v-html="site.copyright" />
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import global from '~/utils/global.mixins.js'

export default {
  name: 'Footer',
  components: {
    SocialMediaLinksInline: () =>
      import('~/components/SocialMediaLinksInline.vue')
  },
  mixins: [global]
}
</script>

<style lang="sass" scoped>
.site__footer
  position: relative
  padding-top: 50px
  padding-bottom: 50px
  background-image: linear-gradient(180deg, $light 0%, $gray-200 100%)
</style>
