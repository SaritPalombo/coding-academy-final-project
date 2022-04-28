<template>
  <div class="search-text-field">
    <input aria-label="Search Input" autocapitalize="none" class="input" placeholder="Search" type="text" value="" />
    <div class="content" role="button" tabindex="0">
      <div class="container">
        <div class="icon">
          <icon-search />
        </div>
        <span class="search-text-field-ddd">Search</span>
      </div>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
import iconSearch from "./icons/icon-search.vue"

export default {
  components: {
    iconSearch,
  },
}
</script>
