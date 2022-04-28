import { createApp } from "vue"
import app from "./app.vue"
import router from "./router"
import store from "./store"

import elementPlus from "element-plus"
import "element-plus/dist/index.css"
import "./styles/styles.scss"

createApp(app).use(router).use(store).use(elementPlus).mount("#app")
