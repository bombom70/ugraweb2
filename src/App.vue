<template>
  <div class="App">
    <v-header/>
    <router-view></router-view>
    <v-footer/>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  name: 'App',
  components: {
    "v-header": Header,
    "v-footer": Footer
  },
}
</script>

<style lang="sass">
@import "~@/assets/styles/main.sass"

.App
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
