<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2021-09-16 15:59:17
 * @LastEditTime: 2021-09-18 22:20:42
 * @Reference: 
-->
<script setup lang="ts">
import { LoginForm } from "/@/components/login";
</script>

<template>
  <div class="w_100 h_100 login-container">
    <LoginForm></LoginForm>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  position: relative;
  background: $bg-color;
}
</style>
