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

<style lang="scss" scoped>
.panel {
  display: block;
  overflow: hidden;
  border-top: 1px solid $border-panel;
  border-bottom: 1px solid $border-panel;

  @include tab-portrait {
    border-right: 1px solid $border-panel;
    border-left: 1px solid $border-panel;
    border-radius: $radius-base;
  }
}

.reader-pane {
  @include desktop {
    max-width: $expanse-middle;
  }
}
</style>
