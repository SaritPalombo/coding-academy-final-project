<template>
  <div class="profile-list-item-content-container">
    <span class="profile-list-item-img-container">
      <img alt="profile picture" class="profile-list-item-img img-avatar" :src="user.imgUrl" />
    </span>
    <div class="text-content-container">
      <router-link class="link" :to="{ name: 'profile', params: { id: user.id } }">
        <span class="title-link">{{ user.username }}</span>
      </router-link>

      <div class="description">{{ description }}</div>
    </div>
    <div class="action-label">{{ action }}</div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    description: String,
    action: String,
  },
}
</script>
