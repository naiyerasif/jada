import '~/assets/styles/main.scss'

import DefaultLayout from '~/layouts/Default.vue'
import siteConfig from '../data/site.json'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  Vue.filter('clip', (value) => value.replace(/^(.{250}[^\s]*).*/, '$1'))

  head.meta.push({
    name: 'author',
    content: siteConfig.maintainer
  })
}
