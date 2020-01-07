<template>
  <div :class="panelClasses">
    <section :class="classes">
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: ['type', 'decorated'],
  computed: {
    classes() {
      const contentClass = this.type === 'note' ? 'note' : this.type === 'card' ? 'card' : 'article'
      const decorationClass = this.decorated ? 'decorated-links' : ''
      return contentClass + decorationClass
    },
    panelClasses() {
      return !this.type || this.type === 'article' ? 'panel reader-pane' : 'panel'
    }
  }
}
</script>
