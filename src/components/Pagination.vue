<template>
  <section class="container pagination note">
    <g-link :to="previousPage(input.currentPage)" v-if="input.currentPage > 1">&larr; Prev</g-link>
    <div>page {{ input.currentPage }} of {{ input.totalPages }}</div>
    <g-link :to="nextPage(input.currentPage, input.totalPages)" v-if="input.currentPage < input.totalPages">Next &rarr;</g-link>
  </section>
</template>

<script>
import Panel from './Panel'

export default {
  props: ['path', 'input'],
  components: {
    Panel
  },
  computed: {
    base() {
      return this.path || ''
    }
  },
  methods: {
    previousPage(currentPage) {
      return [0, 1].includes(currentPage - 1) ? `${this.base}/` : `${this.base}/${currentPage - 1}/`;
    },
    nextPage(currentPage, totalPages) {
      return totalPages > currentPage ? `${this.base}/${currentPage + 1}/` : `${this.base}/${currentPage}/`;
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  @include center(nowrap, space-between);
}
</style>
