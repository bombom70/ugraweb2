<template>
  <div class="header">
    <div class="container">
      <div class="header-wrapper">
        <a href="/" class="header-link">
          <img class="logos" src="~../../assets/img/logo.svg"/>
        </a>
        <v-menu/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/header/Menu.vue";
export default {
  name: "Header",
  components: {
    "v-menu": Menu
  }

}
</script>

<style lang="sass" scoped>
.header
   padding-top: 25px

.header-wrapper
  display: flex
  gap: 80px

.wrapper-menu
  flex: 1 1 auto
</style>