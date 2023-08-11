<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:29:53
 * @LastEditTime: 2023-08-10 15:55:15
 * @Reference: 
-->
<script lang="ts" setup>
import { AppMain, SideBar } from './components';
import custom from '/@/styles/custom.module.scss';

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
  // background-color: $bg-nav;
}
.page-container {
  min-width: 1280px;
  overflow-x: auto;
  :deep(.el-main) {
    padding: 0;
  }
}
</style>
