const express = require("express")
const { requireAuth } = require("../../middlewares/requireAuth.middleware")
const { getPosts, updatePost } = require("./post.controller")
const router = express.Router()

router.get("/", requireAuth, getPosts)
router.put("/", requireAuth, updatePost)

module.exports = router
