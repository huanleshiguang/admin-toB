<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2021-09-16 15:59:17
 * @LastEditTime: 2023-07-12 18:46:03
 * @Reference: 
-->
<script setup lang="ts">
import { LoginForm } from '/@/components/login';
</script>

<template>
  <div class="w_100 h_100 login-container">
    <div class="flex login-form-content">
      <div>
        <el-image :src="require('/@/assets/image/login/login.png')"></el-image>
      </div>
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  position: relative;
  background: $bg-color;
}

.login-form-content {
  height: 570px;
  margin: 0 auto;
}
</style>
