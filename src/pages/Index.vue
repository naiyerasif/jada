<template>
  <Layout>
    <Hero>
      <h1>
        &mdash; A practical<br/>
        blog starter for <a href="https://gridsome.org/" target="_blank" rel="noopener noreferrer">Gridsome</a>
      </h1>
    </Hero>
    <Posts :posts="$page.posts.edges" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMM D, Y")
        blurb
        timeToRead
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Hero from '~/components/Hero'
import Posts from '~/components/Posts'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Hero,
    Posts
  }
}
</script>
