<template>
    <div class="text-center">
        <div class="mb-4">
            <div>
                <img class="m-auto w-32 md:w-42 lg:w-48" src="argent.png" />
                <h1 class="text-xxl mt-4">Vous doit payer {{store.getCount}} verre(s)</h1>
            </div>
        </div>
    </div>
</template>

<script>
import { useCounterStore } from './../store/counter'
export default {
    name: "LaAddition",
    transition: 'page',
    data() {
        return {
            store: useCounterStore()
        }
    },
}
</script>