<template>
  <footer class="container grid-md footer">
    <section class="grid-md-cell">
      <div class="is-lead">
        <h1>&#10077;{{ name }}&#10078;</h1>
      </div>
      <ul class="is-footer-list">
        <li>Copyright &copy; {{ year }}</li>
        <li>Source license <a target="_blank" rel="noopener noreferrer" href="https://github.com/Microflash/jada/blob/master/LICENSE.md">MIT</a></li>
      </ul>
    </section>
    <section class="grid-md-cell">
      <div class="is-lead">Resources</div>
      <ul class="is-footer-list">
        <li>
          <a href="/feed.xml">RSS feed</a>
        </li>
        <li>
          <a href="/sitemap.xml">Sitemap</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Microflash/jada">Documentation</a>
        </li>
      </ul>
    </section>
    <section class="grid-md-cell">
      <div class="is-lead">Support</div>
      <ul class="is-footer-list">
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Microflash/jada/issues/new">Report an issue</a>
        </li>
      </ul>
    </section>
    <section class="grid-md-cell">
      <div class="is-lead">Connect</div>
      <ul class="is-footer-list is-flex-list">
        <li>
          <a class="is-separated" href="https://github.com/Microflash/jada" title="GitHub" target="_blank" rel="noopener noreferrer">
            <IconGithub class="icon" />
          </a>
        </li>
        <li>
          <a class="is-separated" href="https://twitter.com/Microflash" title="Twitter" target="_blank" rel="noopener noreferrer">
            <IconTwitter class="icon" />
          </a>
        </li>
      </ul>
    </section>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import IconGithub from '~/assets/images/icon-github.svg'
import IconTwitter from '~/assets/images/icon-twitter.svg'

export default {
  components: {
    IconGithub,
    IconTwitter
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
    name() {
      return this.$static.metadata.siteName.toLowerCase()
    }
  }
}
</script>
