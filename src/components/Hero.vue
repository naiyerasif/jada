<template>
  <section class="container hero">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  @include spacing($gap-base, resize($gap-base, 2.5));
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
