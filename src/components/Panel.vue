<template>
  <div class="panel">
    <main class="article decorated-links">
      <slot></slot>
    </main>
    <section class="note decorated-links" v-if="noteExists">
      <slot name="note"></slot>
    </section>
    <section class="card" v-if="cardExists">
      <slot name="card"></slot>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    noteExists() {
      return !!this.$slots.note
    },
    cardExists() {
      return !!this.$slots.card
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
</style>
