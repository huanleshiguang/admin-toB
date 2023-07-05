<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:29:53
 * @LastEditTime: 2023-07-05 18:11:54
 * @Reference: 
-->
<template>
  <div class="w_100 h_100 page-container">
    <a-layout class="h_100">
      <a-layout-sider width="auto">
        <div class="app-sidebar h_100">
          <SideBar />
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-header height="50px" class="w_100 layout-header"><Navbar /></a-layout-header>
        <a-layout-content>
          <div class="main-container w_100 h_100">
            <app-main />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
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
