<template>
  <section class="home-right-panel-container">
    <div class="my-profile-container">
      <profile-list-item :user="activeUser" :description="activeUser.fullname" action="Switch" />
    </div>
    <div class="suggestions-label-container"><span class="suggestions">Suggestions For You</span><span class="see-all">See All</span></div>
    <profile-list-item class="friend-profile-container" v-for="connection in activeUser.suggestions" :key="connection.id" :user="connection" description="Follows you" action="Follow" />
  </section>
</template>

<script>
import profileListItem from "../components/profile-list-item.vue"

export default {
  name: "homeRightPanel",
  components: {
    profileListItem,
  },
  computed: {
    activeUser() {
      // console.log("aaa", this.$store.getters.loggedInUser)
      return this.$store.getters.loggedInUser
    },
  },
}
</script>
