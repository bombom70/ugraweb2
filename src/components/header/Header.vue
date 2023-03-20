<template>
  <div class="header">
    <div class="container">
      <div class="header-wrapper">
        <a
            v-for="icon in icons"
            :key="icon"
            :href= icon.url
            class="header-link"
        >
          <div class="logo" v-html="icon.icon"></div>
        </a>
        <v-menu/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/header/Menu.vue";
import axios from "axios";
export default {
  name: "Header",
  components: {
    "v-menu": Menu
  },
  data() {
    return {
      icons: [],
    }
  },
  methods: {
    fetchLogos() {
      axios("https://rmc.uwdev.ru/api/header/logo").then(({ data }) => this.icons = data);
    }
  },
  created() {
    this.fetchLogos();
  }
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"

.header
  position: fixed
  width: 100%
  padding-top: 25px
  background-color: $color-white
  z-index: 100

.header-wrapper
  display: flex
  gap: 80px

.wrapper-menu
  flex: 1 1 auto

.logo
  width: 92px
  height: 96px
</style>