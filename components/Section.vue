<template>
  <section
    :id="id"
    :class="{ 'has-background': background }"
    :style="{ backgroundImage: background ? `url(${background})` : '' }"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    background: {
      type: [Object, Boolean],
      default: false
    }
  }
}
</script>

<style lang="sass">
section
  &.has-background
    position: relative
    overflow: hidden
    background-size: cover
    // background-size: contain
    background-repeat: no-repeat
    background-position: center
    &:after
      content: ""
      display: block
      position: absolute
      background-color: rgba(0, 0, 0, 0.35)
      width: 100%
      z-index: 1
      height: 100%
      transition: background-color .2s ease-in-out
    > *
      z-index: 2
    @include media-breakpoint-down(md)
      &:after
        background-color: rgba(0, 0, 0, 0.65)
</style>
