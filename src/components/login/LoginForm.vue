<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2021-09-28 13:25:44
 * @LastEditTime: 2023-02-09 15:01:32
 * @Reference: 
-->
<script setup lang="ts">
import { IUserLoginForm } from "/@/model/views/login";
import { useMessage } from "/@/hooks/common";

import { useUserLoginToken } from "/@/store/login/useLogin";

const privateRouter = useRouter();

const { createMessage } = useMessage();

const { setUserToken } = useUserLoginToken();

const loginForm = ref<IUserLoginForm>({
  userName: "ADMIN",
  password: "123456"
});

// 登录
function onLogin() {
  createMessage.success("登录成功");
  setUserToken(loginForm.value.userName);
  privateRouter.push({
    path: "/dashboard"
  });
  // console.log(2);
}
</script>

<template>
  <div class="user-form form-position form-card">
    <a-form :model="loginForm" label-width="80px">
      <a-form-item label="用户名" prop="userName">
        <a-input v-model="loginForm.userName" placeholder="请输入用户名"></a-input>
      </a-form-item>
      <a-form-item label="密码" prop="password">
        <a-input v-model="loginForm.password" placeholder="请输入密码"></a-input>
      </a-form-item>
      <a-form-item label="">
        <a-button type="primary" class="w_100" @click="onLogin">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.user-form {
  width: 400px;
  height: 400px;
  padding: 20px;
  background: $color-white;
  .form-button {
    text-align: center;
    .login-button {
      width: 150px;
    }
  }
}
.form-position {
  position: absolute;
  top: 20%;
  right: 10%;
}
.form-card {
  border-radius: $border-radius-sm;
  box-shadow: $box-shadow;
}
</style>
