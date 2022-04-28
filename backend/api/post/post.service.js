const logger = require("../../services/logger.service")
let posts = require("../../data/posts.json")
const userService = require("../user/user.service")
const fs = require("fs")

module.exports = {
  update,
  getPosts,
}

function getPosts() {
  return posts.map(post => {
    const { by, ...newPost } = post
    newPost.by = userService.userProfile(by)
    newPost.comments = post.comments.map(comment => {
      const { by, ...newComment } = comment
      // console.log(by)
      newComment.by = userService.userProfile(by)
      return newComment
    })
    return newPost
  })
}

function update(post) {
  post.by = post.by.id
  post.comments.map(comment => {
    if (comment.by.id) comment.by = comment.by.id
    return comment
  })
  // console.log("postttt", post)
  posts = posts.map(currPost => (currPost.id === post.id ? post : currPost))
  fs.writeFileSync("data/posts.json", JSON.stringify(posts, null, 2))
  return getPosts()
}
