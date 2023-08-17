<!--
 * @Autor: QMZhao
 * @Date: 2023-07-18 10:47:12
 * @LastEditTime: 2023-08-17 14:12:33
 * @Description: 登录表单
-->
<script setup lang="ts">
import { useLoginStorage } from './composable/useLoginStorage';
import { useLoginEvent } from './composable/useLoginEvent';

import { debounce } from 'lodash-es';

const { createMessage } = useMessage();

const { loginForm, setUserInfoStorage, setUserNameStorage } = useLoginStorage();
const { jumpTo } = useLoginEvent();

// 登录按钮loading
const isLoginLoading = ref(false);

// 是否记住用户
const isRecordUser = ref(false);

// 登录请求
async function loadLogin() {
  isLoginLoading.value = true;
  /** btoa() 方法可以将一个二进制字符串（例如，将字符串中的每一个字节都视为一个二进制数据字节）编码为 Base64 编码的 ASCII 字符串。
   *
   * https://developer.mozilla.org/zh-CN/docs/Web/API/btoa
   */
  // loginForm.value.password = window.btoa(`${loginForm.value.password}`);
  try {
    const response = await fetchLogin(loginForm.value);
    setUserInfoStorage(response);
    setUserNameStorage(isRecordUser.value);
    createMessage.success('登录成功');
    jumpTo();
  } catch (error) {
    isLoginLoading.value = false;
  }
}

// 登录
const onLogin = debounce(() => loadLogin(), 200);
</script>
<template>
  <div class="user-form">
    <el-form :model="loginForm" label-width="80px" label-position="top">
      <el-form-item prop="loginName">
        <template #label>
          <p class="flex flex-items-baseline form-item-label">
            <span class="title">用户名</span>
            <span class="divider">/</span>
            <span class="sub-title">USERNAME</span>
          </p>
        </template>
        <el-input
          v-model="loginForm.loginName"
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
          type="password"
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
        <el-button color="#00A0DF" type="primary" class="w-full submit-btn" :loading="isLoginLoading" @click="onLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <span class="company-name w-full">©扁鹊飞救科技（北京）股份有限公司</span>
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
  }
  .submit-btn {
    height: 51px;
    font-size: 20px;
  }
  .company-name {
    display: inline-block;
    padding-top: 16px;
    text-align: center;
  }
}
</style>
