<template>
  <div class="events-wrapper">
    <div class="container">
      <div class="header-section">
        <h2 class="title events-title">События</h2>
        <div class="btns-wrapper">
          <a href="#" class="btn btn__events_archive">архив событий</a>
          <a href="#" class="btn btn__events_all-events">все события</a>
        </div>
      </div>
      <div class="content-section">
        <div class="carousel">
          <a href="#" class="carousel__item bg_orange">
            <h3 class="title carousel__title">25</h3>
            <span class="carousel__date">сен — 26 окт</span>
            <p class="carousel__text">VR-тренажер, фэнтези-настолка и карточная игра: Кванторианцы Югры представили проекты на...</p>
            <div class="carousel__progress-view">
              <span class="place">онлайн</span>
              <span class="carousel_progress progress"></span>
            </div>
          </a>
          <a href="#" class="carousel__item bg_blue">
            <h3 class="title carousel__title">02</h3>
            <span class="carousel__date">июля</span>
            <p class="carousel__text">VR-тренажер, фэнтези-настолка и карточная игра</p>
            <div class="carousel__progress-view">
              <span class="place">семинар</span>
              <span class="carousel_progress progress"></span>
            </div>
          </a>
          <a href="#" class="carousel__item bg_purple">
            <h3 class="title carousel__title">02</h3>
            <span class="carousel__date">июля</span>
            <p class="carousel__text">VR-тренажер, фэнтези-настолка и карточная игра</p>
            <div class="carousel__progress-view">
              <span class="place">офлайн</span>
              <span class="carousel_progress progress"></span>
            </div>
          </a>
          <a href="#" class="carousel__item bg_purple">
            <h3 class="title carousel__title">02</h3>
            <span class="carousel__date">июля</span>
            <p class="carousel__text">VR-тренажер, фэнтези-настолка и карточная игра</p>
            <div class="carousel__progress-view">
              <span class="place">офлайн</span>
              <span class="carousel_progress progress"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsSection"
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"

.events-wrapper
  padding: 100px 0
  background-color: $events-bg

.events-title
  color: $color-white

.btns-wrapper
  display: flex
  gap: 30px
  .btn__events_archive
    padding: 25px 75px 25px 55px
    color: $color-white
    border: 2px solid #EFF0F6
    &:hover
      background-color: #EFF0F6
      color: $events-bg
      &:before
        background-image: url("~@/assets/img/arrow-black.svg")
  .btn__events_all-events
    padding: 25px 75px 25px 55px
    background-color: #EFF0F6
    border: 2px solid #EFF0F6
    &:hover
      background-color: $events-bg
      color: #EFF0F6
      border: 2px solid #EFF0F6
      &:before
        background-image: url("~@/assets/img/arrow-white.svg")
    &:before
      background-image: url("~@/assets/img/arrow-black.svg")

.carousel
  display: flex
  gap: 30px
  .carousel__item
    flex: 1 0 447px
    max-width: 447px
    height: 447px
    padding: 25px 50px 50px 50px
    border-radius: 5px
    box-sizing: border-box
  .bg_orange
    background-color: #FDC000
  .bg_purple
    background-color: $color-purple
  .bg_blue
    background-color: deepskyblue
  .carousel__title
    font-size: 100px
    color: $color-white
  .carousel__date
    color: $color-white
    font-weight: 300
    font-size: 50px
    line-height: 61px
  .carousel__text
    font-weight: $h3-font-weight
    font-size: 20px
    line-height: $h3-line-height

</style>