<template>
  <div class="text-center">
    <div class="mb-4">
      <div v-longpress="addValue" @touchstart="touchStart">
        <img class="m-auto w-32 md:w-42 lg:w-48 pointer-events-none" src="cloche.png" />
        <h1 class="text-2xl mt-4 pointer-events-none">{{ units }} verre(s)</h1>
        <span class="text-xs mt-4 text-gray-400 pointer-events-none">{{
          `${
            units === 0
              ? 'Swipe(L/R) pour adjuster'
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
    }
  },

  mounted() {
    // empty store
    this.store.emptyCount()
  },

  methods: {
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
