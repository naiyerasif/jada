<template>
  <Layout>
    <Hero>
      <h1>
        Hello, I am <span id="about-me" class="emphasis">{{ firstName }}</span>
        <br>a {{ $page.profile.role | lowerCase }}
        <br>from {{ $page.profile.location }}
      </h1>
    </Hero>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query Profile ($id: ID!) {
  profile: profile (id: $id) {
    name
    role
    location
    path
  }
}
</page-query>

<script>
import Hero from '~/components/Hero'

export default {
  metaInfo() {
    return {
      title: this.$page.profile.name
    }
  },
  components: {
    Hero
  }, 
  computed: {
    firstName() {
      return this.$page.profile.name.substr(0, this.$page.profile.name.indexOf(' '))
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase()
    }
  }
}
</script>
