<template>
  <div class="cdv-default-layout overflow-hidden">
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
