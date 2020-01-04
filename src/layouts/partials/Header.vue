<template>
  <header class="container header decorated-links">
    <g-link class="brand" to="/"><g-image class="logo" src="../../../static/logo.svg" alt="logo" /></g-link>
    <button class="hamburger hamburger-icon" :class="{ active: isOpen }" type="button" aria-label="Site menu" @click="toggle">
      <span class="hamburger-box" aria-hidden="true">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <ul :class="isOpen ? 'visible': 'hidden'">
      <li><Search /></li>
      <li><ThemeSwitcher /></li>
      <li><g-link to="/about">About</g-link></li>
    </ul>
  </header>
</template>

<script>
import Search from '~/components/Search'
import ThemeSwitcher from '~/components/ThemeSwitcher'

export default {
  components: {
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

<style lang="scss">
.header {
  @include center(wrap, space-between);
  @include spacing;

  @include desktop {
    @include spacing($gap-xxl);
  }

  .brand {
    line-height: $line-height-none;

    .logo {
      width: resize($graphics, 7.5);

      @include tab-portrait {
        width: resize($graphics, 8.5);
      }
    }
  }

  .hidden {
    @include phone {
      @include hide(true);
    }
  }

  .visible {
    @include hide(false);
  }

  ul {
    display: block;
    flex-grow: 1;
    align-items: center;
    width: $width-full;
    list-style: none;
    font-weight: $font-semibold;

    @include phone {
      margin-top: $gap-md;
      margin-right: -$gap-lg;
      margin-left: -$gap-lg;
      padding: $gap-base;
      background-color: $background-panel-dim;
      border-top: 1px solid $border-panel;
      border-bottom: 1px solid $border-panel;

      li {
        padding: $gap-xs;
      }
    }

    @include tab-portrait {
      display: flex;
      flex: 0 1 auto;
      width: auto;

      li {
        margin-left: $gap-base;
      }
    }
  }
}

$hamburger-layer-height: 2px !default;
$hamburger-layer-spacing: 6px !default;

.hamburger {
  padding: $gap-none;
  display: inline-block;
  cursor: pointer;
  outline: none;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  // Normalize (<button>)
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  @include tab-portrait {
    @include hide(true);
  }

  &.active {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: $link;
    }
  }
}

.hamburger-box {
  width: $gap-md;
  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: $hamburger-layer-height / -2;

  &,
  &::before,
  &::after {
    width: $gap-md;
    height: $hamburger-layer-height;
    background-color: $link;
    border-radius: $radius-base;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }

  &::after {
    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }
}

.hamburger-icon {
  .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::before {
      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    }

    &::after {
      transition: bottom 0.1s 0.25s ease-in,
        transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.active {
    .hamburger-inner {
      transform: rotate(225deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        top: $gap-none;
        opacity: $opacity-none;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
      }

      &::after {
        bottom: $gap-none;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out,
          transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
</style>
