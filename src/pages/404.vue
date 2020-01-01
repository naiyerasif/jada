<template>
  <Layout>
    <Hero>
      <h1>Page not found</h1>
    </Hero>
    <div class="container">
      <Panel>
        <g-image src="../../static/404.svg" />
      </Panel>
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
