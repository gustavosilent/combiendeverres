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
.default-leave-active {
  animation-name: fadeout;
  animation-duration: 300ms;
  animation-iteration-count: 1;
}
.default-enter {
  @keyframes fadeout {
    0% {
      background-color: #fff;
    }
    50% {
      background-color: #283faf;
    }
    100% {
      background-color: #fff;
    }
  }
}
</style>
