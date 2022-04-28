import { createStore } from "vuex"

import userStore from "./module/user.store.js"
import postStore from "./module/post.store.js"

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    postStore,
    userStore,
  },
})

export default store
