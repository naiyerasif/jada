const { GraphQLString } = require('gridsome/graphql')
const appConfig = require('./app.config')
const summarize = require('./marked.config').summarize

const editConfigs = appConfig.editConfig.paths
const { basePath, constructEditUrl } = editConfigs.filter(p => p.collection === 'Post')[0]

module.exports = function (api) {
  api.loadSource(({ addSchemaResolvers, addCollection, getCollection }) => {
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
}
