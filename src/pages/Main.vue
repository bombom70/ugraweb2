<template>
  <div class="container-wrapper">
    <v-header/>
    <main-slider/>
    <news-section/>
    <events-section/>
    <media-section/>
    <map-section/>
    <v-partners/>
    <v-footer/>
  </div>
</template>

<script>
import MainSlider from "@/components/main/MainSlider.vue";
import Header from "@/components/header/Header.vue";
import NewsSection from "@/components/main/NewsSection.vue";
import EventsSection from "@/components/main/EventsSection.vue";
import MediaSection from "@/components/main/MediaSection.vue";
import MapSection from "@/components/main/MapSection.vue";
import Footer from "@/components/footer/Footer.vue";
import PartnersVue from '../components/main/Partners.vue';

export default {
  name: "Main",
  components: {
    MainSlider,
    "v-header": Header,
    "news-section": NewsSection,
    "events-section": EventsSection,
    "media-section": MediaSection,
    "map-section": MapSection,
    "v-partners": PartnersVue,
    "v-footer": Footer
  },
}
</script>

<style lang="sass" scoped>

.container-wrapper
  overflow: hidden

</style>