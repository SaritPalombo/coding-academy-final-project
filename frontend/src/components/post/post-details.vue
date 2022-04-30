<template>
  <section>
    <div class="post-icons flex justify-between">
      <div class="left-section">
        <icon-heart-white aria-label="Like" @click="addLike()" v-if="!isLiked" class="icon" />
        <icon-heart-red aria-label="Unlike" v-else @click="removeLike()" class="icon" />
        <icon-comment-white @click="openModal()" aria-label="Comment" class="icon" />
        <router-link class="link" to="/messages">
          <icon-share-post class="icon" />
        </router-link>
      </div>
      <div>
        <icon-saved-post-white @click="savePost()" v-if="isSaved" />
        <icon-saved-post-black @click="savePost()" v-else />
      </div>
    </div>
    <div class="post-text">
      <div class="title-link" v-show="amountOfLikes !== 0">{{ amountOfLikes }} likes</div>
      <div class="comment-text">
        <router-link class="link" :to="{ name: 'profile', params: { id: post.by.id } }">
          <span class="title-link">{{ post.by.username }}</span>
        </router-link>
        {{ post.txt }}
      </div>
      <div class="comments-amount" v-if="amountOfComments !== 0" @click="openModal()">View all {{ amountOfComments }} comments</div>
      <div class="time-ago">{{ timeAgo }} AGO</div>
    </div>
  </section>
</template>

<script>
import iconHeartWhite from "../icons/icon-heart-white.vue"
import iconHeartRed from "../icons/icon-heart-red.vue"
import iconCommentWhite from "../icons/icon-comment-white.vue"
import iconSharePost from "../icons/icon-share-post.vue"
import iconSavedPostWhite from "../icons/icon-saved-post-white.vue"
import iconSavedPostBlack from "../icons/icon-saved-post-black.vue"

export default {
  components: {
    iconHeartRed,
    iconHeartWhite,
    iconCommentWhite,
    iconSharePost,
    iconSavedPostWhite,
    iconSavedPostBlack,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    amountOfLikes() {
      return this.post.likedBy.length
    },
    timeAgo() {
      const currDate = new Date().getHours()
      const postDate = new Date(this.post.createdAt).getHours()
      const delta = Math.abs(currDate - postDate)
      return (delta > 24 ? `${delta / 24} Days` : `${delta} Hours`).toUpperCase()
    },
    amountOfComments() {
      return this.post.comments.length
    },
    isLiked() {
      return this.post.likedBy.filter(userId => userId === this.activeUser.id).length > 0
    },
    isSaved() {
      return this.$store.getters.loggedInUser.savedPosts.includes(this.post.id)
    },
    activeUser() {
      return this.$store.getters.loggedInUser
    },
  },

  methods: {
    openModal() {
      this.$emit("open-modal")
    },
    savePost() {
      this.$store.dispatch({ type: "savePost", post: this.post })
    },
    addLike() {
      const post = JSON.parse(JSON.stringify(this.post))
      post.likedBy.push(this.activeUser.id)
      this.$store.dispatch({ type: "updatePost", post })
    },
    removeLike() {
      const post = JSON.parse(JSON.stringify(this.post))
      post.likedBy = post.likedBy.flatMap(userId => (userId !== this.activeUser.id ? userId : []))
      this.$store.dispatch({ type: "updatePost", post })
    },
  },
}
</script>
