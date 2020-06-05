<template>
  <nav class="menu">
    <router-link exact :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'faq' }">FAQ</router-link>
  </nav>
</template>

<style lang="stylus" scoped>
  @import '../style/imports';
  .router-link-active {
    border-bottom-color: $primary-color;
  }
</style>
