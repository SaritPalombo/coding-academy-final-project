<template>
  <section class="base-view-container home-container">
    <div class="left-home-container">
      <div class="home-stories-container">
        <story-profile v-for="story in activeUser.stories" :key="story.id" :story="story" />
      </div>
      <div class="posts-container">
        <post class="post-section" v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
    <div class="right-home-container">
      <home-right-panel />
    </div>
  </section>
</template>

<script>
import post from "../components/post/post.vue"
import storyProfile from "../components/story-profile.vue"
import homeRightPanel from "../components/home-right-panel.vue"

export default {
  components: {
    post,
    storyProfile,
    homeRightPanel,
  },
  computed: {
    activeUser() {
      return this.$store.getters.loggedInUser
    },
    posts() {
      return this.$store.getters.posts
    },
  },
}
</script>
