<template>
  <div class="footer_controls__wrapper">
    <nav ref="footerControls" class="footer_controls animate">
      <div ref="footerControlsCounter" class="footer_controls__counter">
        <transition :duration="700" name="fade-up">
          <span :key="current + 1">0{{ current + 1 }}</span>
        </transition>
        <span class="ml-auto">/0{{ total }}</span>
      </div>

      <!-- <div class="footer_controls__bar" /> -->
      <div ref="footerControlsProgress" class="footer_controls__progress">
        <div
          ref="footerControlsProgressWrapper"
          class="footer_controls__progress--wrapper"
        >
          <!-- <b-progress width="50px" height="2px" :value="progressValue" /> -->
          <div class="progress" style="height: 2px;">
            <div class="bar" :style="`width:${progressValue}%`" />
          </div>
        </div>
      </div>

      <div ref="footerControlsButtons" class="footer_controls__buttons">
        <b-button
          ref="footerControlsButtonsUp"
          class="btn-icon"
          variant="link"
          size="lg"
          aria-label="Next Image"
          :disabled="isPlaying"
          @click="nextImage"
        >
          <unicon name="arrow-up" fill="currentColor" />
        </b-button>
        <b-button
          ref="footerControlsButtonsPlay"
          class="btn-icon mx-3"
          variant="link"
          size="lg"
          aria-label="Play/Pause"
          @click="(e) => slidePlay()"
        >
          <transition name="fade-up" :duration="500">
            <unicon
              v-if="!isPlaying"
              key="play"
              name="play"
              fill="currentColor"
            />
            <unicon v-else key="pause" name="pause" fill="currentColor" />
          </transition>
        </b-button>
        <b-button
          ref="footerControlsButtonsDown"
          class="btn-icon"
          variant="link"
          size="lg"
          :disabled="isPlaying"
          aria-label="Previous Image"
          @click="prevImage"
        >
          <unicon name="arrow-down" fill="currentColor" />
        </b-button>
      </div>
    </nav>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { mapGetters, mapMutations } from 'vuex'
import throttle from 'lodash/throttle'
export default {
  name: 'FooterControls',
  data() {
    return {
      progressValue: 0
    }
  },
  computed: {
    current() {
      return this.$store.state.slideshow.current
    },
    ...mapGetters({
      total: 'slideshow/total',
      isNextActive: 'slideshow/isNextActive',
      isPrevActive: 'slideshow/isPrevActive',
      isPlaying: 'slideshow/isPlaying',
      duration: 'slideshow/duration'
    })
  },
  watch: {
    isPlaying(val) {
      // if (val) { this._start() }
      // if (!val) { this.progressValue = 0 }

      if (val && !this.t) {
        // it seems to me this additional check would make sense?
        this._start()
        this.t = setInterval(() => {
          this._start()
        }, this.duration)
      } else {
        clearInterval(this.t)
        this.progressValue = 0
      }

      if (!val) {
        clearInterval(this.t)
        this.$anime.remove(this.$data)
        this.progressValue = 0
        this.t = undefined
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && !this.isNextActive && !this.isPlaying) {
        this.nextImage()
      }
      if (e.key === 'ArrowDown' && !this.isPrevActive && !this.isPlaying) {
        this.prevImage()
      }
    })

    if (this.isPlaying) {
      this._start()
      this.t = setInterval(() => this._start(), this.duration)
    }
  },
  destroyed() {
    if (this.t) {
      clearInterval(this.t)
    }
  },
  methods: {
    ...mapMutations({
      slideIncrement: 'slideshow/increment',
      slideDecrement: 'slideshow/decrement',
      slidePlay: 'slideshow/PLAY'
    }),
    _start() {
      this.$anime({
        duration: this.duration,
        targets: this.$data,
        progressValue: [0, 100],
        round: 1,
        easing: 'linear',
        // easing: 'steps(100)',
        // direction: 'alternate',
        // begin: () => (this.progressValue = 0),
        // complete: () => console.log('Start: complete')
        complete: () => this.slideIncrement()
      })
    },
    nextImage: throttle(function () {
      this.slideIncrement()
    }, 800),
    prevImage: throttle(function () {
      this.slideDecrement()
    }, 800)
  }
}
</script>

<style lang="sass" scoped>
.footer_controls
  display: flex
  position: relative
  justify-content: center
  width: 100%
  // max-width: 300px
  height: 48px
  // position: absolute
  // bottom: 0
  margin-left: auto
  margin-right: auto
  left: 0
  right: 0
  align-items: center
  padding: 10px 50px
  border-radius: 0
  box-shadow: 0 8px 20px rgba(0,0,0,0.1)
  background-color: rgba($white,0.5)
  &.animate
    // opacity: 0
    // transform: translateY(100px)

  @media screen and (min-width: 500px)
    width: 90%
    height: 90px
    border-radius: 10px 10px 0px 0px
    background-color: $white

  @media screen and (min-width: 768px)
    width: 80%
    max-width: 610px

  &__wrapper
    overflow: hidden
    position: absolute
    bottom: 0
    width: 100%
    padding-top: 20px
    z-index: 10

  &__counter
    display: flex
    // margin-right: auto
    padding-right: 50px
    // font-family: Poppins
    font-weight: 900
    color: #000
    user-select: none
  &__bar
    flex: 1
    height: 1px
  &__buttons
    display: flex
    padding-left: 50px
    // min-width: 80px
    justify-content: space-between
    .btn
      &:focus
        box-shadow: none
      &:last-child
        // padding-left: 50px

  &__progress
    top: 0
    position: absolute
    width: 100%!important
    @media screen and (min-width: 500px)
      position: relative
    &--wrapper
      background-color: red


.progress
  flex: 1

.bar
  display: flex
  flex-direction: column
  justify-content: center
  overflow: hidden
  color: #fff
  text-align: center
  white-space: nowrap
  background-color: $primary
</style>
