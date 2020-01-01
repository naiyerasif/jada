<template>
  <Layout>
    <Hero>
      <h1>
        #{{ $page.tag.title }}
      </h1>
    </Hero>
    <Posts :posts="$page.tag.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (sortBy: "updated", order: DESC, page: $page, perPage: 10) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            timeToRead
    	      date (format: "MMM D, Y")
    	      updated (format: "MMM D, Y")
            path
            blurb
            tags {
              title,
              path
            }
          }
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
  metaInfo() {
    return {
      title: '#' + this.$page.tag.title
    }
  },
  components: {
    Hero,
    Posts
  }
}
</script>
