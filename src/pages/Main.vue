<template>
  <div class="container-wrapper">
    <main-slider/>
    <news-section/>
    <events-section/>
    <media-section/>
    <map-section/>
    <v-partners/>
  </div>
</template>

<script>
import MainSlider from "@/components/main/MainSlider.vue";
import NewsSection from "@/components/main/NewsSection.vue";
import EventsSection from "@/components/main/EventsSection.vue";
import MediaSection from "@/components/main/MediaSection.vue";
import MapSection from "@/components/main/MapSection.vue";
import PartnersVue from '../components/main/Partners.vue';

export default {
  name: "Main",
  components: {
    MainSlider,
    "news-section": NewsSection,
    "events-section": EventsSection,
    "media-section": MediaSection,
    "map-section": MapSection,
    "v-partners": PartnersVue,
  },
}
</script>

<style lang="sass" scoped>

.container-wrapper
  overflow: hidden

</style>