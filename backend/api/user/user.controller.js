const userService = require("./user.service")

async function update(req, res) {
  try {
    const userID = req.session.userId
    userService.updateUser(userID, req.body)
    res.json(req.body)
  } catch (err) {
    logger.error("Failed to update user", err)
    res.status(500).send({ err: "Failed to update user" })
  }
}

module.exports = {
  update,
}
