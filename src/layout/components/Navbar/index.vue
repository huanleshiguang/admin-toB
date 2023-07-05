<!--
 * @Author: QMZhao
 * @Description: 导航栏
 * @Date: 2022-10-31 13:54:35
 * @LastEditTime: 2023-07-05 18:16:44
 * @Reference: 
-->
<script lang="ts" setup>
import Breakcrumb from "./breakcrumb.vue";
import { useMenuCollapse } from "/@/store/common/useCommon";

import { IUserInfo } from "/@/model/views/login";

const privateRouter = useRouter();

const { setCollapse } = useMenuCollapse();

// 是否折叠侧边栏
const isCollapse = ref(false);

const userInfo = ref<IUserInfo>({
  username: "admin"
});

// 折叠侧边栏方法
function onCollapaseSideBar(): void {
  isCollapse.value = !isCollapse.value;
  setCollapse();
}

// 登出
const onLogout = (): void => {
  privateRouter.push({
    path: "/login"
  });
}
</script>

<template>
  <div class="nav-bar-content h_100 flex items-center justify-between">
    <div class="flex items-center">
      <!-- 侧边栏开关按钮 -->
      <div :class="['menu-btn h_100 flex items-center']" @click="onCollapaseSideBar">
        <div :class="['menu-btn-icon w_100 flex items-center menu-btn-position']">
          <svg-icon :icon-class="isCollapse ? 'expasion' : 'shou'"></svg-icon>
        </div>
      </div>
      <!-- 路由信息 -->
      <Breakcrumb></Breakcrumb>
    </div>
    <!-- 用户信息 -->
    <div>
      <a-dropdown>
        <a-button text class="a-dropdown-link">
          {{ userInfo.username }}
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="onLogout">退出</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar-content {
  .menu-btn {
    .menu-btn-icon {
      width: 40px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
  }
}
</style>
