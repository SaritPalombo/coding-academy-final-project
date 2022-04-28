const express = require("express")
const { requireAuth } = require("../../middlewares/requireAuth.middleware")
const { savePost } = require("./user.controller")
const router = express.Router()

router.post("/savePost", requireAuth, savePost)

module.exports = router
