<template>
  <div class="message-friend-list-item-container flex-center">
    <div class="profile-list-item-content-container">
      <span class="profile-list-item-img-container">
        <img alt="profile picture" class="profile-list-item-img img-avatar" :src="message.imgUrl" />
      </span>
      <div class="text-content-container">
        <div class="profile-list-item-label1">{{ message.by }}</div>
        <div>
          <span class="description">{{ message.txt }} _ {{ timeAgo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: false,
    },
  },
  computed: {
    timeAgo() {
      const currDate = new Date().getTime()
      const messageDate = new Date(this.message.createdAt).getTime()
      const time = Math.floor((currDate - messageDate) / (1000 * 60 * 60))
      return time < 24 ? `${time} h` : time / 24 < 7 ? `${Math.floor(time / 24)} d` : time / 24 / 365 > 1 ? `${Math.floor(time / 24 / 365)} y` : `${Math.floor(time / 24 / 7)} w`
    },
  },
}
</script>
