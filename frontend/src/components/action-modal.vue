<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-close-button-container">
          <div class="modal-close-btn" @click="$emit('close')">
            <icon-close />
          </div>
        </div>
        <div class="modal-container">
          <div class="modal-header">Create new post</div>
          <div class="modal-body">
            <div class="modal-details">
              <icon-create-new-post-modal />
              <p class="modal-description">Drag photos and videos here</p>
              <button class="modal-select-button button">Select from computer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import iconClose from "../components/icons/icon-close.vue"
import iconCreateNewPostModal from "../components/icons/icon-create-new-post-modal.vue"

export default {
  components: {
    iconClose,
    iconCreateNewPostModal,
  },
  props: {
    show: Boolean,
  },
}
</script>
