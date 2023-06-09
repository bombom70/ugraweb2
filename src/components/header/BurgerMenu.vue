<template>
  <a class="burger-menu">
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="29" cy="29" r="29" fill="#25CBF1"/>
      <line x1="17.6305" y1="19.5625" x2="40.3696" y2="19.5625" stroke="white" stroke-width="5" stroke-linecap="round"/>
      <line x1="17.6305" y1="28.3906" x2="40.3696" y2="28.3906" stroke="white" stroke-width="5" stroke-linecap="round"/>
      <line x1="17.6305" y1="37.2188" x2="40.3696" y2="37.2188" stroke="white" stroke-width="5" stroke-linecap="round"/>
    </svg>
  </a>
</template>

<script>
export default {
  name: "BurgerMenu"
}
</script>

<style lang="sass">
@import "~@/assets/styles/main.sass"
.burger-menu
  display: none

@media (max-width: 1400px)
  .burger-menu
    display: block
    position: absolute
    right: 0
    cursor: pointer
</style>