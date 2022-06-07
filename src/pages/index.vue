<template>
  <div class="grid flex h-screen p-5">
    <div
      v-if="store.getCount > 0"
      v-haptic.success 
      class="justify-end flex flex-row h-14"
      @click="$router.push({ path: '/soiree' })"
    >
      <div class="p-1">
        <img class="m-auto w-8" src="argent.png" />
        <span class="text-xs font-medium">RECHARGER</span>
      </div>
    </div>
    <div v-else class="h-14"></div>
    <div class="justify-center items-center">
      <WelcomeScreen />
    </div>
  </div>
</template>

<script>
import { useCounterStore } from './../store/counter'
import WelcomeScreen from './../components/WelcomeScreen'

export default {
  name: 'IndexPage',
  components: {
    WelcomeScreen,
  },
  data() {
    return {
      store: useCounterStore(),
    }
  },
}
</script>
