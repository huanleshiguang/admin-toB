<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:29:53
 * @LastEditTime: 2023-08-14 18:09:40
 * @Reference: 
-->
<script lang="ts" setup>
import { AppMain, SideBar } from './components';
import custom from '/@/styles/custom.module.scss';
import SideBarToggle from '/@/layout/manage/components/Navbar/SideBarToggle.vue';

defineComponent({
  name: 'Layout'
});
</script>

<template>
  <div class="w-full h_100 page-container">
    <el-container class="h_100">
      <el-header height="40px" class="w-full layout-header">
        <NavHeader :bg-color="custom.btnBgPrimary" />
      </el-header>
      <el-container class="h_100">
        <el-aside width="auto">
          <SideBar />
        </el-aside>
        <el-main class="main-container">
          <SideBarToggle />
          <div class="w-full h_100">
            <AppMain />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  background-color: $btn-bg-primary;
  // background-color: $bg-nav;
}
.page-container {
  min-width: 1280px;
  overflow-x: auto;
  .main-container {
    padding: 0;
    background-color: $bg-f5;
    position: relative;
  }
}
</style>
