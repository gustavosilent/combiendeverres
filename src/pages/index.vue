<template>
  <div class="grid flex h-screen justify-center items-center">
    <WelcomeScreen />
  </div>
</template>

<script>
import WelcomeScreen from './../components/WelcomeScreen'

export default {
  name: 'IndexPage',
  components: {
    WelcomeScreen,
  },
}
</script>
