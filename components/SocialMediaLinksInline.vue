<template>
  <div class="social_media__wrapper">
    <nav class="social_media__links--inline">
      <a
        v-for="l in links"
        :key="l.title"
        :class="{ 'text-light': light }"
        :href="l.url"
        rel="noreferrer"
        target="_blank"
      >
        {{ l.title }}
      </a>
    </nav>
  </div>
</template>

<script>
import socialMediaData from '~/data/social-media.js'

export default {
  name: 'SocialMediaLinksInline',
  props: {
    light: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      links: socialMediaData
    }
  }
}
</script>

<style lang="sass" scoped>
.social_media__links
  &__wrapper
    display: block
  &--inline
    display: flex
    margin: 0
    justify-content: center
    overflow: hidden
    align-items: center
    a
      text-decoration: none
      user-select: none
      display: inline-block
      text-transform: uppercase
      // color: rgba(255, 255, 255, .7)
      font-size: 12px
      line-height: 1em
      font-weight: 300
      letter-spacing: 2px
      color: $content-text-color
      margin-right: 1em
      &:last-child
        margin-right: 0
</style>
