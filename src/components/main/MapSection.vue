<template>
  <div class="map-wrapper">
    <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/57/khanty-mansiysk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ханты‑Мансийск</a><a href="https://yandex.ru/maps/57/khanty-mansiysk/?ll=69.018902%2C61.003180&utm_medium=mapframe&utm_source=maps&z=13" style="color:#eee;font-size:12px;position:absolute;top:14px;">Ханты‑Мансийск — ЯндексКарты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=69.018902%2C61.003180&z=13" width="100%" height="762" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
  </div>
</template>

<script>
export default {
  name: "MapSection"
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"

.map-wrapper
  width: 100%
  height: 762px
</style>