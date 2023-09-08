<template>
  <div class="news-detail">
    <div class="container">
      {{ getCerrentNews }}
      <h1 class="title">{{ getCerrentNews?.title }}</h1>
      <div v-html="getCerrentNews?.renderContent"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NewItem",
  methods: {
    ...mapActions(["fetchCurrentNews"]),
  },
  computed: {
    ...mapGetters(["getCerrentNews"]),
  },
  created() {
    this.fetchCurrentNews(this.$route.params.id);
  }
}
</script>

<style lang="sass">
.news-detail
  margin-top: 121px
</style>