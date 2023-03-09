<template>
  <div class="menu-wrapper">
    <ul class="menu">
      <li class="menu-item">
        <a class="menu-link">о центре</a>
      </li>
      <li class="menu-item">
        <a class="menu-link">образовательные программы</a>
      </li>
      <li class="menu-item">
        <a class="menu-link">новости</a>
      </li>
      <li class="menu-item">
        <a class="menu-link">мероприятия и проекты</a>
      </li>
      <li class="menu-item">
        <a class="menu-link">Летний отдых</a>
      </li>
      <li class="menu-item">
        <a class="menu-link">Контакты</a>
      </li>
    </ul>
    <div class="dop-menu">
      <a href="/" class="vds">
        <img class="logos" src="~../../assets/img/search.svg"/>
      </a>
      <a href="/" class="search">
        <img class="logos" src="~../../assets/img/vds.svg"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style lang="sass" scoped>
.menu
  display: flex
  gap: 52px
  margin: 0 0 32px 0
  padding: 0

.menu-link
  color: #141C27
  line-height: 17px
  text-transform: uppercase
  cursor: pointer
  &:hover
    padding-bottom: 5px
    border-bottom: 3px solid #524fd5

.dop-menu
  display: flex
  gap: 40px
  justify-content: flex-end

</style>