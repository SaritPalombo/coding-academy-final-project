import { httpService } from "./http.service"

const STORAGE_KEY_LOGGED_IN_USER = "STORAGE_KEY_LOGGED_IN_USER"

export const userService = {
  login,
  logout,
  getLoggedInUser,
  signup,
  savePost,
}

function getLoggedInUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGED_IN_USER) || "null")
}

async function login(userCred) {
  const userData = await httpService.post("auth/login", userCred)
  return _saveLocalUser(userData)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGED_IN_USER)
  return await httpService.post("auth/logout")
}

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGED_IN_USER, JSON.stringify(user))
  return user
}

async function signup(user) {
  const userData = await httpService.post("auth/signup", user)
  return _saveLocalUser(userData)
}

async function savePost(post) {
  const user = getLoggedInUser()
  const postIdIdx = user.savedPosts.indexOf(post.id)
  postIdIdx !== -1 ? user.savedPosts.splice(postIdIdx, 1) : user.savedPosts.push(post.id)
  await httpService.put("user", user)
  return _saveLocalUser(user)
}
