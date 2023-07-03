<!--
 * @Autor: QMZhao
 * @Date: 2021-09-06 22:26:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-02 11:11:09
 * @Description: 
 * @FilePath: /vue-vite-template/src/App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/dist/locale/zh-cn.mjs";
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
