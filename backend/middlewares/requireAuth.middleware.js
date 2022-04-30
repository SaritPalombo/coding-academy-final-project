function requireAuth(req, res, next) {
  if (!req.session || !req.session.userId) {
    res.status(401).end("Not authenticated, Please Login")
    return
  }
  next()
}

module.exports = {
  requireAuth,
}
