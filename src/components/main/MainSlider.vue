<template>
  <div class="slider-wrapper">
    <div class="container">
      <div class="slider">
        <div class="slider__item slider-info">
          <h1 class="title title_slider"><span class="title_slider__purple">Кванториум</span> – это школа мышления</h1>
          <p class="text-subtitle">Воспитываем поколение детей, способных обеспечить технологический прорыв!</p>
          <a href="#" class="btn btn_slider">
            подробнее
          </a>
          <div class="slider__item slider_img">
            <img src="~@/assets/img/slider.svg"/>
          </div>
        </div>
        <div class="nav-wrapper">
          <div class="slider-nav">
            <div class="slider-nav__item slider-nav__item_current">
              <span class="slider-nav__progress progress"></span>
              <span class="slider-nav__position">01.</span>
              <span class="slider-nav__title">Кванториум</span>
            </div>
            <div class="slider-nav__item">
              <span class="slider-nav__progress progress"></span>
              <span class="slider-nav__position">02.</span>
              <span class="slider-nav__title">Мобильный кванториум</span>
            </div>
            <div class="slider-nav__item">
              <span class="slider-nav__progress progress"></span>
              <span class="slider-nav__position">03.</span>
              <span class="slider-nav__title">Региональный центр одаренных детей</span>
            </div>
          </div>
          <div class="slider-switcher">
            <button class="slider-switcher__item slider-switcher__item_prev"></button>
            <span class="slider-switcher__count">01 / 04</span>
            <button class="slider-switcher__item slider-switcher__item_next"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MainSlider",
  computed: {
    ...mapGetters(["getSliders"]),
  },
  methods: {
    ...mapActions(["fetchSliders"]),
  },
  created() {
    this.fetchSliders();
  }
}
</script>

<style lang="sass">
@import "~@/assets/styles/main.sass"

.slider
  position: relative
  padding-bottom: 270px

.nav-wrapper
  position: relative
  max-width: 800px
  margin-top: 105px

.slider-info
  display: flex
  flex-direction: column
  max-width: 855px
  gap: 60px
  padding-top: 240px

.title_slider
  font-weight: 900
  font-size: 80px
  line-height: 98px
  color: #0A0061

.title_slider__purple
  font-weight: 900
  font-size: 80px
  line-height: 98px
  color: $color-purple

.text-subtitle
  font-weight: 300
  font-size: 25px

.btn_slider
  width: 200px
  color: $color-purple
  line-height: 15px
  border: 3px solid $color-purple !important
  &:before
    background-image: url("~@/assets/img/arrow.svg")
  &:hover
    color: white
    background-color: $color-purple
    &:before
      background-image: url("~@/assets/img/arrow-white.svg")

.slider-nav
  display: flex
  gap: 50px

.slider-switcher__count
  color: $color-gray

.slider-nav__item
  display: flex
  flex-direction: column
  gap: 10px
  flex: 0 0 180px
  cursor: pointer
  .slider-nav__position,
  .slider-nav__title
    font-weight: 700
    font-size: 15px
    line-height: 170%
    color: $color-gray
  .slider-nav__progress
    background-color: $color-light-gray

.slider-nav__item_current
  .slider-nav__position,
  .slider-nav__title
    color: #0A0061
  .slider-nav__progress
    background-color: $color-purple

.slider-switcher
  position: absolute
  top: -10px
  right: 0
  display: flex
  align-items: center
  gap: 10px

.slider-switcher__item
  width: 14px
  height: 24px
  border: none
  background-color: white
  background-size: cover
  cursor: pointer

.slider-switcher__item_prev
  background-image: url("~@/assets/img/prev-gray.svg")

.slider-switcher__item_next
  background-image: url("~@/assets/img/next-gray.svg")

.slider_img
  position: absolute
  top: 121px
  left: auto
  right: -251px
  width: 796px
  height: 1177px
</style>