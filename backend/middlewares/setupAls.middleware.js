const asyncLocalStorage = require("../services/als.service")

async function setupAsyncLocalStorage(req, res, next) {
  const storage = {}
  asyncLocalStorage.run(storage, () => {
    if (req.sessionID) {
      const alsStore = asyncLocalStorage.getStore()
      alsStore.sessionId = req.sessionID
      if (req.session.user) alsStore.userId = req.session.user._id
    }
    next()
  })
}

module.exports = setupAsyncLocalStorage
