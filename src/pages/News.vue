<template>
  <div class="news">
    <div class="news-wrapper_header">
      <div class="news__search container">
        <h1 class="title">Новости</h1>
        <newsSearchForm />
      </div>
    </div>
    <div class="news-wrapper_content">
      <div class="news-list container">
        <newsCard
            v-for="newsItem in getAllNews"
            :link="newsItem.url"
            :key="newsItem.url"
            :title="newsItem.title"
            :date="newsItem.date"
            :tags="newsItem.tags"
            :imgUrl="url+newsItem.img.url"
        />
      </div>
      <div class="nav"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { DOMAIN_URL } from "@/constants";
import newsCard from "@/components/newsCard/NewsCard.vue"
import newsSearchForm from "@/components/forms/newsSearchForm.vue"

export default {
  name: "News",
  data() {
    return {
      url: DOMAIN_URL
    }
  },
  components: { newsCard, newsSearchForm },
  computed: {
    ...mapGetters(["getAllNews"]),
  },
  methods: {
    ...mapActions(["fetchAllNews"]),
  },
  created() {
    this.fetchAllNews();
  }
}
</script>

<style lang="sass">
.news
  min-height: 100vh

.news-wrapper_header
  padding-top: 120px
  padding-bottom: 50px

.news-wrapper_content
  padding: 70px 0
  background-color: #EFF0F6

@media (max-width: 1400px)
  .news-wrapper_header
    padding-bottom: 30px
</style>