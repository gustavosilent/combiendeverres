<template>
  <div class="text-center select-none h-full">
    <div
      v-longpress="addValue"
      v-touch:swipe="quandityHandler"
      class="flex flex-col h-full justify-center mb-4"
    >
      <div class="flex space-between">
        <img
          class="m-auto w-8 md:w-12 lg:w-18"
          :class="{ 'opacity-25': isZero }"
          src="arrow-l.png"
          alt="Arrow left icon"
          @click="quandityHandler('remove')"
        />
        <img
          class="m-auto w-32 md:w-42 lg:w-48 pointer-events-none"
          src="cloche.png"
          alt="Cloche icon"
        />
        <img
          class="m-auto w-8 md:w-12 lg:w-18"
          src="arrow-r.png"
          alt="Arrow right icon"
          @click="quandityHandler('add')"
        />
      </div>
      <div class="flex mt-4 justify-center">
        <div class="flex items-center text-xl">
          <h1 class="text-2xl">{{ units }} verre(s)</h1>
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
  computed: {
    isZero() {
      return this.store.getCount + this.units === 0
    },
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
    quandityHandler(e) {
      const add = ['right', 'top', 'add']
      const remove = ['left', 'botton', 'remove']
      if (remove.includes(e) && this.isZero) return
      this.units = add.includes(e) ? this.units + 1 : this.units - 1
      window.navigator?.vibrate?.([10, 10])
      this.advanced = true
    },
    addValue() {
      window.navigator?.vibrate?.([50, 200, 50, 200])
      this.store.addCount(this.units)
      localStorage.session = this.store.getCount
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
