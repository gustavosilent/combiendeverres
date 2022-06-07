<template>
  <div class="cdv-default-layout">
    <nuxt></nuxt>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHaptic from 'vue-haptic'

Vue.use(VueHaptic, {
  // Required. vue-haptic does not provide
  // any out-of-the-box patterns
  patterns: {
    success: [10, 100, 30],
    failure: [10, 50, 10, 50, 50, 100, 10],
  },
})

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
