<template>
  <div class="news">
    <div class="news-wrapper_header">
      <div class="news__search container">
        <h1>Новости</h1>
        <form class="news__form">
          <input class="news__input" type="text" placeholder="Введите фразу для поиска"/>
          <input class="news__submit" type="submit" value="Подписаться на обновления"/>
        </form>
        <div class="news__filters">
          <a
            class="news__filter"
          >

          </a>
        </div>
      </div>
    </div>
    <div class="news-wrapper_content">
      <div class="news__list container">
        <div
          class="news__item"
        >

        </div>
      </div>
      <div class="nav"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "News",
  computed: {
    ...mapGetters(["getNews"]),
  },
  methods: {
    ...mapActions(["fetchNews"]),
  },
  created() {
    this.fetchNews();
  }
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"

.news-wrapper_content
  background-color: #EFF0F6
</style>