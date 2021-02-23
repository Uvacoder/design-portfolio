<template>
  <transition name="dropdown">
    <div v-if="menuShow" class="dropdown__menu" :class="{ active: menuShow }">
      <ul class="dropdown__menu-nav">
        <li class="dropdown__menu-item">
          <nuxt-link to="/" class="dropdown__menu-link" title="Home" exact>
            <div class="dropdown__menu-svg">
              <unicon name="home-alt" fill="currentColor" />
            </div>
            <div class="dropdown__menu-text">
              Home
            </div>
          </nuxt-link>
        </li>
        <li class="dropdown__menu-item">
          <nuxt-link
            to="/about"
            class="dropdown__menu-link"
            title="About"
            exact
          >
            <div class="dropdown__menu-svg">
              <unicon name="user-square" fill="currentColor" />
            </div>
            <div class="dropdown__menu-text">
              About
            </div>
          </nuxt-link>
        </li>
        <li class="dropdown__menu-item">
          <nuxt-link
            to="/collections"
            class="dropdown__menu-link"
            title="Collections"
            exact
          >
            <div class="dropdown__menu-svg">
              <unicon name="images" fill="currentColor" />
            </div>
            <div class="dropdown__menu-text">Collections</div>
          </nuxt-link>
        </li>
        <li class="dropdown__menu-item">
          <nuxt-link to="/blog" class="dropdown__menu-link" title="Blog" exact>
            <div class="dropdown__menu-svg">
              <unicon name="document-layout-left" fill="currentColor" />
            </div>
            <div class="dropdown__menu-text">Blog</div>
          </nuxt-link>
        </li>
        <li class="dropdown__menu-item">
          <nuxt-link
            to="/contact"
            class="dropdown__menu-link"
            title="Contact"
            exact
          >
            <div class="dropdown__menu-svg">
              <unicon name="at" fill="currentColor" />
            </div>
            <div class="dropdown__menu-text">Contact</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    menuShow: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 100
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.scroll-area {
  position: relative;
  margin: auto;
  /* width: 600px; */
  /* height: 45vh; */
  height: 320px;
}
hr {
  border: 0;
  height: 0;
  margin: 1.5rem 0;
  border-top: 1px solid $gray-300;
}
// Dropdown Menu
.dropdown__menu {
  top: calc(100% - 30px);
  right: 0;
  position: absolute;
  z-index: 999;
  /* height: 80vh; */
  /* min-width: 300px; */
  min-width: 260px;
  margin-top: 1rem;
  overflow-y: auto;
  /* overflow: hidden; */
  /* padding: 2rem 1rem 2rem 0rem; */
  padding: 2rem 1rem;
  border-radius: 12px;
  background-color: $white;
  border: 1px solid var(--color-gray);
  background-clip: padding-box;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.15);
  &-nav {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }
  &-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    padding: 0.8rem 0 0.8rem 2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    /* border-radius: 0 50px 50px 0; */
    border-radius: 50px;
    transition: all 350ms ease;
    &:not(.exact-active):hover {
      color: $primary;
      background-color: rgba($primary, 0.1);
    }
    &.active {
      color: $primary;
    }
  }
  &-svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-text {
    font-weight: 300;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

// Dropdown Menu Animation

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 250ms;
  overflow: hidden;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
