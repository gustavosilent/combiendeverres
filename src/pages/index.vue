<template>
  <div class="grid flex h-screen justify-center items-center">
    <transition name="page">
      <welcome-screen/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>
