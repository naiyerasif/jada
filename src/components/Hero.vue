<template>
  <section class="container hero">
    <h1>
      <slot></slot>
    </h1>
    <div v-if="subtitleExists">
      <slot name="subtitle"></slot>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    subtitleExists() {
      return !!this.$slots.subtitle
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  @include spacing($gap-xs);
  width: $width-full;

  a {
    &:focus,
    &:hover {
      text-decoration: none;
    }
  }

  h1 {
    font-size: $text-xl;

    @include tab-landscape {
      font-size: $text-3xl;
    }
  }
}
</style>
