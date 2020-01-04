<template>
  <Layout>
    <Hero>
      <h1>Page not found</h1>
    </Hero>
    <div class="container expanded">
      <g-image src="../../static/404.svg" />
    </div>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero'
import Panel from '~/components/Panel'

export default {
  metaInfo: {
    title: 'Page not found'
  },
  components: {
    Hero,
    Panel
  }
}
</script>

<style lang="scss" scoped>
.expanded {
  @include spacing;
}
</style>
