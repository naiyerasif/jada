const path = require('path')
const fs = require('fs')
const { GraphQLString } = require('gridsome/graphql')
const appConfig = require('./app.config')
const summarize = require('./marked.config').summarize

const editConfigs = appConfig.editConfig.paths
const { basePath, constructEditUrl } = editConfigs.filter(p => p.collection === 'Post')[0]

module.exports = function (api) {
  api.loadSource(({ addSchemaResolvers, getCollection }) => {
    const posts = getCollection('Post')
    posts.data().forEach(node => {
      if (!node.updated) {
        node.updated = node.date
      }
    })

    addSchemaResolvers({
      Post: {
        blurb: {
          type: GraphQLString,
          resolve(post) {
            return post.blurb ? post.blurb : summarize(post.content)
          }
        },
        editUrl: {
          type: GraphQLString,
          resolve(post) {
            return constructEditUrl(basePath, post.path)
          }
        }
      }
    })
  })

  api.beforeBuild(({ store }) => {
    const { collection } = store.getCollection('Post')

    const posts = collection.data.map(post => {
      return {
        title: post.title,
        path: post.path,
        blurb: post.blurb ? post.blurb : summarize(post.content)
      }
    })

    const output = {
      dir: `./${appConfig.searchConfig.file.dir}`,
      name: appConfig.searchConfig.file.name
    }

    const outputPath = path.resolve(process.cwd(), output.dir)
    const outputPathExists = fs.existsSync(outputPath)
    const fileName = output.name.endsWith('.json') ? output.name : `${output.name}.json`

    if (!outputPathExists) {
      fs.mkdirSync(outputPath)
    }

    fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(posts))
  })
}
