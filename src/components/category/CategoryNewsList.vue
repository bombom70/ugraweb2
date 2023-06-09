<template>
  <div class="category">
    <CategoryNewsItem
        v-for="categoryItem in getCategory"
        :key="categoryItem.id"
        :name="categoryItem.name"
    />
  </div>
</template>

<script>
import CategoryNewsItem from "@/components/category/CategoryNewsItem.vue"
import {mapGetters} from "vuex";
export default {
  name: "CategoryNewsList",
  components: { CategoryNewsItem },
  computed: {
    ...mapGetters(["getCategory"]),
  },
}
</script>

<style lang="sass">
.category
  display: flex
  flex: 1 1 100%
  flex-wrap: wrap
  gap: 20px
  order: 3

@media (max-width: 1400px)
  .category
    order: 2
</style>