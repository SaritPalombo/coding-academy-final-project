<template>
  <header class="header-container">
    <div class="header-details grid-line">
      <router-link class="link" to="/">
        <img alt="Instagram" class="header-logo-img" src="@/assets/login/logo2.png" />
      </router-link>

      <div class="search-container">
        <div class="search-textfield-space" />
        <div class="search-input-container">
          <search-textfield />
        </div>
      </div>
      <div class="icon-container">
        <nav class="flex justify-between">
          <router-link class="link" to="/">
            <icon-home-white v-if="isSelected('home')" class="home-icon" />
            <icon-home-black v-else class="home-icon" />
          </router-link>
          <router-link class="link" to="/messages">
            <icon-messages-white v-if="isSelected('messages')" class="paper-icon" />
            <icon-messages-black v-else class="paper-icon" />
          </router-link>

          <icon-new-post-white v-if="isSelected('newPost')" class="profile-popup-icon" />
          <icon-new-post-black v-else @click="showModal = true" class="square-plus-icon" />

          <router-link class="link" to="/explore">
            <icon-explore-white v-if="isSelected('explore')" class="explore-icon" />
            <icon-explore-black v-else class="explore-icon" />
          </router-link>

          <el-dropdown trigger="click">
            <icon-heart-white />
            <template #dropdown>
              <el-dropdown-menu>
                <div class="popup-notifications-container">
                  <div class="notification-container">
                    <div class="left-notification flex">
                      <a href="#/profile/u123445" class="link">
                        <div class="profile-image-container">
                          <img src="@/assets/story-frame.png" class="img-frame" /><span class="span"><img class="img" src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg" /></span>
                        </div>
                      </a>
                      <a href="#/profile/u123445" class="link"> <div class="title-link">u123445</div></a>&nbsp;&nbsp;
                      <h4>started following you.<span>3w</span></h4>
                    </div>
                    <div class="right-notification">
                      <div>
                        <button class="notification-btn" type="button">
                          <div class="notification-btn-text">Follow</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-dropdown trigger="click">
            <div class="header-profile">
              <div class="header-profile-border"></div>
              <span class="header-profile-img" role="link" tabindex="0" style="width: 24px; height: 24px">
                <img alt="profile picture" class="header-profile-img img-avatar" :src="loggedInUser.imgUrl" />
              </span>
              <div class="header-profile-margin" style="margin-left: -180px"></div>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <div class="popup-profile-container">
                  <router-link class="link" :to="{ name: 'profile', params: { id: loggedInUser.id } }">
                    <el-dropdown-item> <icon-profile-popup class="profile-popup-icon" />Profile</el-dropdown-item>
                  </router-link>
                  <router-link class="link" :to="{ name: 'profile', params: { id: loggedInUser.id, category: 'saved' } }">
                    <el-dropdown-item><icon-saved-popup class="profile-popup-icon" />Saved</el-dropdown-item>
                  </router-link>
                  <el-dropdown-item>
                    <icon-settings-popup class="profile-popup-icon" />
                    Settings
                  </el-dropdown-item>
                  <el-dropdown-item> <icon-switch-account-popup class="profile-popup-icon" /> Switch Account</el-dropdown-item>
                  <div class="logout-list-item">
                    <router-link class="link" to="/login">
                      <el-dropdown-item @click="logoutUser()">Log Out</el-dropdown-item>
                    </router-link>
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </nav>
      </div>
    </div>

    <Teleport to="body">
      <actionModal :show="showModal" @close="showModal = false"> </actionModal>
    </Teleport>
  </header>
</template>

<script>
import actionModal from "../components/action-modal.vue"
import searchTextfield from "../components/search-textfield.vue"
import iconMessagesBlack from "./icons/icon-messages-black.vue"
import iconMessagesWhite from "./icons/icon-messages-white.vue"
import iconHomeWhite from "./icons/icon-home-white.vue"
import iconHomeBlack from "./icons/icon-home-black.vue"
import iconNewPostWhite from "./icons/icon-new-post-white.vue"
import iconNewPostBlack from "./icons/icon-new-post-black.vue"
import iconExploreWhite from "./icons/icon-explore-white.vue"
import iconExploreBlack from "./icons/icon-explore-black.vue"
import iconHeartWhite from "./icons/icon-heart-white.vue"
import iconProfilePopup from "./icons/icon-profile-popup.vue"
import iconSavedPopup from "./icons/icon-saved-popup.vue"
import iconSettingsPopup from "./icons/icon-settings-popup.vue"
import iconSwitchAccountPopup from "./icons/icon-switch-account-popup.vue"

export default {
  components: {
    actionModal,
    searchTextfield,
    iconMessagesBlack,
    iconMessagesWhite,
    iconHomeWhite,
    iconHomeBlack,
    iconNewPostWhite,
    iconNewPostBlack,
    iconExploreWhite,
    iconExploreBlack,
    iconHeartWhite,
    iconProfilePopup,
    iconSavedPopup,
    iconSettingsPopup,
    iconSwitchAccountPopup,
  },

  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
  },
  methods: {
    logoutUser() {
      this.$store.dispatch({ type: "logout" })
    },
    isSelected(name) {
      if (this.showModal) return name === "newPost"
      return this.$route.name === name
    },
  },
  created() {
    this.$store.dispatch({ type: "loadPosts" })
  },
}
</script>
