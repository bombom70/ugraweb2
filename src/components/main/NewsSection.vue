<template>
  <div class="news-wrapper">
    <div class="container">
      <div class="news">
        <div class="header-section">
          <h2 class="title">Новости</h2>
          <router-link class="btn btn_news btn_sections" to="/news">все новости</router-link>
        </div>
        <div class="news__content">
          <div class="news-list">
            <a
                class="news__item"
                v-for="(newsItem, i) in getNews"
                :href="newsItem.url"
                :key="newsItem.url"
                :class="small_"
            >
              <div class="news__info">
                <h3 class="news__title">{{newsItem.title}}</h3>
                <span class="news__date">{{newsItem.date}}</span>
                <div v-if="true" class="news__tags-wrapper">
                  <a
                      v-for="tag in newsItem.tags"
                      :key="tag.url"
                      :href="tag.url"
                      class="news__tags"
                  >
                    {{tag.text}}
                  </a>
                </div>
              </div>
              <div v-if="i < 3" class="news-img-wrapper">
                <img class="news__img" :src="url+ newsItem.img.url"/>
              </div>
            </a>
            <div class="news__item news-subscribe-block">
              <div class="subscribe__info">
                <h3 class="news__title">Подпишись, чтобы каждую неделю получать подборку свежих новостей!</h3>
                <form class="news-subscribe-form">
                  <img class="news-subscribe-img" src="~@/assets/img/letter.svg" />
                  <input class="news-subscribe-form__input" placeholder="info@mail.ru" type="text" name="email">
                  <div class="wrapper-submit-btn">
                    <input class="news-subscribe-form__submit btn" type="submit" value="подписаться">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { DOMAIN_URL } from "@/constants";


export default {
  name: "NewsSection",
  data() {
    return {
        url: DOMAIN_URL
    }
  },
  computed: {
    ...mapGetters([
      'getNews',
    ])
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

.news-wrapper
  background-color: #EFF0F6

.news
  padding: 100px 0

.news-title
  font-size: $h2-size
  font-weight: $h2-font-weight
  line-height: $h2-line-height

.btn_news
  background-color: $color-gray
  color: $color-white
  &:hover
    background-color: $color-light-gray

.news-list
  display: flex
  gap: 30px
  flex-wrap: wrap
  margin-bottom: 30px

.news__item
  display: flex
  flex-direction: column
  justify-content: space-between
  max-width: 446px
  max-height: 510px
  background-color: $color-white
  box-shadow: 0px 0px 25px rgba(113, 110, 219, 0.15)
  border-radius: 5px
  cursor: pointer
  .news__info
    position: relative
    padding: 40px 40px 20px 40px
    display: flex
    flex-direction: column
    gap: 10px
    &:before
      content: ""
      position: absolute
      width: 5px
      height: 45px
      background-color: $color-purple
      left: 0
      top: 50px
  .news__title
    flex: 1 1 100px
    font-weight: $h3-font-weight
    font-size: $h3-size
    line-height: $h3-line-height
  .news__date
    color: $color-blue
    font-weight: 700
    font-size: 13px
  .news__tags
    margin-top: 10px
    color: $color-light-gray
    line-height: 170%
    font-size: 13px
  .news-img-wrapper
    height: 250px
    padding-left: 40px
  .news__img
    width: 100%
    height: 100%
    border-radius: 0 0 5px 0

.news-subscribe-block
  position: relative
  background-color: $color-purple
  overflow: hidden
  cursor: auto
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    background-image: url("~@/assets/img/kanat.svg")
    width: 13px
    height: 100%
  &:after
    content: ""
    position: absolute
    top: 0
    right: 0
    background-image: url("~@/assets/img/circles.svg")
    background-size: cover
    background-repeat: no-repeat
    width: 27%
    height: 100%
  .news__title
    color: $color-white
  .subscribe__info
    position: relative
    padding: 40px
    z-index: 2
  .news-subscribe-form
    position: relative
    display: flex
    align-content: center
    justify-content: space-between
    width: 100%
    .news-subscribe-form__input
      display: inline
      height: 65px
      width: 100%
      font-weight: 700
      font-size: 13px
      line-height: 170%
      border-radius: 0
      border: none
      padding: 0 10px
      &::placeholder
        color: $color-light-gray
      &:focus
        outline: none
    .news-subscribe-form__submit
      color: $color-white
      width: 200px
      background-color: #F6A308
    .wrapper-submit-btn
      flex: 1 1 200px
      background-color: $color-white
      border-radius: 0 45px 45px 0
  .news-subscribe-img
    background-color: $color-white
    border-radius: 45px 0 0 45px
    padding: 0 10px 0 20px


</style>