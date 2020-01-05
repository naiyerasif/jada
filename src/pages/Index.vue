<template>
  <Layout>
    <Hero>
      <h1>
        &mdash; A practical<br/>
        blog starter for <a href="https://gridsome.org/" target="_blank" rel="noopener noreferrer">Gridsome</a>
      </h1>
    </Hero>
    <Posts :posts="$page.posts.edges" />
    <Pagination v-if="$page.posts.pageInfo.totalPages > 1" :input="$page.posts.pageInfo" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 4, page: $page) @paginate {
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
import Pagination from '~/components/Pagination'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Hero,
    Posts,
    Pagination
  }
}
</script>
