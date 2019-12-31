<template>
  <div class="layout">
    <h1>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link> <ThemeSwitcher />
    </h1>
    <slot></slot>
    <p>&copy; 2019 - forever</p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ThemeSwitcher from '~/components/ThemeSwitcher'

export default {
  components: {
    ThemeSwitcher
  }
}
</script>
