<template>
  <div class="grid flex h-screen p-5">
    <div class="flex flex-row h-14">
      <NuxtLink to="/soiree" class="p-1"
        ><img class="m-auto w-8" src="cloche.png" alt="Cloche icon" /><span
          class="text-xs font-medium"
          >SOIRÉE</span
        ></NuxtLink
      >
    </div>
    <div class="justify-center items-center">
      <LaAddition />
    </div>
  </div>
</template>

<script>
import LaAddition from './../components/LaAddition'

export default {
  name: 'SoireePage',
  components: {
    LaAddition,
  },
  transition: 'default',
}
</script>
