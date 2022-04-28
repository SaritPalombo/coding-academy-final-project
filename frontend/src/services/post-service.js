import { httpService } from "./http.service"

export const postService = {
  update,
  loadPosts,
}

async function loadPosts() {
  const posts = await httpService.get("post")
  console.log("posts", posts)
  return posts
}

async function update(post) {
  return await httpService.put("post", post)
}
