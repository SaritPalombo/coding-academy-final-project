<template>
  <section class="base-view-container">
    <div class="desktop">
      <segment class="profile-top-segment">
        <img :src="user.imgUrl" class="profile-img img-avatar" />
        <div class="details-container">
          <div class="user-profile-details">
            <h2>{{ user.username }}</h2>
            <div>
              <a class="edit-profile-btn pointer" tabindex="0">Edit Profile</a>
            </div>
            <icon-settings />
          </div>
          <div class="profile-details">
            <h5>
              <span class="items-number">{{ amountOfPosts }} </span>posts
            </h5>
            <h5>
              <span class="items-number">{{ amountOfFollowers }} </span>followers
            </h5>
            <h5>
              <span class="items-number">{{ amountOfFollowing }} </span>following
            </h5>
          </div>
          <div class="user-details">
            <div class="profile-full-name">
              {{ user.fullname }}
            </div>
            <h4>{{ user.bio }}</h4>
          </div>
        </div>
      </segment>

      <div class="profile-tab-nav-container">
        <div class="p1" role="tablist">
          <!--<a aria-selected="false" class="posts-icon" role="tab" @click="changeCategory('posts')" tabindex="0">
            <span class="p3">
              <icon-posts-tab class="p4" />
              <span class="p5">Posts</span>
            </span>
          </a>-->
          <a aria-selected="false" class="videos-icon" role="tab" v-if="videosPosts.length !== 0" @click="changeCategory('videos')" tabindex="0">
            <span class="a1">
              <icon-videos-tab class="a2" />
              <span class="a3">Videos </span>
            </span>
          </a>
          <a aria-selected="false" class="p6" role="tab" @click="changeCategory('saved')" tabindex="0">
            <div class="p7">
              <icon-saved-tab class="p8" />
              <span class="p9">Saved</span>
            </div>
          </a>
          <a aria-selected="false" class="p10" role="tab" tabindex="0">
            <span class="p11">
              <icon-tagged-tab class="p12" />
              <span class="p13">Tagged</span>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="mobile">
      <div class="profile-top-segment-mobile">
        <div class="left">
          <img :src="user.imgUrl" class="profile-img img-avatar" />
          <h2>{{ user.fullname }}</h2>
          <h4>{{ user.bio }}</h4>
        </div>
        <div class="right-profile-mobile">
          <div class="right-top flex">
            <h2>{{ user.username }}</h2>
            <icon-settings class="settings-btn" />
          </div>
          <div class="edit-profile-btn-container pointer">
            <a class="edit-profile-btn" tabindex="0">Edit Profile</a>
          </div>
        </div>
      </div>
      <div class="tabs-container-mobile">
        <div class="top">
          <div class="profile-details">
            <h5>
              <span class="items-number">{{ amountOfPosts }} </span> <br />posts
            </h5>
            <h5>
              <span class="items-number">{{ amountOfFollowers }} </span><br />followers
            </h5>
            <h5>
              <span class="items-number">{{ amountOfFollowing }} </span><br />following
            </h5>
          </div>
        </div>
        <div class="bottom">
          <div class="profile-tab-nav-container-mobile">
            <icon-tab-mobile-posts />
            <icon-tab-mobile-saved />
            <icon-tab-mobile-tagged />
          </div>
        </div>
      </div>
    </div>

    <!--<div class="profile-post-container">
      <profile-post v-for="post in savedPosts" :key="post.id" :post="post" />
    </div>-->
  </section>
</template>

<script>
import profilePost from "../components/profile-post.vue"
import iconSettings from "../components/icons/icon-settings.vue"
import iconPostsTab from "../components/icons/icon-posts-tab.vue"
import iconVideosTab from "../components/icons/icon-videos-tab.vue"
import iconSavedTab from "../components/icons/icon-saved-tab.vue"
import iconTaggedTab from "../components/icons/icon-tagged-tab.vue"
import iconTabMobilePosts from "../components/icons/icon-tab-mobile-posts.vue"
import iconTabMobileSaved from "../components/icons/icon-tab-mobile-saved.vue"
import iconTabMobileTagged from "../components/icons/icon-tab-mobile-tagged.vue"

export default {
  components: {
    iconSettings,
    profilePost,
    iconPostsTab,
    iconSavedTab,
    iconVideosTab,
    iconTaggedTab,
    iconTabMobilePosts,
    iconTabMobileSaved,
    iconTabMobileTagged,
  },
  data: function () {
    return {
      currCategory: this.$route.params.category || "posts",
      userId: this.$route.params.id,
    }
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    },
    postsByCategory() {
      return this.currCategory === "posts" ? this.userPosts : this.currCategory === "saved" ? this.savedPosts : this.currCategory === "videos" ? this.videosPosts : "tagged"
    },
    userPosts() {
      return this.$store.getters.postsById(this.userId) || []
    },
    savedPosts() {
      return this.$store.getters.savedPostsByUser(this.user.savedPosts)
    },
    videosPosts() {
      return this.$store.getters.videoPostsById(this.userId) || []
    },
    amountOfPosts() {
      return this.userPosts.length
    },
    amountOfFollowers() {
      return this.user.followers
    },
    amountOfFollowing() {
      return this.user.following
    },
    user() {
      return this.isMyProfile ? this.activeUser : this.$store.getters.friendById(this.userId)
    },
    isMyProfile() {
      return this.userId === this.$store.getters.loggedInUser.id
    },
    activeUser() {
      return this.$store.getters.loggedInUser
    },
  },
  methods: {
    changeCategory(category) {
      console.log(category)
      this.currCategory = category
    },
  },
}
</script>
