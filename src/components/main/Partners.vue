<template>
  <div class="partners-wrapper">
    <div class="container">
        <div class="partners">
            <div
            class="partners__item"
            v-for="partner in getPartners"
            :key="partner.url"
            >
                <a class="partners__link" :href="partner.url">
                    <img class="partners__img" :src="url + partner.img" />
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { DOMAIN_URL } from "@/constants";

export default {
  name: "Partners",
  data() {
    return {
        url: DOMAIN_URL
    }
  },
  computed: {
    ...mapGetters([
      "getPartners",
    ]),
  },
  methods: {
    ...mapActions(["fetchPartners"]),
  },
  created() {
    this.fetchPartners();
  }
}
</script>

<style lang="sass" scoped>
@import "~@/assets/main.sass"

.partners-wrapper
    padding: 100px 0 200px 0

.partners
    display: flex
    gap: 100px

.partners__item
    flex: 1 1 200px
    height: 200px

.partners__img
    height: 200px
</style>