import { postService } from "../../services/post-service"

export default {
  state: {
    posts: [],
  },
  getters: {
    posts(state) {
      return state.posts
    },
    postsById: state => userId => {
      return state.posts.flatMap(post => (post.by.id === userId ? post : []))
    },
    videoPostsById: state => userId => {
      return state.posts.flatMap(post => (post.by.id === userId && post.isVideo ? post : []))
    },
  },
  mutations: {
    setPosts(state, { posts }) {
      state.posts = posts ? [...posts] : null
    },
    // savePost(state, { post }) {
    //   const idx = state.posts.findIndex(currPost => currPost.id === post.id)
    //   if (idx !== -1) state.posts.splice(idx, 1, post)
    //   else state.posts.push(post)
    // },
  },
  actions: {
    async loadPosts({ commit }) {
      const posts = await postService.loadPosts()
      commit({ type: "setPosts", posts })
    },

    async updatePost({ commit }, { post }) {
      console.log("updatePost", post)
      const posts = await postService.update(post)
      commit({ type: "setPosts", posts })
    },
  },
}
