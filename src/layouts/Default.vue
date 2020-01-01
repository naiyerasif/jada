<template>
  <div class="layout">
    <Header />
    <slot></slot>
    <p>&copy; 2019 - forever</p>
  </div>
</template>

<script>
import Header from './partials/Header'

export default {
  components: {
    Header
  }
}
</script>
