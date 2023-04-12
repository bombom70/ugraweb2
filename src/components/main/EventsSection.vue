<template>
  <div class="events-wrapper">
    {{getEvents}}
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
          <a class="switch switch_prev" @click="carouselPrev"></a>
          <div class="carousel__content-line">
            <div class="carousel__line">
              <a
                  v-for="(eventItem, i) in [...getEvents, ...getEvents]"
                  :key="eventItem.url"
                  :href="eventItem.url"
                  class="carousel__item bg_orange"
                  :class="{
                  bg_orange: i === 0,
                  bg_blue: i === 1,
                  bg_purple: i > 1,
                  hideSlide: i > 2
                }"
              >
                <div class="carousel_decor">
                  <h3 class="title carousel__title">
                    {{new Date(Date(eventItem.dateFirst)).getDate()}}
                    <span class="carousel__date">{{new Date(Date(eventItem.dateFirst)).toLocaleString('en-us',{month:'short'})}} — {{new Date(Date(eventItem.dateLast)).getDate()}} {{new Date(Date(eventItem.dateLast)).toLocaleString('en-us',{month:'short'})}}</span>
                  </h3>
                  <div class="carousel__content">
                    <p class="carousel__text">{{ eventItem.title }}</p>
                    <div class="carousel__progress-view">
                      <span class="place">{{ eventItem.type }}</span>
                      <span class="carousel_progress progress"></span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <a class="switch switch_next" @click="carouselNext"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "EventsSection",
  data() {
    return {
      sliderState: {
        position: 0,
        currentItem: 0,
      }
    }
  },
  computed: {
    ...mapGetters([
      "getEvents",
    ]),

  },
  methods: {
    ...mapActions(["fetchEvents"]),
    carouselPrev() {
      const line = document.querySelector(".carousel__line");
      this.sliderState.position += 467;
      this.sliderState.currentItem -= 1;

      line.style.transform = `translate(${this.sliderState.position}px)`;
      line.style.transitionDuration = "0.5s";
    },
    carouselNext() {
      const line = document.querySelector(".carousel__line");
      this.sliderState.position -= 467;
      this.sliderState.currentItem += 1;

      line.style.transform = `translate(${this.sliderState.position}px)`;
      line.style.transitionDuration = "0.5s";
    },
  },
  created() {
    this.fetchEvents()
        .finally();
  }
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

.carousel_decor
  text-align: start

.carousel
  position: relative

.carousel__line
  position: relative
  display: flex
  justify-content: space-between
  gap: 20px
  .carousel__item
    position: relative
    flex: 1 0 447px
    max-width: 447px
    height: 447px
    padding: 25px 50px 50px 50px
    border-radius: 5px
    box-sizing: border-box
  .bg_orange
    background-color: #FDC000
    &:before
      content: ""
      position: absolute
      top: -15px
      left: 80px
      width: 19px
      height: 15px
      border-radius: 5px 5px 0 0
      background-color: #FDC000
    &:after
      content: ""
      position: absolute
      top: -15px
      right: 80px
      width: 19px
      height: 15px
      border-radius: 5px 5px 0 0
      background-color: #FDC000
    .carousel_decor
      &:after
        background-image: url("~@/assets/img/event-decor.svg")
  .bg_purple
    background-color: $color-purple
    .carousel__text
      color: $color-white
    &:before
      content: ""
      position: absolute
      top: -15px
      left: 80px
      width: 19px
      height: 15px
      border-radius: 5px 5px 0 0
      background-color: $color-purple
    &:after
      content: ""
      position: absolute
      top: -15px
      right: 80px
      width: 19px
      height: 15px
      border-radius: 5px 5px 0 0
      background-color: $color-purple
    .carousel_decor
      &:after
        background-image: url("~@/assets/img/event-decor-purple.svg")
  .bg_blue
    background-color: deepskyblue
    &:before
      content: ""
      position: absolute
      top: -15px
      left: 80px
      width: 19px
      height: 15px
      border-radius: 5px 5px 0 0
      background-color: deepskyblue
    &:after
      content: ""
      position: absolute
      top: -15px
      right: 80px
      width: 19px
      height: 15px
      border-radius: 5px 5px 0 0
      background-color: deepskyblue
    .carousel_decor
      &:after
        background-image: url("~@/assets/img/event-decor-blue.svg")
  .carousel__title
    position: relative
    font-size: 100px
    color: $color-white
    z-index: 2
    &:after
      content: ""
      position: absolute
      width: 20px
      height: 24px
      right: 0
      top: 25%
      background-image: url("~@/assets/img/arrow-white.svg")
      background-size: cover
    .carousel__date
      display: block
      color: $color-white
      font-weight: 300
      font-size: 50px
      line-height: 61px
  .carousel_decor
    &:after
      content: ""
      position: absolute
      top: 0
      right: 0
      height: 299px
      width: 119px
      background-repeat: no-repeat
  .carousel__content
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 230px
  .carousel__text
    margin-top: 10px
    font-weight: $h3-font-weight
    font-size: 20px
    line-height: $h3-line-height
    z-index: 2
  .carousel__progress-view
    display: flex
    flex-direction: column
    gap: 13px
    z-index: 2
    .place
      color: $color-white
      font-weight: 700
    .carousel_progress
      background-color: $color-white

.switch
  display: block
  position: absolute
  top: 43%
  width: 40px
  height: 40px
  background-image: url("@/assets/img/arrow-events.svg")
  background-repeat: no-repeat
  background-position: center center
  background-size: contain
  cursor: pointer
  z-index: 10

.switch_prev
  left: -80px

.switch_next
  right: -80px
  transform: rotate(180deg)

.hideSlide
  opacity: 0.5
</style>