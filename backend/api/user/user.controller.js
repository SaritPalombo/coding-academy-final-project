const userService = require("./user.service")

async function savePost(req, res) {}

async function saveUser(req,res) {
  try{
    res.json(req.body)
  } catch (err) {
    logger.error("Failed to save user", err)
    res.status(500).send({ err: "Failed to save user" })
  }
}

async function getUsers(req, res){
  try {
    const users = await userService.getUsers()
    res.json(users)
  } catch (err) {
    logger.error("Failed to get users", err)
    res.status(500).send({ err: "Failed to get users" })
  }
}

module.exports = {
  savePost,
  saveUser,
  getUsers
}
