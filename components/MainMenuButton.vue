<template>
  <div ref="siteMenuButton">
    <transition name="slide-fade">
      <!-- Header Navigation Menu Icons -->
      <button
        v-if="menuShow"
        ref="siteMenuButton"
        key="on"
        class="header--button"
        :class="{ 'text-light': light }"
        aria-label="Close Menu"
        @click="toggle(false)"
      >
        <svg viewBox="0 0 24 24" class="header--icon">
          <title>Close</title>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            fill="currentColor"
            d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
          />
        </svg>
      </button>
      <button
        v-else
        key="off"
        aria-label="Open Menu"
        class="header--button"
        :class="{ 'text-light': light }"
        @click="toggle(true)"
      >
        <svg viewBox="0 0 24 17" class="header--icon">
          <title>Navigation Menu</title>
          <path
            fill="currentColor"
            d="M23,9.45811321 L1,9.45811321 C0.447998062,9.45811321 0,9.01978417 0,8.47969595 C0,7.93960772 0.447998063,7.50127868 1,7.50127868 L23,7.50127868 C23.5520019,7.50127868 24,7.93960772 24,8.47969595 C24,9.01978417 23.5520019,9.45811321 23,9.45811321 Z"
          ></path>
          <path
            fill="currentColor"
            d="M23,1.95683453 L1,1.95683453 C0.447998062,1.95683453 0,1.51850549 0,0.978417266 C0,0.43832904 0.447998063,9.99200722e-16 1,9.99200722e-16 L23,9.99200722e-16 C23.5520019,9.99200722e-16 24,0.43832904 24,0.978417266 C24,1.51850549 23.5520019,1.95683453 23,1.95683453 Z"
          ></path>
          <path
            fill="currentColor"
            d="M23,16.959153 L1,16.959153 C0.447998062,16.959153 0,16.5208239 0,15.9807357 C0,15.4406475 0.447998063,15.0023184 1,15.0023184 L23,15.0023184 C23.5520019,15.0023184 24,15.4406475 24,15.9807357 C24,16.5208239 23.5520019,16.959153 23,16.959153 Z"
          ></path>
        </svg>
      </button>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    toggle: {
      type: Function,
      required: true
    },
    light: {
      type: Boolean,
      default: false
    },
    menuShow: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
// Header Menu

.header {
  padding: 2rem 5rem 2rem 5rem;
  &__nav {
    position: relative;
  }
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__item {
    padding: 1rem;
  }
  &--icon {
    width: 1.65rem;
    height: 1.65rem;
  }
  &--button {
    top: 0;
    right: 0;
    position: absolute;
    margin: 0;
    padding: 0;
    /* color: gray; */
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    &:focus {
      outline: 0;
    }
  }
}

// Animation Menu Icon

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 250ms;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}
</style>
