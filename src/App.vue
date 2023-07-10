<!--
 * @Autor: QMZhao
 * @Date: 2021-09-06 22:26:37
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-07 18:21:56
 * @Description: 
 * @FilePath: /vue-vite-template/src/App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
const locale = zhCn;
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
</style>
