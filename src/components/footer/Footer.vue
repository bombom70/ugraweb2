<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="logos">
          <a 
            v-for="logo in logos"
            :key="logo"
            :href="logo.url"
          >
          <div v-html="logo.icon"></div>
          </a>
      </div>
      <form class="form-footer" @submit.prevent="">
        <input class="form-footer__input" type="text"/>
        <input type="submit"/>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { DOMAIN_URL } from "@/constants";

export default {
  name: "Footer",
  data() {
    return {
        url: DOMAIN_URL,
        logos: [],
    }
  },
  methods: {
      fetchFooterLogos() {
        axios("https://rmc.uwdev.ru/api/footer/logo").then(({data}) => this.logos = data);
      }
  },
  created() {
    this.fetchFooterLogos();
  }
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"
.footer-wrapper
    padding-top: 80px
    background-color: #141C27

.form-footer__input
    display: inline
    height: 65px
    width: 100%
    font-weight: 700
    font-size: 13px
    line-height: 170%
    border-radius: 0
    border: none
    padding: 0 10px

.logos
    display: flex
    gap: 50px
</style>