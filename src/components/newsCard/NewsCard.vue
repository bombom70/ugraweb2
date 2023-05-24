<template>
  <router-link
      class="news__item"
      :to="link"
  >
    <div class="news__info">
      <h3 class="news__title">{{title}}</h3>
      <span class="news__date">{{date}}</span>
      <div class="news__tags-wrapper">
        <a
            v-for="tag in tags"
            :key="tag.url"
            :href="tag.url"
            class="news__tags"
        >
          {{tag.text}}
        </a>
      </div>
    </div>
    <div v-if="imgUrl" class="news-img-wrapper">
      <img class="news__img" :src="imgUrl"/>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    title: String,
    link: String,
    date: String,
    tags: Array,
    imgUrl: String,
  }
}
</script>

<style>

</style>