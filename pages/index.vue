<template>
  <main id="site__main" ref="main" class="">
    <Header
      ref="Header"
      :menu-show="menuShow"
      :toggle-menu="toggleMenu"
      has-animation
      :light="isLight"
    />
    <transition name="fade">
      <Slideshow v-if="show" />
    </transition>
    <SocialMediaLinks ref="Social" :light="isLight" />
    <!-- <ShareButton ref="ShareButton" :light="isLight" /> -->
    <SlideshowFooterControls ref="Controls" />
  </main>
</template>

<script>
/* eslint-disable no-console */
// import Header from '~/components/Header.vue'
// import SocialMediaLinks from '~/components/SocialMediaLinks.vue'
// import ShareButton from '~/components/ShareButton.vue'
// import FooterControls from '~/components/FooterControls.vue'
// import Slideshow from '~/components/SlideShow.vue'

import SlideContents from '~/data/slideshow.js'
const Animation = () => import('~/utils/animation')

export default {
  transition: 'fade',
  components: {
    Header: () => import('~/components/Header.vue'),
    Slideshow: () => import('~/components/SlideShow.vue'),
    SocialMediaLinks: () => import('~/components/SocialMediaLinks.vue'),
    // ShareButton: () => import('~/components/ShareButton.vue'),
    SlideshowFooterControls: () =>
      import('~/components/SlideshowFooterControls.vue')
  },
  data() {
    return {
      show: false,
      pageTitle: 'High performance NuxtJS & VueJS website for photographers',
      pageDescription:
        'High performance NuxtJS & VueJS static website specially developed for photographers and designers.',
      completed: false,
      menuShow: false,
      isLight: false
    }
  },
  watch: {
    // $route(to, from) {
    $route() {
      this.menuShow = false
    }
  },
  mounted() {
    this.$store.commit('slideshow/ADD_SLIDES', SlideContents)
    // First load animation
    // Animation(this).then(() => (this.show = true))
    this.clientCode()

    if (this.completed) {
      this.show = true
      this.isLight = true
      //   Animation().then((context) => {
      //     context.default(self, 100).then(() => {
      //       self.show = true
      //       self.isLight = true
      //     })
      //   })
    }
  },
  methods: {
    clientCode() {
      const self = this
      if (process.client) {
        if (document.readyState === 'complete') {
          this.completed = true
        } else {
          this.$refs.main.classList.add('await-animation')
        }

        document.onreadystatechange = () => {
          console.log('onreadystatechange')
          if (document.readyState === 'complete') {
            console.log('Page completed with image and files!')

            // fetch to next page or some code
            Animation().then((context) => {
              context.default(self).then(() => {
                self.show = true
                self.isLight = true
              })
            })
          }
        }
      }
    },
    toggleMenu(e) {
      if (e === undefined) {
        // Outside clicks always false
        this.menuShow = Boolean(0)
      } else {
        this.menuShow = !this.menuShow
      }
    }
    // ...mapMutations({
    //   toggle: 'page/TOGGLE_MENU'
    // })
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
        // {
        //   hid: 'og:image',
        //   name: 'og:image',
        //   content: this.image.images.slice(-1).pop().path || ''
        // },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.pageTitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.pageDescription
        }
        // {
        //   hid: 'twitter:image',
        //   name: 'twitter:image',
        //   content: this.image.images.slice(-1).pop().path || ''
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
