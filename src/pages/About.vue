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
        <blockquote>A practical blog starter for <a href="https://gridsome.org/">Gridsome</a></blockquote>
        <h2>Features</h2>
        <ul>
          <li>Accessible and responsive design</li>
          <li>Support for blogging with markdown content</li>
          <li>Table of contents for blog posts</li>
          <li>Tags for blog posts</li>
          <li>Pagination for blog posts</li>
          <li>Search with <a target="_blank" rel="nofollow noopener noreferrer" href="https://fusejs.io/">Fuse.js</a> and <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/shayneo/vue-fuse">vue-fuse</a></li>
          <li>Automated blurb generation for posts</li>
          <li>GitHub URL generation for blog posts</li>
          <li>Syntax highlighting with <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/octref/shiki">Shiki</a></li>
          <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://sass-lang.com/">Sass</a> integration</li>
          <li>Theme Switcher for Dark and Light modes</li>
          <li>Import SVGs as Vue components with <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/egoist/svg-to-vue-component">svg-to-vue-component</a></li>
          <li>Support for RSS, Atom and JSON feeds</li>
          <li>Custom 404 page</li>
          <li>Sitemap in XML</li>
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
