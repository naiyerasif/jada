<template>
  <Layout>
    <div class="container hero">
      <section class="canvas">
        <h1 class="title" id="top">
          About this starter
        </h1>
        <div class="subtitle">
          A list of features provided by <strong>Jada</strong>
        </div>
      </section>
    </div>
    <div class="container article">
      <main class="main">
        <h2>Features</h2>
        <ul>
          <li>Accessible and fluid design</li>
          <li>Markdown support for blog content</li>
          <li>Table of contents for articles</li>
          <li>Tags for articles</li>
          <li>Pagination for blog posts</li>
          <li>Contributor profiles (with <a target="_blank" rel="nofollow noopener noreferrer" href="https://gridsome.org/plugins/@gridsome/vue-remark">@gridsome/vue-remark</a>)</li>
          <li>Search for blog posts (with <a target="_blank" rel="nofollow noopener noreferrer" href="https://fusejs.io/">Fuse.js</a> and <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/shayneo/vue-fuse">vue-fuse</a>)</li>
          <li>Excerpts and Edit URL generation for blog posts</li>
          <li>Support for marking articles as outdated</li>
          <li>Syntax highlighting (with <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/octref/shiki">Shiki</a>)</li>
          <li>Dark and light themes with <a target="_blank" rel="nofollow noopener noreferrer" href="https://sass-lang.com/">Sass</a> and theme-switching support</li>
          <li>SVGs as Vue components (with <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/egoist/svg-to-vue-component">svg-to-vue-component</a>)</li>
          <li>RSS, Atom and JSON feeds (with <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/Microflash/gridsome-plugin-feed">@microflash/gridsome-plugin-feed</a>)</li>
          <li>Sitemap (with <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/gridsome/gridsome/tree/master/packages/plugin-sitemap">plugin-sitemap</a>)</li>
        </ul>
      </main>
      <div class="article-actions">
        <a href="#top">
          <IconUp class="icon" /> Back to top
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import IconUp from '~/assets/images/icon-up.svg'

export default {
  metaInfo: {
    title: 'About'
  },
  components: {
    IconUp
  }
}
</script>
