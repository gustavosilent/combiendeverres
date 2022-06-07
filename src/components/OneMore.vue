<template>
  <div class="text-center select-none">
    <div class="mb-4">
      <div v-longpress="addValue" v-haptic.success @touchstart="touchStart">
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
import { useCounterStore } from './../store/counter'

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
    touchStart(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) return
      const posXStart = touchEvent.changedTouches[0].clientX
      addEventListener(
        'touchend',
        (touchEvent) => this.touchEnd(touchEvent, posXStart),
        { once: true }
      )
    },
    touchEnd(touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) return
      const posXEnd = touchEvent.changedTouches[0].clientX
      if (posXStart < posXEnd) {
        this.units++
      } else if (posXStart > posXEnd) {
        this.units--
      }
      this.advanced = true
    },
    addValue() {
      this.store.addCount(this.units)
      this.units = 0
    },
  },
}
</script>
