<template>
  <footer class="container grid-base footer decorated-links">
    <section class="grid-base-cell">
      <h1 class="imprint">&#10077;{{ name }}&#10078;</h1>
      <p class="follow">Copyright &copy; {{ year }}</p>
      <p class="follow">Source licensed under MIT</p>
      <p class="follow">Content available under CC by SA</p>
    </section>
    <section class="grid-base-cell">
      <p class="lead">Legal</p>
      <p class="follow"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Microflash/jada/issues/new">Report an issue</a></p>
      <p class="follow"><a target="_blank" rel="noopener noreferrer" href="#">Privacy Policy</a></p>
      <p class="follow"><a href="/sitemap.xml" title="Sitemap">Sitemap</a></p>
    </section>
    <section class="grid-base-cell">
      <p class="lead">Connect</p>
      <ul class="links">
        <li><a href="/feed.xml" title="RSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-rss"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg></a></li>
        <li><a href="https://github.com/Microflash/jada" title="GitHub" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
        <li><a href="https://twitter.com/Microflash" title="Twitter" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
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
export default {
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

<style lang="scss" scoped>
.footer {
  @include spacing;

  @include desktop {
    margin-top: $gap-xxl;
    margin-bottom: $gap-xxl;
  }

  .imprint {
    font-weight: $font-bold;
    font-size: $text-3xl;
    margin-bottom: $gap-lg;
  }

  .links {
    display: flex;
    list-style: none;
    margin-top: $gap-none;
    margin-left: $gap-none;

    li:not(:first-child) {
      margin-left: $gap-xs;
    }
  }
}
</style>
