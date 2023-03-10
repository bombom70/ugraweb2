<template>
  <div class="menu-wrapper">
    <div class="menu">
      <div
          class="menu-item"
          v-for="menu in menuList"
          :key="menu.content.ID"
      >
        <a
            @click="showMenu"
            class="menu-link"
        >{{menu.text}}</a>
        <div class="sub-menu" :class="{ active: isShowMenu }">
          <div class="container">
            <div class="sub-menu-item" v-for="menuDop in menu.item" :key="menuDop.url">
              {{menuDop.text}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isShowMenu" class="dop-menu">
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
import axios from "axios";
export default {
  name: "Menu",
  data() {
    return {
      menuList: [],
      isShowMenu: false,
    }
  },
  methods: {
    fetchMenuData() {
      axios("https://rmc.uwdev.ru/api/header/menu").then(({data}) => this.menuList = data)
    },
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
    }
  },
  created() {
    this.fetchMenuData();
    setTimeout(() => console.log(this.menuList), 2000);
  }
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"

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

.sub-menu
  display: none
  position: fixed
  width: 100vw
  height: 100%
  background-color: $color-white
  left: 0
  top: 121px
  right: 0
  bottom: 0
  z-index: 10

.active
  display: block
</style>