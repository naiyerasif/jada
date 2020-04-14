module.exports = {
  name: 'Jada',
  description: 'A blog starter for Gridsome',
  url: 'https://gridsome-jada.netlify.com',
  favicon: 'https://raw.githubusercontent.com/Microflash/jada/master/src/favicon.png',
  maintainer: 'Jada Zorebian',
  copyright: `Copyright ${new Date().getFullYear()} ${this.name}`,
  prefs: {
    editContext: 'https://github.com/Microflash/jada/edit/master',
    excerptSize: 251,
    maxTocDepth: 3,
    outdationPeriod: 365 // in days
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
      threshold: 0.3,
      location: 0,
      distance: 600,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        'title',
        'excerpt'
      ]
    }
  }
}
