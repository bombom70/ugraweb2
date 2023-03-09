<template>
  <div class="news-wrapper">
    <div class="container">
      <div class="news">
        <div class="news__header">
          <h2 class="news-title">Новости</h2>
          <button class="btn btn_news btn_sections">все новости</button>
        </div>
        <div class="news__content">
          <div class="large-news">
            <div class="large-news__item">
              <div class="large-news__info">
                <h3 class="large-news__title">VR-тренажер, фэнтези-настолка и карточная игра: Кванторианцы Югры представили проекты на фестивале «VR Fest Ugra»</h3>
                <span class="large-news__date">04 мая 2022</span>
                <p class="large-news__tags">#Радужный #VRтренажер #VRFestUg #Кванториум #Радужный #VRтренажер #VRFestUg</p>
              </div>
              <div class="news-img-wrapper">
                <img class="large-news__img" src="~@/assets/img/news1.png"/>
              </div>
            </div>
            <div class="large-news__item">
              <div class="large-news__info">
                <h3 class="large-news__title">VR-тренажер, фэнтези-настолка и карточная игра: Кванторианцы Югры представили проекты на фестивале «VR Fest Ugra»</h3>
                <span class="large-news__date">04 мая 2022</span>
                <p class="large-news__tags">#Радужный #VRтренажер #VRFestUg #Кванториум #Радужный #VRтренажер #VRFestUg</p>
              </div>
              <div class="news-img-wrapper">
                <img class="large-news__img" src="~@/assets/img/news1.png"/>
              </div>
            </div>
            <div class="large-news__item">
              <div class="large-news__info">
                <h3 class="large-news__title">VR-тренажер, фэнтези-настолка и карточная игра: Кванторианцы Югры представили проекты на фестивале «VR Fest Ugra»</h3>
                <span class="large-news__date">04 мая 2022</span>
                <p class="large-news__tags">#Радужный #VRтренажер #VRFestUg #Кванториум #Радужный #VRтренажер #VRFestUg</p>
              </div>
              <div class="news-img-wrapper">
                <img class="large-news__img" src="~@/assets/img/news1.png"/>
              </div>
            </div>
          </div>
          <div class="small-news"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsSection"
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"

.news-wrapper
  background-color: #EFF0F6

.news__header
  display: flex
  justify-content: space-between
  align-items: center

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

.large-news
  display: flex
  gap: 30px

.large-news__item
  .large-news__info
    padding: 40px
  .large-news__title
    font-weight: $h3-font-weight
    font-size: $h3-size
    line-height: $h3-line-height

.large-news__date
  color: $color-blue
  font-weight: 700
  font-size: 13px
  line-height: 170%

.large-news__tags
  color: $color-light-gray
</style>