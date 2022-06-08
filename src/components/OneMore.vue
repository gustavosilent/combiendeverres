<template>
  <div class="text-center select-none">
    <div
      v-longpress="addValue"
      v-touch:swipe="swipeHandler"
      class="mb-4 extra-area"
    >
      <div>
        <img
          class="m-auto w-32 md:w-42 lg:w-48 pointer-events-none"
          src="cloche.png"
        />
        <div class="flex mt-4 justify-center">
          <div class="flex items-center text-xl">
            <h1 class="text-2xl">{{ units }} verre(s)</h1>
            <span
              v-if="!isMobile"
              class="bg-white border border-gray-400 rounded leading-none ml-2 w-6 h-6"
              @click="units--"
              >-</span
            >
            <span
              v-if="!isMobile"
              class="bg-white border border-gray-400 rounded leading-none ml-2 w-6 h-6"
              @click="units++"
              >+</span
            >
          </div>
        </div>
        <span class="text-xs mt-4 text-gray-400">{{
          `${
            units === 0
              ? `${isMobile ? 'Swipe(L/R)' : 'Click'} pour adjuster`
              : 'LongPress(.) pour ajouter'
          }`
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import { useCounterStore } from './../store/counter'

Vue.use(Vue2TouchEvents)
export default {
  name: 'OneMore',

  data() {
    return {
      units: 0,
      store: useCounterStore(),
      isMobile: false,
    }
  },
  mounted() {
    this.checkDevice()
  },
  methods: {
    checkDevice() {
      this.isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
    },
    swipeHandler(e) {
      this.units = e === 'left' ? this.units + 1 : this.units - 1
      window.navigator?.vibrate?.([10, 10])
      this.advanced = true
    },
    addValue() {
      window.navigator?.vibrate?.([50, 200, 50, 200])
      this.store.addCount(this.units)
      this.units = 0
    },
  },
}
</script>
<style scoped>
.extra-area {
  padding: 6rem;
}
</style>
