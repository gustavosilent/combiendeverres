<template>
  <div class="grid flex h-screen p-5">
    <div class="justify-between flex flex-row h-14">
      <NuxtLink class="p-1" to="/"
        ><img class="m-auto w-8" src="verre.png" /><span
          class="text-xs font-medium"
          >HOME</span
        ></NuxtLink
      >
      <NuxtLink class="p-1" to="/total"
        ><img class="m-auto w-8" src="argent.png" /><span
          class="text-xs font-medium"
          >PAYER {{ store.getCount }}</span
        ></NuxtLink
      >
    </div>
    <div class="justify-center items-center">
      <OneMore />
    </div>
  </div>
</template>

<script>
import { useCounterStore } from './../store/counter'
import OneMore from './../components/OneMore'

export default {
  name: 'SoireePage',

  components: {
    OneMore,
  },

  data() {
    return {
      store: useCounterStore(),
    }
  },
}
</script>
