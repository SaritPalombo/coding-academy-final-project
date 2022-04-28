import { storageService } from "./storage-service.js"
import { utilService } from "./util-service.js"
import { httpService } from "./http.service"

const STORAGE_KEY_LOGGED_IN_USER = "STORAGE_KEY_LOGGED_IN_USER"

export const userService = {
  login,
  logout,
  getLoggedInUser,
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
