<template>
  <Layout>
    <Hero>
      <h1>{{ $page.post.title }}</h1>
      <p class="author" v-for="author in $page.post.authors" :key="author.id">
        <g-image :alt="author.name" :src="author.avatar" class="icon" />
        <g-link :to="author.path" class="profile">{{ author.name }}</g-link>
      </p>
      <p class="meta">
        {{ displayDate }} ({{ $page.post.timeToRead }} min read) <span class="translucent">&sol;</span> 
        <g-link :to="tag.path" v-for="tag in $page.post.tags" :key="tag.id">
          #{{ tag.title }} 
        </g-link>
      </p>
    </Hero>
    <Panel decorated>
      <main v-html="$page.post.content" />
    </Panel>
    <Panel type="note">
      <span>Spotted a mistake or want to improve this post?</span>
      <a target="_blank" rel="noopener noreferrer" :href="$page.post.editUrl"><svg class="icon icon-edit" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Edit this page on GitHub!</a>
    </Panel>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMM D, Y")
    updated (format: "MMM D, Y")
    authors {
      id
      name
      avatar
      path
    }
    content
    path
    timeToRead
    editUrl
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import Hero from '~/components/Hero'
import Panel from '~/components/Panel'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },
  components: {
    Hero,
    Panel
  },
  computed: {
    displayDate() {
      const published = `Published ${this.$page.post.date}`
      return !this.$page.post.hasOwnProperty('updated') ? published : (this.$page.post.updated !== this.$page.post.date ? `Updated ${this.$page.post.updated}` : published); 
    }
  }
}
</script>

<style lang="scss" scoped>
.author {
  display: flex;
  align-items: center;
  margin-top: $gap-xs;
  margin-bottom: $gap-xs;
}

.profile {
  margin-left: $gap-xs;
}

.meta {
  font-size: $text-xs;
}
</style>
