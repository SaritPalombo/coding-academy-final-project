const logger = require("../../services/logger.service")
const util = require("../../services/util.service")
const usersData = require("../../data/users.json")
const messages = require("../../data/messages.json")
const fs = require("fs")

module.exports = {
  getUser,
  userDetails,
  updateUser,
  userProfile,
  add,
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
  return usersData.find(user => user.username === username)
}

const createUserId = () => "u" + String(parseInt(usersData[usersData.length - 1].id.slice(1)) + 1).padStart(3, "0")

function add(userInfo) {
  try {
    const user = {
      id: createUserId(),
      username: userInfo.username,
      password: userInfo.password,
      fullname: userInfo.fullname,
      imgUrl: "https://www.oseyo.co.uk/wp-content/uploads/2020/05/empty-profile-picture-png-2-2.png",
      savedPosts: [],
      followers: 0,
      following: 0,
      bio: "",
    }
    usersData.push(user)
    fs.writeFileSync("data/users.json", JSON.stringify(usersData, null, 2))
    return user
  } catch (err) {
    logger.error("cannot insert user", err)
    throw err
  }
}

function updateUser(userId, userInfo) {
  try {
    const user = usersData.find(user => user.id === userId)
    user.savedPosts = userInfo.savedPosts
    fs.writeFileSync("data/users.json", JSON.stringify(usersData, null, 2))
  } catch (err) {
    logger.error("cannot save post", err)
    throw err
  }
}
