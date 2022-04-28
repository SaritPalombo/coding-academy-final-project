<template>
  <section class="base-view-container">
    <div class="messages-root-container flex-center">
      <div class="messages-left-container green flex">
        <div class="messages-list-top-section">
          <div class="flex-center full-size">
            <div class="profile-list-item-selected-name">{{ activeUser.username }}</div>
            <span class="messages-chevron">
              <icon-down-chevron />
            </span>
          </div>
          <div class="new-message-icon pointer">
            <icon-new-message />
          </div>
        </div>
        <div class="over-flow-auto flex-grow pointer">
          <message-profile-list-item v-for="message in activeUser.messages" :key="message.id" :message="message" />
        </div>
      </div>
      <div class="messages-right-container flex-center">
        <span aria-label="Direct" class="messages-icon"></span>
        <h2 class="messages-send-title">Your Messages</h2>
        <div class="messages-send-label-description">Send private photos and messages to a friend or group.</div>
        <button class="messages-send-btn" type="button">Send Message</button>
      </div>
    </div>
  </section>
</template>

<script>
import messageProfileListItem from "../components/message-profile-list-item.vue"
import iconDownChevron from "../components/icons/icon-down-chevron.vue"
import iconNewMessage from "../components/icons/icon-new-message.vue"

export default {
  components: {
    messageProfileListItem,
    iconDownChevron,
    iconNewMessage,
  },
  computed: {
    activeUser() {
      return this.$store.getters.loggedInUser
    },
  },
}
</script>
