const path = require('path')
const autoprefixer = require('autoprefixer')
const appConfig = require('./app.config')

const postcssPlugins = [
  autoprefixer()
]

const addStyleResources = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/core/_index.scss'),
        path.resolve(__dirname, './src/assets/styles/helpers/_index.scss'),
      ]
    })
}

module.exports = {
  siteName: appConfig.name,
  siteDescription: appConfig.description,
  siteUrl: appConfig.url,
  titleTemplate: `%s · ${appConfig.name}`,
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResources(config.module.rule('scss').oneOf(type)))
  }
}
