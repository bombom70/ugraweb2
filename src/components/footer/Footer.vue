<template>
  <div class="footer-wrapper">
    <div class="container footer">
      <div class="footer_left">
        <div class="footer__item">
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
            <input class="form-footer__input" type="text" placeholder="Введите фразу для поиска"/>
            <input class="form-footer__submit" type="submit"/>
          </form>
        </div>
        <div class="footer__item">
          <div class="footer__contacts">
            <a
                class="footer__contacts_item"
                v-for="contact in contacts"
                :key="contact.text"
            >
              <div v-html="contact.icon"></div>
              {{contact.text}}
            </a>
            <a :href="guideDate.url" class="btn btn__footer">{{ guideDate.text }}</a>
          </div>
          <div class="footer__soc">
            <a
                class="footer__soc_item"
                v-for="social in socials"
                :key="social.url"
                :href="social.url"
            >
              <div v-html="social.icon"></div>
            </a>
          </div>
        </div>
      </div>
      <div class="footer__right">
        <img src="~@/assets/img/banner.svg"/>
      </div>
    </div>
    <a
      class="scroll-top"
      @click="scrollToTop"
    >
      <img src="~@/assets/img/up-arrow.svg"/>
    </a>
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
      contacts: [],
      guideDate: {},
      socials: [],
    }
  },
  methods: {
    fetchFooterLogos() {
      axios("https://rmc.uwdev.ru/api/footer/logo").then(({data}) => this.logos = data);
    },
    fetchFooterContacts() {
      axios("https://rmc.uwdev.ru/api/footer/contacts").then(({data}) => this.contacts = data);
    },
    fetchFooterGuide() {
      axios("https://rmc.uwdev.ru/api/footer/button").then(({data}) => this.guideDate = data[0]);
    },
    fetchFooterSocial() {
      axios("https://rmc.uwdev.ru/api/footer/social-network").then(({data}) => this.socials = data);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }

  },
  created() {
    this.fetchFooterLogos();
    this.fetchFooterContacts();
    this.fetchFooterGuide();
    this.fetchFooterSocial();
  }
}
</script>

<style lang="sass">
@import ~@/assets/styles/main.sass

.footer-wrapper
  position: relative
  flex: 0 1 auto
  padding-top: 80px
  padding-bottom: 50px
  background-color: #141C27

.scroll-top
  position: absolute
  right: 70px
  bottom: 200px
  cursor: pointer

.form-footer
  position: relative
  display: flex

.footer
  display: flex
  gap: 40px

.footer_left
  display: flex
  flex-direction: column
  gap: 50px

.form-footer__input
  display: inline
  height: 65px
  width: 100%
  color: $color-white
  font-weight: 700
  font-size: 13px
  line-height: 170%
  border-radius: 45px
  border: 3px solid #515A6D
  padding: 0 40px
  background-color: #141C27
  &:focus
    outline: none

.form-footer__submit
  position: absolute
  right: 0
  top: 0
  border-radius: 45px
  padding: 25px 50px
  background-color: #515A6D
  border: none
  color: $color-white
  cursor: pointer

.logos
  display: flex
  gap: 50px

.footer__item
  display: flex
  justify-content: space-between
  gap: 80px

.form-footer
  flex: 1 1 auto

.footer__contacts
  display: flex
  flex: 0 1 500px
  gap: 30px 80px
  flex-wrap: wrap

.footer__contacts_item
  display: flex
  gap: 10px
  color: $color-white

.btn__footer
  padding: 25px 75px 25px 50px
  color: $color-white
  border: 2px solid $color-light-gray
  &:hover
    background-color: $color-light-gray

.footer__soc
  display: flex
  gap: 20px

.footer__soc_item
  display: flex
  justify-content: center
  align-items: center
  padding: 50px
  background-color: #515A6D
  border-radius: 5px

</style>