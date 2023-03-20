<template>
  <div>
    <v-header/>
    <main-slider/>
    <news-section/>
    <events-section/>
    <media-section/>
    <map-section/>
  </div>
</template>

<script>
import MainSlider from "@/components/main/MainSlider.vue";
import Header from "@/components/header/Header.vue";
import NewsSection from "@/components/main/NewsSection.vue";
import EventsSection from "@/components/main/EventsSection.vue";
import MediaSection from "@/components/main/MediaSection.vue";
import MapSection from "@/components/main/MapSection.vue";
export default {
  name: "Main",
  components: {
    MainSlider,
    "v-header": Header,
    "news-section": NewsSection,
    "events-section": EventsSection,
    "media-section": MediaSection,
    "map-section": MapSection,
  },
}
</script>

<style scoped>

</style>