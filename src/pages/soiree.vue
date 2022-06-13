<template>
  <div class="grid flex h-screen p-5 template-rows">
    <div class="justify-between flex flex-row h-14">
      <NuxtLink class="p-1" to="/"
        ><img class="m-auto w-8" src="verre.png" alt="Verre icon" /><span
          class="text-xs font-medium"
          >HOME</span
        ></NuxtLink
      >
      <NuxtLink class="p-1 relative" to="/total"
        ><img class="m-auto w-8" src="argent.png" alt="Argent icon" />
        <span class="text-xs font-medium"
          >PAYER {{ store.getCount }}
          <NotificationIcon v-if="store.getCount > 0" /></span
      ></NuxtLink>
    </div>
    <div class="justify-center items-center">
      <OneMore />
    </div>
  </div>
</template>

<script>
import { useCounterStore } from './../store/counter'
import OneMore from './../components/OneMore'
import NotificationIcon from './../components/Notification'

export default {
  name: 'SoireePage',
  components: {
    OneMore,
    NotificationIcon,
  },
  transition: 'default',
  data() {
    return {
      store: useCounterStore(),
    }
  },
}
</script>
<style>
.template-rows {
  grid-template-rows: 1fr 4fr;
}
</style>
