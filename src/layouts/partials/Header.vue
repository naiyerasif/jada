<template>
  <header class="container header">
    <g-link class="brand" to="/">
      <g-image src="~/assets/images/logo.svg" alt="logo" />
    </g-link>
    <a @click="toggle" class="hamburger" title="Menu">
      <transition name="slide-up" mode="out-in">
        <IconMenu key="open" class="icon" v-if="!isOpen" />
        <IconClose key="close" class="icon" v-else />
      </transition>
    </a>
    <nav class="menu" :class="isOpen ? 'is-visible': 'is-hidden-on-phone'">
      <Search />
      <ThemeSwitcher />
      <a href="https://github.com/Microflash/jada" target="_blank" rel="noopener noreferrer">GitHub</a>
      <g-link to="/about">About</g-link>
    </nav>
  </header>
</template>

<script>
import IconMenu from '~/assets/images/icon-menu.svg'
import IconClose from '~/assets/images/icon-close.svg'
import Search from '~/components/Search'
import ThemeSwitcher from '~/components/ThemeSwitcher'

export default {
  components: {
    IconMenu,
    IconClose,
    Search,
    ThemeSwitcher
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
