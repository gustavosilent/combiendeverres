import { defineStore } from 'pinia'

export const useCounterStore = defineStore('storeCounter', {
  state: () => {
    return { counter: 0 }
  },
  actions: {
    addCount(v) {
      this.counter += v
    },
    emptyCount() {
      this.counter = 0
    }
  },
  getters: {
    getCount: (state) => state.counter,
  },
})