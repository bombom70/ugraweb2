<template>
  <div>
    Hello, this is news page {{getNews}}
    <button @click="$store.commit('addNews')">add</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "News",
  computed: {
    ...mapGetters([
        'getNews'
    ])
  }
}
</script>

<style scoped>

</style>