<template>
  <Layout>
    <div class="container hero">
      <h1 id="top">About this starter</h1>
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
          <li>Support for RSS, Atom and JSON feeds</li>
          <li>Custom 404 page</li>
          <li>Sitemap in XML</li>
        </ul>
      </main>
      <div class="article-actions">
        <a href="#top">
          <svg viewBox="0 0 24 24" class="icon icon-up"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg> Back to top
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>
