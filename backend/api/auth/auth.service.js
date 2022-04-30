const userService = require("../user/user.service")
const logger = require("../../services/logger.service")

async function login(username, password) {
  logger.debug(`auth.service - login with username: ${username}`)
  const user = await userService.getUser(username)
  if (!user || user.password !== password) return Promise.reject("Invalid username or password")
  return userService.userDetails(user)
}

async function signup(username, password, fullname) {
  logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
  if (!username || !password || !fullname) return Promise.reject("fullname, username and password are required!")
  const userExist = await userService.getUser(username)
  if (userExist) return Promise.reject("Username already taken")
  return userService.add({ username, password, fullname })
}

module.exports = {
  login,
  signup,
}
