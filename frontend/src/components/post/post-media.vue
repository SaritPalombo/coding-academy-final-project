<template>
  <div class="post-media-container">
    <video v-if="post.isVideo" class="post-img" autoplay muted>
      <source :src="post.imgUrl" type="video/mp4" />
    </video>
    <img v-else-if="!Array.isArray(post.imgUrl)" class="post-img" :src="post.imgUrl" />
    <el-carousel class="img-carousel" v-else arrow="always" :trigger="click" height="500px">
      <el-carousel-item v-for="item in post.imgUrl" :key="item">
        <div class="carousel-img-container">
          <img class="carousel-img" :src="item" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
