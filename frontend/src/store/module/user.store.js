import { userService } from "../../services/user-service"

export default {
  state: {
    loggedInUser: userService.getLoggedInUser(),
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser
    },
    friendById: state => userId => {
      return state.loggedInUser.friends.find(user => user.id === userId)
    },
  },
  mutations: {
    setLoggedInUser(state, { user }) {
      // console.log("setLoggedInUser", user)
      state.loggedInUser = user ? { ...user } : null
    },
  },
  actions: {
    async login({ commit }, { userCred }) {
      try {
        const user = await userService.login(userCred)
        commit({ type: "setLoggedInUser", user })
        return user
      } catch (err) {
        // console.log("userStore: Error in login", err)
        throw err
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout()
        commit({ type: "setLoggedInUser", user: null })
      } catch (err) {
        // console.log("userStore: Error in logout", err)
        throw err
      }
    },
  },
}
