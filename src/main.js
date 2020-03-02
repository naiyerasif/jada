import '~/assets/styles/main.scss'

import VueFuse from 'vue-fuse'
import { AllHtmlEntities } from 'html-entities'
import DefaultLayout from '~/layouts/Default.vue'
import * as appConfig from '../app.config'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  const entities = new AllHtmlEntities()
  Vue.filter('clip', (value, size) => {
    const clipSize = size || 240
    const regex = new RegExp(`^(.{${clipSize}}[^\s]*).*`)
    return entities.decode(value.replace(regex, '$1'))
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'author',
    content: appConfig.maintainer
  })

  head.meta.push({
    name: 'description',
    content: appConfig.description
  })
}
