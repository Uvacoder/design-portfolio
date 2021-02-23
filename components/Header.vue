<template>
  <b-container class="site__header" fluid>
    <b-row>
      <b-col cols="12">
        <nav class="site__navbar">
          <h2
            ref="siteName"
            class="site__name"
            :class="{ 'text-light': light }"
          >
            <nuxt-link to="/">
              <span v-html="site.name_html" />
              <small v-if="site.slogan" v-html="site.slogan" />
            </nuxt-link>
          </h2>

          <div class="site__navbar__menu site__navbar__menu--right">
            <b-button
              ref="siteActionBtn"
              size="sm"
              class="form-rounded item action-button"
              pill
              :variant="isLight"
            >
              Buy now
            </b-button>
            <MainMenuButton
              ref="siteMenu"
              v-closable="{
                exclude: ['siteMenu'],
                handler: 'toggleMenu'
              }"
              :menu-show="menuShow"
              :toggle="toggleMenu"
              class="site__menu item"
              :light="light"
              style="width: 1.65rem; height: 1.65rem;"
            />
          </div>
          <MainMenu ref="mainMenu" :menu-show="menuShow" />
        </nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable no-console */
// import MainMenu from '~/components/MainMenu'
// import MainMenuButton from '~/components/MainMenuButton'
import global from '~/utils/global.mixins.js'
export default {
  name: 'Header',
  components: {
    MainMenu: () => import('~/components/MainMenu'),
    MainMenuButton: () => import('~/components/MainMenuButton')
  },
  mixins: [global],
  props: {
    light: {
      type: Boolean,
      default: false
    },
    hasAnimation: {
      type: Boolean,
      default: false
    },
    menuShow: {
      type: Boolean,
      required: true
    },
    toggleMenu: {
      type: Function,
      required: true
    }
  },
  computed: {
    isLight() {
      if (this.light) return 'outline-light'
      return 'outline-primary'
    }
  },
  mounted() {
    if (this.hasAnimation) {
      this.$el.classList.add('has-animation')
    }
  }
}
</script>

<style lang="sass" scoped>
.has-animation
  .site__name, .site__search, .site__menu
    // transform: translateY(30px)
    // opacity: 0

.site__name, .site__search, .site__menu
  transform: translateY(0)
  opacity: 1

.site__search
  z-index: 1041

.action-button
    font-size: 0.75rem
    font-weight: 600
    height: 2.5rem
    text-transform: uppercase
</style>
