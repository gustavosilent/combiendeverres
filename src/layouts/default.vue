<template>
  <div class="cdv-default-layout overflow-y-hidden">
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
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__content {
    display: flex; // allow pages to have full height
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;

    > *:not(.notnuxt) {
      flex: 1 0 auto; // will target <nuxt>
      width: 100%;
    }
  }

  &__footer {
    flex: 0 0 auto;
  }

  &__header {
    z-index: 10;
  }

  &__banners {
    z-index: 11;
  }

  &__backdrop {
    z-index: 9;
  }
}
</style>
