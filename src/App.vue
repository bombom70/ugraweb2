<template>
  <div class="App">
    <v-header/>
    <main-slider/>
    <news-section/>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import MainSlider from "@/components/main/MainSlider.vue";
import NewsSection from "@/components/main/NewsSection.vue";

export default {
  name: 'App',
  components: {
    MainSlider,
    "v-header": Header,
    "news-section": NewsSection,
  },

}
</script>

<style lang="sass" scoped>
</style>
