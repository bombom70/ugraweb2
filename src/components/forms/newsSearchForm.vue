<template>
  <form @submit.prevent="submit" class="news__form">
    <div class="news-input-wrapper">
      <input class="news__input" type="text" placeholder="Введите фразу для поиска" v-model="inputValue"/>
      <button class="news_search-btn">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5231 16.2837L14.4009 12.1616C14.379 12.1397 14.3533 12.1244 14.3304 12.104C15.1415 10.8736 15.6149 9.40075 15.6149 7.81688C15.6149 3.50834 12.1222 0.015625 7.81375 0.015625C3.50529 0.015625 0.0125732 3.50835 0.0125732 7.8168C0.0125732 12.1252 3.50522 15.618 7.81368 15.618C9.39762 15.618 10.8704 15.1446 12.1008 14.3335C12.1211 14.3563 12.1364 14.382 12.1583 14.4039L16.2806 18.5262C16.8998 19.1453 17.9038 19.1453 18.5231 18.5262C19.1423 17.9069 19.1423 16.903 18.5231 16.2837ZM7.81375 12.9136C4.99881 12.9136 2.71692 10.6317 2.71692 7.8168C2.71692 5.00186 4.99888 2.71997 7.81375 2.71997C10.6285 2.71997 12.9105 5.00193 12.9105 7.8168C12.9105 10.6317 10.6285 12.9136 7.81375 12.9136Z" fill="#524FD5FF"/>
        </svg>
      </button>
    </div>
    <CategoryNewsList/>
    <a class="news__submit">Подписаться на обновления</a>
  </form>
</template>

<script>
import CategoryNewsList from "@/components/category/CategoryNewsList.vue";

export default {
  name: "newsSearchForm",
  components: { CategoryNewsList },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    submit() {
      console.log("HELLO, This is value", this.inputValue);
      this.inputValue = "";
    }
  }
}
</script>

<style lang="sass">
@import "~@/assets/styles/main.sass"

.news__form
  display: flex
  gap: 60px
  align-items: end
  flex-wrap: wrap

.news-input-wrapper
  position: relative
  flex: 1 1 auto
  max-width: 1025px

.news__input
  width: 100%
  padding-bottom: 25px
  border: none
  border-bottom: 3px solid $color-purple
  color: $color-blue
  font-size: 18px
  &:focus
    outline: none
  &::placeholder
    color: $color-gray
    text-transform: uppercase
    font-size: 12px
    line-height: 15px
    letter-spacing: 0.15em

.news__submit
  color: $color-blue
  padding: 25px 33px
  border: 3px solid $color-blue
  background-color: $color-white
  border-radius: 45px
  cursor: pointer
  letter-spacing: 0.15em
  text-transform: uppercase
  font-style: normal
  font-weight: 500
  font-size: 12px
  line-height: 15px

.news_search-btn
  position: absolute
  top: 10%
  right: 0
  width: 19px
  height: 19px
  background: none
  border: none
  cursor: pointer

@media (max-width: 1400px)
  .news__form
    gap: 30px
  .news-input-wrapper
    max-width: initial

  .news__submit
    flex: 1 1 auto
    background-color: $color-blue
    color: $color-white
    text-align: center
    order: 3
</style>