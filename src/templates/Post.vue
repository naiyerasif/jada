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
    <div class="container">
      <Panel decorated>
        <main v-html="$page.post.content" />
      </Panel>
      <div class="edit">
        <a target="_blank" rel="noopener noreferrer" :href="$page.post.editUrl"><svg class="icon icon-edit" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Edit this page</a>
        <a :href="jumpToTableOfContents"><svg class="icon icon-up" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg> Back to top</a>
      </div>
    </div>
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
import siteConfig from '../../data/site.json'

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
    },
    jumpToTableOfContents() {
      return `#${siteConfig.tocPattern.toLowerCase().replace(/ /g, '-')}`
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

.edit {
  @include spacing;
  @include center(nowrap, start);
  
  & > a {
    text-decoration: none;
    margin-right: $gap-base;
  }
  
  @include desktop {
    @include spacing($gap-xl, $gap-xl);
  }
}
</style>
