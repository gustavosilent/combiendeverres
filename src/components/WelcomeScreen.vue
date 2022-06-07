<template>
  <div class="text-center select-none">
    <div v-longpress="startSection" class="mb-4">
      <img
        class="m-auto w-32 md:w-42 lg:w-48 pointer-events-none"
        src="verre.png"
      />
      <h1 class="text-2xl mt-4">Combien de Verres?</h1>
      <span class="text-xs mt-4">LongPress pour demarrer</span>
    </div>
  </div>
</template>
<script>
import { useCounterStore } from './../store/counter'

export default {
  name: 'WelcomeScreen',

  data() {
    return {
      store: useCounterStore(),
    }
  },

  methods: {
    startSection() {
      window.navigator?.vibrate?.([50, 200, 50, 200])
      this.store.emptyCount()
      this.$router.push({ path: '/soiree' })
    },
  },
}
</script>
