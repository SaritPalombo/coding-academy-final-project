import { createRouter, createWebHashHistory } from "vue-router"
import home from "../views/home.vue"
import login from "../views/login.vue"
import explore from "../views/explore.vue"
import messages from "../views/messages.vue"
import profile from "../views/profile.vue"
import signup from "../views/signup.vue"

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/explore",
      name: "explore",
      component: explore,
    },
    {
      path: "/messages",
      name: "messages",
      component: messages,
    },
    {
      path: "/signup",
      name: "signup",
      component: signup,
    },
    {
      path: "/profile/:id/:category?",
      name: "profile",
      component: profile,
    },
  ],
})

export default router
