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
.default-enter-active {
  animation-name: color;
  animation-duration: 200ms;
  animation-iteration-count: 1;
}
.default-enter {
  @keyframes color {
    0% {
      background-color: #fff;
    }
    100% {
      background-color: #283faf;
    }
  }
}
</style>
