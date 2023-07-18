<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2021-09-28 13:25:44
 * @LastEditTime: 2023-07-18 10:51:11
 * @Reference: 
-->
<script setup lang="ts">
import { IUserLoginForm } from '/@/model/views/login';
import { useMessage } from '/@/hooks/common/useMessage';

import { useUserLoginToken } from '/@/store/login/useLogin';

const privateRouter = useRouter();

const { createMessage, createConfirm } = useMessage();

const { setUserToken } = useUserLoginToken();

const loginForm = ref<IUserLoginForm>({
  userName: 'ADMIN',
  password: '123456'
});

const isLoginLoading = ref(false);

// 是否记住用户
const isRecordUser = ref(false);

// 登录
function onLogin() {
  // createMessage.success('登录成功');
  setUserToken(loginForm.value.userName);
  privateRouter.push({
    path: '/dashboard'
  });
  // createConfirm('是否确认', 'warning').then(() => {
  createMessage.success('登录成功');
  // });
}
</script>

<template>
  <div class="user-form">
    <el-form :model="loginForm" label-width="80px" label-position="top">
      <el-form-item prop="userName">
        <template #label>
          <p class="flex flex-items-baseline form-item-label">
            <span class="title">用户名</span>
            <span class="divider">/</span>
            <span class="sub-title">USERNAME</span>
          </p>
        </template>
        <el-input
          v-model="loginForm.userName"
          placeholder="请输入用户名"
          :input-style="{ height: '49px', fontSize: '17px' }"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <template #label>
          <p class="flex flex-items-baseline form-item-label">
            <span class="title">密码</span>
            <span class="divider">/</span>
            <span class="sub-title">PASSWORD</span>
          </p>
        </template>
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          :input-style="{ height: '49px', fontSize: '17px' }"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="isRecordUser" size="large">
          <span class="record-user">记住用户名</span>
        </el-checkbox>
      </el-form-item>
      <el-form-item label="">
        <el-button color="#00A0DF" type="primary" class="w_100 submit-btn" :loading="isLoginLoading" @click="onLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <span class="company-name w_100">©扁鹊飞救科技（北京）股份有限公司</span>
  </div>
</template>

<style lang="scss" scoped>
.user-form {
  width: 508px;
  height: 100%;
  padding: 20px;
  font-size: 17px;
  .form-button {
    text-align: center;
    .login-button {
      width: 150px;
    }
  }
  //表单自定义label
  .form-item-label {
    font-family: $font-source;
    font-size: 17px;
    .title {
      color: #2a2a2a;
    }
    .divider {
      font-size: 18px;
      padding: 0 3px;
    }
    .sub-title {
      color: #848484;
    }
  }
  // 记住用户多选框
  :deep(.el-checkbox.el-checkbox--large .el-checkbox__inner) {
    width: 22px;
    height: 22px;
  }
  // 多选项✔样式
  :deep(.el-checkbox__inner::after) {
    width: 7px;
    height: 15px;
    top: 0px;
    left: 6px;
  }
  .record-user {
    font-size: 17px;
    color: #2a2a2a;
    padding-left: 7px;
    font-family: $font-source;
  }
  .submit-btn {
    height: 51px;
    font-size: 20px;
    font-family: $font-source;
  }
  .company-name {
    display: inline-block;
    padding-top: 16px;
    text-align: center;
    font-family: $font-source;
  }
}
</style>
