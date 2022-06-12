<template>
  <div class="cdv-default-layout absolute top-0 bottom-0 left-0 right-0">
    <nuxt></nuxt>
  </div>
</template>

<script>
import { useCounterStore } from './../store/counter'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      store: useCounterStore(),
    }
  },
  beforeMount() {
    window.CDV = window.CDV || {}

    if (localStorage.session) {
      this.store.addCount(Number(localStorage.session))
    } else {
      localStorage.session = 0
    }
  },
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow: hidden;
  touch-action: none;
}
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
  animation-duration: 150ms;
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
