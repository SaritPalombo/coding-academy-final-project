<template>
  <div class="post flex-col">
    <post-header :user="post.by" />
    <post-media :post="post" />
    <post-details :post="post" @open-modal="openModal" />
    <add-comment :post="post" />
    <Transition to="body">
      <post-modal :post="post" :show="showModal" @close="showModal = false" />
    </Transition>
  </div>
</template>

<script>
import addComment from "./add-comment.vue"
import postDetails from "./post-details.vue"
import postHeader from "./post-header.vue"
import postModal from "./post-modal.vue"
import postMedia from "./post-media.vue"

export default {
  components: {
    postDetails,
    postHeader,
    addComment,
    postModal,
    postMedia,
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
