<template>
  <Layout>
    <Hero>
      &mdash; A practical<br/>
      blog starter for <a href="https://gridsome.org/" target="_blank" rel="noopener noreferrer">Gridsome</a>
    </Hero>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Hero
  }
}
</script>
