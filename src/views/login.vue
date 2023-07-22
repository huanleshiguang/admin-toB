<script setup lang="ts">

</script>

<template>
  <div class="w_100 h_100 flex flex-items-center grid-justify-center login-container">
    <div class="flex flex-items-center grid-justify-between login-form-content">
      <div class="login-image">
        <el-image class="w_100 h_100" :src="require('/@/assets/image/login/login.png')"></el-image>
      </div>
      <div>
        <div class="flex flex-items-center">
          <p class="company-logo">
            <el-image :src="require('/@/assets/image/login/logohead.jpg')"></el-image>
          </p>
          <p class="flex flex-col system-name">
            <span class="title">扁鹊飞救ICU临床信息系统V1.0</span>
            <span class="sub-title">Healthcare Information Technology</span>
          </p>
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  position: relative;
  background: $color-white;
  min-width: 1035px;
  overflow-x: auto;
  .company-logo {
    width: 67px;
    height: 67px;
  }
  .system-name {
    padding-left: 13px;
    color: #2a2a2a;
    .title {
      font-size: 33px;
    }
    .sub-title {
      font-size: 18px;
      font-family: $font-arial;
      padding-top: 5px;
    }
  }
}

.login-form-content {
  // 479+48+508
  width: 1035px;
  height: 570px;
  .login-image {
    width: 479px;
    height: 100%;
  }
}
</style>
