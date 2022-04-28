<template>
  <section class="base-no-header-view-container">
    <div class="login-view-container">
      <div class="left-container">
        <div class="template-img">
          <img src="@/assets/login/img1.png" class="mobile-app-img" />
          <img src="@/assets/login/img2.png" class="mobile-app-img" />
          <img src="@/assets/login/img3.png" class="mobile-app-img" />
          <img src="@/assets/login/img4.png" class="mobile-app-img" />
        </div>
      </div>
      <div class="right-container">
        <div class="login-container box-container">
          <img class="logo" src="@/assets/login/logo.png" />
          <el-input class="input-textfield" v-model="username" placeholder="Phone number, username, or email" />
          <el-input class="input-textfield" v-model="password" show-password placeholder="Password" />
          <el-button :disabled="verifyUserInput === false" type="primary" @click="login()" class="login-btn">Log In</el-button>
          <h4 class="or-label"><span class="or-label-text">OR</span></h4>
          <div>
            <button class="fb-login-btn" type="button">
              <span class="fb-icon"><img src="@/assets/login/fb-icon.png" /></span>
              <span class="fb-log-in-label">Log in with Facebook</span>
            </button>
          </div>
          <a class="fb-forgot-password pointer">Forgot password?</a>
        </div>
        <div class="signup-container box-container">
          <div class="signup-text-container">
            <p class="signup-text-label">
              Don't have an account?
              <router-link class="link" to="/signup">
                <span class="signup-link-text">Sign up</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="download-app-container">
          <p class="get-the-app">Get the app.</p>
          <div class="download-buttons-container">
            <a aria-label="Download on the App Store" class="download-link pointer">
              <img alt="Download on the App Store" class="download-button" src="@/assets/login/appstore.png" />
            </a>
            <a aria-label="Get it on Google Play" class="download-link pointer">
              <img alt="Get it on Google Play" class="download-button" src="@/assets/login/playstore.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  computed: {
    verifyUserInput() {
      return this.username.length > 0 && this.password.length > 0
    },
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch({ type: "login", userCred: { username: this.username, password: this.password } })
        this.$router.push("/")
      } catch (err) {
        console.log(err)
        this.msg = "Failed to login"
      }
    },
  },
}
</script>
