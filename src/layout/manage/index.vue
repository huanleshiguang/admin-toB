<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:29:53
 * @LastEditTime: 2023-02-18 22:42:48
 * @Reference: 
-->
<script lang="ts" setup>
import { AppMain, Navbar, SideBar } from './components';

defineComponent({
  name: 'Layout'
});
</script>

<template>
  <div class="w-full h_100 page-container">
    <el-container class="h_100">
      <el-aside width="auto">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header height="30px" class="w-full layout-header"><Navbar /></el-header>
        <el-main>
          <div class="main-container w-full h_100">
            <app-main />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  background-color: $btn-bg-primary;
}
.page-container {
  min-width: 1280px;
  overflow-x: auto;
}
</style>
