<template>
  <div class="text-center">
    <div class="h-14"></div>
    <div v-longpress="startSection" class="mb-4">
      <img class="m-auto w-32 md:w-42 lg:w-48 pointer-events-none" src="verre.png" />
      <h1 class="text-2xl mt-4 pointer-events-none">Combien de Verres?</h1>
      <span class="text-xs mt-4 pointer-events-none">LongPress pour demarrer</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WelcomeScreen',

  methods: {
    startSection() {
      this.$router.push({ path: '/soiree' })
    },
  },
}
</script>
