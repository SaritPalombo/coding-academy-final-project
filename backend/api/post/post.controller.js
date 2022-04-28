const postService = require("./post.service")
const logger = require("../../services/logger.service")

module.exports = {
  getPosts,
  updatePost,
}

async function getPosts(req, res) {
  try {
    const posts = await postService.getPosts()
    res.json(posts)
  } catch (err) {
    logger.error("Failed to get posts", err)
    res.status(500).send({ err: "Failed to get posts" })
  }
}

async function updatePost(req, res) {
  try {
    const posts = await postService.update(req.body)
    res.json(posts)
  } catch (err) {
    logger.error("Failed to update post", err)
    res.status(500).send({ err: "Failed to update post" })
  }
}
