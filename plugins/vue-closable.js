import Vue from 'vue'

let handleOutsideClick

// https://tahazsh.com/detect-outside-click-in-vue

Vue.directive('closable', {
  bind(el, binding, vnode) {
    handleOutsideClick = (e) => {
      e.stopPropagation()
      const { handler, exclude } = binding.value
      let clickedOnExcludedEl = false
      exclude.forEach((refName) => {
        if (!clickedOnExcludedEl) {
          const excludedEl = vnode.context.$refs[refName]
          if (excludedEl)
            if (excludedEl.$el) {
              clickedOnExcludedEl = excludedEl.$el.contains(e.target)
            } else {
              clickedOnExcludedEl = excludedEl.contains(e.target)
            }
        }
      })
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]()
      }
    }
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },

  unbind() {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
})
