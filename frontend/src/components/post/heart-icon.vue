<template>
  <icon-heart-white aria-label="Like" @click="like()" v-if="isLiked" class="heart-icon" />
  <icon-heart-red aria-label="Unlike" @click="like()" v-else class="heart-icon" />
</template>

<script>
import iconHeartWhite from "../icons/icon-heart-white.vue"
import iconHeartRed from "../icons/icon-heart-red.vue"

export default {
  components: {
    iconHeartWhite,
    iconHeartRed,
  },
  data() {
    return {
      isLiked: Math.random() < 0.5,
    }
  },
  methods: {
    like() {
      this.isLiked = !this.isLiked
    },
  },
}
</script>
