const authService = require("./auth.service")
const logger = require("../../services/logger.service")

async function login(req, res) {
  const { username, password } = req.body
  try {
    const user = await authService.login(username, password)
    req.session.userId = user.id
    res.json(user)
  } catch (err) {
    logger.error("Failed to login " + err)
    res.status(401).send({ err: "Failed to Login" })
  }
}

async function logout(req, res) {
  try {
    req.session.destroy()
    res.send({ msg: "Logged out successfully" })
  } catch (err) {
    logger.error("Failed to logout " + err)
    res.status(500).send({ err: "Failed to logout" })
  }
}

async function signup(req, res) {
  try {
    const { username, password, fullname } = req.body
    console.log("signup", username, password, fullname)
    const account = await authService.signup(username, password, fullname)
    logger.debug(`auth.route - new account created: ` + JSON.stringify(account))
    const user = await authService.login(username, password)
    req.session.userId = user.id
    res.json(user)
  } catch (err) {
    logger.error("Failed to signup " + err)
    res.status(500).send({ err: "Failed to signup" })
  }
}

module.exports = {
  login,
  logout,
  signup,
}
