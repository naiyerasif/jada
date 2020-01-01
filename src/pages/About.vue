<template>
  <Layout>
    <Hero>
      <h1>About</h1>
    </Hero>
    <div class="container">
      <Panel decorated>
        <blockquote>A practical blog starter for <a href="https://gridsome.org/">Gridsome</a></blockquote>
        <h2>Features</h2>
        <ul>
          <li>Accessible and responsive design</li>
          <li>Support for blogging with markdown content</li>
          <li>Table of contents, Tags, Pagination for blog posts</li>
          <li>Search with <a target="_blank" rel="nofollow noopener noreferrer" href="https://fusejs.io/">Fuse.js</a> and <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/shayneo/vue-fuse">vue-fuse</a></li>
          <li>Automated blurb generation for posts <blockquote>Made possible by marked, can be overridden by manual blurb</blockquote></li>
          <li>GitHub URL generation for blog posts <blockquote>Done through URL generation based on repository URL but can be configured with a custom implementation to cover other usecases</blockquote></li>
          <li>Syntax highlighting with <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/octref/shiki">Shiki</a></li>
          <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://sass-lang.com/">Sass</a> integration</li>
          <li>Theme Switcher for Dark and Light modes</li>
          <li>Support for RSS, Atom and JSON feeds <blockquote>By default, only RSS feed is generated.</blockquote></li>
          <li>Smooth scrolling to sections with <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/rigor789/vue-scrollTo">vue-scrollto</a> <blockquote>Not available on generated Table of contents of the blog posts</blockquote></li>
          <li>Custom 404 page</li>
          <li>Sitemap in XML</li>
        </ul>
      </Panel>
    </div>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero'
import Panel from '~/components/Panel'

export default {
  metaInfo: {
    title: 'About'
  },
  components: {
    Hero,
    Panel
  }
}
</script>
