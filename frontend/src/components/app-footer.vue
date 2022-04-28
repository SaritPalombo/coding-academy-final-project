<template>
  <footer class="footer-container">
    <div class="links-container">
      <div v-for="link in links" class="link">
        {{ link }}
      </div>
    </div>
    <div class="links-container">
      <div class="language">
        <span>English &nbsp;</span>
        <span style="display: inline-block; transform: rotate(180deg)">
          <icon-chevron />
        </span>
      </div>
      <div class="language">&nbsp; &nbsp; &nbsp;© 2022 Instagram from Meta</div>
    </div>
  </footer>
</template>

<script>
import iconChevron from "./icons/icon-chevron.vue"

export default {
  components: {
    iconChevron,
  },
  data() {
    return {
      links: ["Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms", "Top Accounts", "Hashtags", "Locations", "Instagram Lite"],
    }
  },
}
</script>
