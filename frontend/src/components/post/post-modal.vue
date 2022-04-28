<template>
  <Transition name="modal">
    <div v-if="show" class="post-modal-mask">
      <div class="modal-wrapper">
        <div class="modal-close-button-container">
          <div class="modal-close-btn" @click="$emit('close')">
            <icon-modal-close />
          </div>
        </div>
        <div class="post-modal-container">
          <div class="post-modal-content">
            <div class="left">
              <post-media :post="post" />
            </div>
            <div class="right">
              <post-header :user="post.by" class="post-header-modal" />
              <div class="comments">
                <div class="comment-item-list" v-for="comment in post.comments" :key="comment.id">
                  <div class="comment-item-list-left"><img class="suggest-img img-avatar" :src="comment.by.imgUrl" /></div>
                  <div class="comment-item-list-middle">
                    <div class="comment-text">
                      <router-link class="link" :to="{ name: 'profile', params: { id: comment.by.id } }">
                        <span class="title-link">{{ comment.by.username }}</span>
                      </router-link>

                      {{ comment.txt }}
                    </div>
                    <div class="comment-reply"><span class="time-ago">1d&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="reply-text">Reply</span></div>
                  </div>

                  <div class="comment-item-list-right">
                    <heart-icon :likedBy="comment.likedBy" @add-like="$emit('like-comment', comment.id)" @removeLike="$emit('unlike-comment', comment.id)" />
                  </div>
                </div>
              </div>

              <post-details :post="post" />
              <add-comment :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import addComment from "./add-comment.vue"
import postHeader from "./post-header.vue"
import postDetails from "./post-details.vue"
import heartIcon from "./heart-icon.vue"
import postMedia from "./post-media.vue"
import iconModalClose from "../icons/icon-modal-close.vue"

export default {
  components: { postHeader, addComment, postDetails, heartIcon, postMedia, iconModalClose },
  props: {
    show: Boolean,
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
