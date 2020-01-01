<template>
  <section class="container hero">
    <slot />
  </section>
</template>

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
