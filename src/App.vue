<!--
 * @Autor: QMZhao
 * @Date: 2021-09-06 22:26:37
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-05 18:34:23
 * @Description: 
 * @FilePath: /vue-vite-template/src/App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import zhCN from "ant-design-vue/es/locale/zh_CN";
const locale = zhCN;
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
</style>
