<template>
  <a class="category__item" @click="getContentTotag">
    {{ name }}
  </a>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "CategoryNewsItem",
  props: {
    name: String
  },
  methods: {
    ...mapActions(["fetchNewsToTag"]),
    getContentTotag() {
      this.fetchNewsToTag(this.name)
    }
  },
}
</script>

<style lang="sass">
@import "~@/assets/styles/main.sass"

.category__item
  padding: 10px 20px
  color: $color-white
  background-color: $color-blue
  border-radius: 20px
  font-weight: 700
  font-size: 13px
  cursor: pointer
</style>