<template>
  <div class="grid flex h-screen p-5">
    <div
      v-if="store.getCount > 0"
      class="justify-end flex flex-row h-14"
      @click="restoreRoute('/soiree')"
    >
      <div class="p-1 relative">
        <img class="m-auto w-8" src="argent.png" />
        <span class="text-xs font-medium">RECHARGER</span>
        <NotificationIcon />
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
import NotificationIcon from './../components/Notification'

export default {
  name: 'IndexPage',
  components: {
    WelcomeScreen,
    NotificationIcon,
  },
  transition: 'default',
  data() {
    return {
      store: useCounterStore(),
    }
  },
  methods: {
    restoreRoute(r) {
      window.navigator?.vibrate?.([50, 200, 50, 200])
      this.$router.push({ path: r })
    },
  },
}
</script>
