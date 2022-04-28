<template>
  <div class="explore-post">
    <div class="explore-img" v-if="post.isVideo">
      <video class="video-explore" autoplay muted>
        <source :src="post.imgUrl" type="video/mp4" />
      </video>
    </div>
    <div class="explore-img" v-else>
      <img class="explore-post-img" :src="Array.isArray(post.imgUrl) ? post.imgUrl[0] : post.imgUrl" />
      <icon-carousel class="explore-post-icon" v-if="Array.isArray(post.imgUrl)" />
    </div>
    <div class="explore-post-overlay" @click="openModal">
      <div class="icons-overlay">
        <!-- <icon-explore-hover-video v-if="post.isVideo" /> -->
        <div class="icon-container-explore" v-if="post.comments.length">
          <icon-explore-hover-comment />
          <span>{{ post.comments.length }}</span>
        </div>
        <div class="icon-container-explore" v-if="post.likedBy.length">
          <icon-explore-hover-heart />
          <span>{{ post.likedBy.length }}</span>
        </div>
      </div>
    </div>

    <Transition to="body">
      <post-modal :post="post" :show="showModal" @close="showModal = false" />
    </Transition>
  </div>
</template>

<script>
import iconCarousel from "./icons/icon-carousel.vue"
import iconExploreHoverVideo from "./icons/icon-explore-hover-video.vue"
import iconExploreHoverComment from "./icons/icon-explore-hover-comment.vue"
import iconExploreHoverHeart from "./icons/icon-explore-hover-heart.vue"
import postModal from "./post/post-modal.vue"

export default {
  components: {
    iconCarousel,
    iconExploreHoverVideo,
    iconExploreHoverComment,
    iconExploreHoverHeart,
    postModal,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
