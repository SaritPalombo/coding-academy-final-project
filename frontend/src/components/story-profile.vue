<template>
  <div class="story-profile-container">
    <div class="image-container">
      <img src="@/assets/story-frame.png" class="img-frame" />
      <span class="span"><img class="img img-avatar" :src="story.imgUrl" /></span>
    </div>
    <div class="username">
      <div class="div">{{ story.username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
}
</script>
