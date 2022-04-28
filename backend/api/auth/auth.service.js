const userService = require("../user/user.service")
const logger = require("../../services/logger.service")

async function login(username, password) {
  logger.debug(`auth.service - login with username: ${username}`)
  const user = await userService.getUser(username)
  if (!user || user.password !== password) return Promise.reject("Invalid username or password")
  return userService.userDetails(user)
}

module.exports = {
  login,
}
