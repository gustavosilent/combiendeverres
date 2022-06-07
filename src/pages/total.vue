<template>
  <div class="grid flex h-screen">
    <div class="items-start flex flex-row h-14">
      <NuxtLink to="/soiree" class="p-1"><img class="m-auto w-8" src="cloche.png"><span class="text-xs font-medium">SOIRÉE</span></NuxtLink>
    </div>
    <div class="justify-center items-center">
      <transition name="page">
        <la-addition/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoireePage',
  transition: 'page',
}
</script>
