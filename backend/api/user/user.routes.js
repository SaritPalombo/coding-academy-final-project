const express = require("express")
const { requireAuth } = require("../../middlewares/requireAuth.middleware")
const { savePost, saveUser, getUsers } = require("./user.controller")
const router = express.Router()

router.post("/savePost", requireAuth, savePost)
router.post("/", requireAuth, saveUser)
router.get("/", requireAuth, getUsers)

module.exports = router
