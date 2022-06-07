<template>
  <div class="cdv-default-layout">
    <nuxt></nuxt>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  beforeMount() {
    window.CDV = window.CDV || {}
  },
}
</script>

<style lang="scss">
.cdv-default-layout {
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>
