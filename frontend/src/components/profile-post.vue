<template>
  <div>
    <div class="profile-post pointer" @click="openModal">
      <video v-if="post.isVideo" class="post-video" autoplay muted>
        <source :src="post.imgUrl" type="video/mp4" />
      </video>
      <img v-else class="profile-post-img" :src="Array.isArray(post.imgUrl) ? post.imgUrl[0] : post.imgUrl" />
      <icon-carousel v-if="Array.isArray(post.imgUrl)" class="profile-post-icon" />
    </div>
    <Transition to="body">
      <post-modal :post="post" :show="showModal" @close="showModal = false" />
    </Transition>
  </div>
</template>

<script>
import iconCarousel from "./icons/icon-carousel.vue"
import postModal from "./post/post-modal.vue"
export default {
  components: {
    iconCarousel,
    postModal,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
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
}
</script>
