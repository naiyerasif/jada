<template>
  <div class="layout">
    <h1>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </h1>
    <slot></slot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
