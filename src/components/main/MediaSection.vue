<template>
  <div class="media-wrapper">
    <div class="container">
      <div class="header-section">
        <h2 class="title media-title">Медиа</h2>
        <a href="#" class="btn btn__events_all-media">все медиа</a>
      </div>
      <div class="media-content">
        <div class="media-item">
          <h3 class="content__title">new<span class="line"></span></h3>
          <div class="media__icons"></div>
          <p class="media-text">Форум-фестиваль, Нижневартовск</p>
          <img class="preview_photo"/>
        </div>
        <div class="media-content"></div>
        <div class="media-content"></div>
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
      axios("https://rmc.uwdev.ru/api/main/media")
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
  background-color: $color-light-gray
  &:hover
    background-color: $color-gray
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
</style>