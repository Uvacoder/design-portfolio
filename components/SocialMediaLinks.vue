<template>
  <div class="social_media__wrapper">
    <nav ref="socialMediaLinks" class="social_media__links">
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
  name: 'SocialMediaLinks',
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

<style lang="scss" scoped>
/* varaibles */
$links-width: 300px;
$links-height: 50px;

.social_media__wrapper {
  position: absolute;
  right: calc(#{$links-width} / -2 + #{$links-height} / 2);
  top: 50%;
  transform: rotate(90deg);
  /* transform-origin: right bottom; */
  display: none;
  z-index: 10;
  @media screen and (min-height: 401px) {
    display: block;
  }
}
.social_media__links {
  display: flex;
  margin: 0;
  width: $links-width;
  height: $links-height;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  a {
    text-decoration: none;
    user-select: none;
    display: inline-block;
    text-transform: uppercase;
    // color: rgba(255, 255, 255, .7);
    font-size: 12px;
    line-height: 1em;
    font-weight: 300;
    letter-spacing: 2px;
    /* transform: translateY(-35px); */
    color: $content-text-color;
    /* margin-right: 40px; */
  }
}
</style>
