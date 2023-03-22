<template>
  <div class="media-wrapper">
    <div class="container">
      <div class="header-section">
        <h2 class="title media-title">Медиа</h2>
        <a href="#" class="btn btn__events_all-media">все медиа</a>
      </div>
      <div class="media-content">
        <div
            class="media-item"
            v-for="(event, idx) in events"
            :key="idx"
        >
          <h3 class="content__title" :class="{content__title_active: idx === 0}">new<span :class="{line_active: idx === 0}" class="line"></span></h3>
          <div class="media-counters">
            <div class="media-counters__item">
              <img src="~@/assets/img/mail.svg"/>
              {{event.countImage}}
            </div>
            <div class="media-counters__item">
              <img src="~@/assets/img/camera.svg"/>
              {{event.countVideo}}
            </div>
          </div>
          <p class="media-text">{{ event.title }}</p>
          <img :src="event.previewImg" class="preview_photo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MediaSection",
  data() {
    return {
      events: []
    }
  },
  methods: {
    fetchMediaData() {
      axios("https://rmc.uwdev.ru/api/main/media").then(({data}) => this.events = data)
          .finally(() => {
            this.events.map((e) => e.previewImg = `https://rmc.uwdev.ru/${e.previewImg}`);
          });
    }
  },
  created() {
    this.fetchMediaData();
  }
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"
.media-wrapper
  padding: 100px 0
  background-color: #141C27

.btn__events_all-media
  padding: 25px 78px 25px 50px
  background-color: #EFF0F6
  &:hover
    background-color: $color-light-gray
  &:before
    background-image: url("~@/assets/img/arrow-black.svg")

.media-title
  color: $color-white

.media-content
  display: flex
  gap: 30px
  .media-item
    max-width: 447px
    height: 534px
    color: $color-white

.media-counters
  display: flex
  gap: 20px
  margin: 30px 0px

.media-counters__item
  display: flex
  flex-display: center
  align-items: center
  gap: 10px
  color: $color-gray

.preview_photo
  max-width: 447px
  border-radius: 5px

.media-text
  color: $color-white
  margin-bottom: 69px

.content__title
  position: relative
  font-size: 27px
  font-weight: 900

.content__title_active
  color: $color-yellow
  font-size: 27px
  font-weight: 900
  line-height: 33px
  text-transform: uppercase

.line
  position: absolute
  width: 100%
  height: 3px
  background-color: $color-purple
  bottom: 4px
  left: 0

.line_active
  background-color: $color-yellow

</style>