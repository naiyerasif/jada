module.exports = {
  name: 'Jada',
  description: 'A blog starter for Gridsome',
  url: 'https://gridsome-jada.netlify.com',
  favicon: 'https://raw.githubusercontent.com/Microflash/jada/master/src/favicon.png',
  maintainer: 'Jada Zorebian',
  copyright: `Copyright ${new Date().getFullYear()} ${this.name}`,
  prefs: {
    tocPattern: 'Table of Contents',
    blogDir: 'content/blog/',
    blurbSize: 251,
    outdationPeriod: 365 // in days
  },
  editConfig: {
    paths: [
      {
        collection: 'Post',
        basePath: `https://github.com/Microflash/jada/edit/master/content/`,
        constructEditUrl: (ctx, path) => {
          const tokens = path.split('/')
          tokens[1] = tokens[1] + "/" + tokens[2]
          const slug = tokens.splice(1, 2).join('/') + tokens.join('-')
          return `${ctx + slug.substring(0, slug.length - 1)}.md`
        }
      }
    ]
  },
  searchConfig: {
    file: {
      dir: 'static',
      name: 'search.json'
    },
    options: {
      shouldSort: true,
      includeMatches: true,
      tokenize: true,
      matchAllTokens: true,
      threshold: 0.4,
      location: 0,
      distance: 600,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        'title',
        'blurb'
      ]
    }
  }
}
