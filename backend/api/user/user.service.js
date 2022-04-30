const logger = require("../../services/logger.service")
const util = require("../../services/util.service")
const usersData = require("../../data/users.json")
const messages = require("../../data/messages.json")

module.exports = {
  getUser,
  userDetails,
  savePost,
  userProfile,
  getUsers
}

function userProfile(userId) {
  const { password, ...userDetails } = usersData.find(user => user.id === userId)
  return userDetails
}

function userDetails(user) {
  const { password, ...userDetails } = user
  userDetails.messages = userMessages(user.id)
  userDetails.stories = userStories(user.id)
  userDetails.suggestions = userSuggestions(user.id)
  userDetails.friends = connections()
  return userDetails
}

const connections = userId => {
  return usersData.flatMap(user => {
    if (user.id === userId) return []
    const { password, ...userDetails } = user
    return userDetails
  })
}

const userStories = userId => util.randomElements(connections(userId), 15)
const userSuggestions = userId => util.randomElements(connections(userId), 6)
const userMessages = userId => messages.flatMap(message => (message.by === userId ? [] : { ...userProfile(message.by), ...message }))

function getUser(username) {
  try {
    return usersData.find(user => user.username === username)
  } catch (err) {
    logger.error("cannot find user", err)
    throw err
  }
}

function savePost(userId, post) {
  try {
    const user = usersData.find(user => user.id === userId)
    if (user) {
      user.posts.push(post)
    }
  } catch (err) {
    logger.error("cannot save post", err)
    throw err
  }
}

function getUsers(){
  return usersData;
}
