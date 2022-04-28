<template>
  <section class="app-container">
    <app-header v-if="loggedInUser" />
    <router-view />
    <app-footer />
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue"
import appFooter from "./components/app-footer.vue"

export default {
  components: {
    appHeader,
    appFooter,
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
  },
  created() {
    if (!this.loggedInUser) {
      this.$router.replace("/login")
    }
  },
}
</script>
