<template>
  <div class="text-center select-none">
    <div class="mb-4">
      <div>
        <img
          class="m-auto w-32 md:w-42 lg:w-48 pointer-events-none"
          src="argent.png"
          alt="Argent icon"
        />
        <h1 class="text-xl mt-4">
          Tu dois payer {{ store.getCount }} verre(s)
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from './../store/counter'
export default {
  name: 'LaAddition',

  data() {
    return {
      store: useCounterStore(),
    }
  },
}
</script>
