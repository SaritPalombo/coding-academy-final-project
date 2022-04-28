<template>
  <div class="add-comment-container flex justify-between">
    <icon-emoji />
    <textarea aria-label="Add a comment…" placeholder="Add a comment…" class="textarea" autocomplete="off" autocorrect="off" v-model="commentText"></textarea>
    <button class="post-button" @click="addComment()">
      <div class="div">Post</div>
    </button>
  </div>
</template>

<script>
import iconEmoji from "../icons/icon-emoji.vue"

export default {
  components: {
    iconEmoji,
  },
  data() {
    return {
      commentText: "",
    }
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addComment() {
      if (this.commentText === "") return

      const comment = {
        by: this.$store.getters.loggedInUser.id,
        txt: this.commentText,
        createdAt: new Date(),
      }
      const post = JSON.parse(JSON.stringify(this.post))
      post.comments.push(comment)
      this.$store.dispatch({ type: "updatePost", post })
      this.commentText = ""
    },
  },
}
</script>
