<template>
  <div class="post-header-container flex">
    <div class="left-header flex items-center">
      <router-link class="link" :to="{ name: 'profile', params: { id: user.id } }">
        <div class="profile-image-container">
          <img src="@/assets/story-frame.png" class="img-frame" />
          <span class="span"><img class="img img-avatar" :src="user.imgUrl" /></span>
        </div>
      </router-link>

      <router-link class="link" :to="{ name: 'profile', params: { id: user.id } }">
        <div class="title-link">{{ user.username }}</div>
      </router-link>
    </div>
    <div class="ellipsis-container" style="height: 24px; width: 24px">
      <icon-more-options />
    </div>
  </div>
</template>

<script>
import iconMoreOptions from "../icons/icon-more-options.vue"

export default {
  components: {
    iconMoreOptions,
  },
  name: "postHeader",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
