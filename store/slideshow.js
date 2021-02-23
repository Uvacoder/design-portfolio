export const state = () => ({
  current: 0,
  next: 0,
  playing: false, // set true if you want to play automatically
  duration: 5000,
  slides: []
})

export const mutations = {
  increment(state) {
    if (state.current + 1 === state.slides.length) {
      state.current = 0
      return
    }
    state.current++
  },
  decrement(state) {
    if (state.current === 0) {
      state.current = state.slides.length - 1
      return
    }
    state.current--
  },
  PLAY(state) {
    state.playing = !state.playing
  },
  ADD_SLIDE(state, slide) {
    state.slides.push(slide)
  },
  ADD_SLIDES(state, slides) {
    state.slides = slides
  }
}

export const getters = {
  total: (state) => {
    return state.slides.length
  },
  isNextActive: (state) => {
    return false
    // return (state.current + 1 === state.slides.length)
  },
  isPrevActive: (state) => {
    return false
    // return (state.current === 0)
  },
  isPlaying: (state) => state.playing,
  duration: (state) => state.duration
}
