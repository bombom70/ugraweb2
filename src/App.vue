<template>
  <div class="App">
    hello
    {{ counter }}
    <button @click="inc">Plus one</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    inc() {
      this.counter++;
    }
  }
}
</script>

<style lang="sass">
.App
  width: 500px
  padding: 32px
  margin: 0 auto
</style>
