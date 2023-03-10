<template>
  <div class="App">
    <v-header/>
    <main-slider/>
    <news-section/>
    <events-section/>
    <media-section/>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import MainSlider from "@/components/main/MainSlider.vue";
import NewsSection from "@/components/main/NewsSection.vue";
import EventsSection from "@/components/main/EventsSection.vue";
import MediaSection from "./components/main/MediaSection.vue";

export default {
  name: 'App',
  components: {
    MainSlider,
    "v-header": Header,
    "news-section": NewsSection,
    "events-section": EventsSection,
    "media-section": MediaSection,
  },

}
</script>

<style lang="sass" scoped>
</style>
