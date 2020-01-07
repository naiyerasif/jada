<template>
  <Layout>
    <div class="container hero">
      <h1>Page not found</h1>
    </div>
    <div class="container">
      <div class="post">
        <div class="panel">
          <g-image src="../../static/404.svg" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Panel from '~/components/Panel'

export default {
  metaInfo: {
    title: 'Page not found'
  },
  components: {
    Panel
  }
}
</script>
