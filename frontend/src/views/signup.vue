<template>
  <section class="base-no-header-view-container">
    <div class="flex flex-col justify-center items-center">
      <div class="singup-vue-container box-container">
        <img class="logo" src="@/assets/login/logo.png" />
        <div class="sing-up-detail-container">
          <h2 class="sing-up-top-text">
            Sign up to see photos and videos <br />
            from your friends.
          </h2>
          <div>
            <button class="fb-login-btn" type="button">
              <span class="fb-icon"><i class="fa-brands fa-facebook-square" /></span>
              <span />Log in with Facebook
            </button>
          </div>
          <h4 class="or-label"><span class="or-label-text">OR</span></h4>
          <el-input class="input-textfield" placeholder="Mobile number or email" />
          <el-input class="input-textfield" placeholder="Full Name" />
          <el-input class="input-textfield" placeholder="Username" />
          <el-input class="input-textfield" placeholder="Password" />
          <div class="sing-up-btn-container">
            <button class="sing-up-btn" disabled="" type="submit">Sign up</button>
          </div>
          <p class="sing-up-bottom-text">
            By signing up, you agree to our
            <a class="pointer">Terms</a>
            ,
            <a class="pointer">Data Policy</a>
            and
            <a class="pointer">Cookies Policy</a>
            .
          </p>
        </div>
      </div>
      <div class="log-in-container box-container">
        <p class="log-in-text">
          Have an account?
          <router-link class="link" to="/login">
            <a class="pointer">Log in</a>
          </router-link>
        </p>
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
  </section>
</template>
