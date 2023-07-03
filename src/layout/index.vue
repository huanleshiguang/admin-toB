<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:29:53
 * @LastEditTime: 2023-02-18 22:42:48
 * @Reference: 
-->
<template>
  <div class="w_100 h_100 page-container">
    <el-container class="h_100">
      <el-aside width="auto">
        <div class="app-sidebar h_100">
          <SideBar />
        </div>
      </el-aside>
      <el-container>
        <el-header height="50px" class="w_100 layout-header"><Navbar /></el-header>
        <el-main>
          <div class="main-container w_100 h_100">
            <app-main />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { AppMain, Navbar, SideBar } from "./components";

export default defineComponent({
  name: "Layout",
  components: {
    AppMain,
    SideBar,
    Navbar
  },
  setup() {
    return {};
  }
});
</script>
<style lang="scss" scoped>
.layout-header {
  background-color: $color-background;
}
.page-container {
  min-width: 1280px;
  overflow-x: auto;
}
.main-container {
  // background-color: $color-background;
}
</style>
