<template>
  <div class="base-view-container">
    <div class="explore-post-container">
      <explorePost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import explorePost from "../components/explore-post.vue"

export default {
  name: "explore",
  components: {
    explorePost,
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    },
  },
}
</script>
