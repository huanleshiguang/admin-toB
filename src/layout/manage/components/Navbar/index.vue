<!--
 * @Author: QMZhao
 * @Description: 导航栏
 * @Date: 2022-10-31 13:54:35
 * @LastEditTime: 2023-08-07 14:59:11
 * @Reference: 
-->
<script lang="ts" setup>
import Breakcrumb from './breakcrumb.vue';
import { LogoutDialog } from '/@/components/views/Logout';

import { useMenuCollapse } from '/@/store/common/useCommon';
import { useUserInfo } from '/@/store/common/useUserInfo';

const { userInfoData } = storeToRefs(useUserInfo());

const { setCollapse } = useMenuCollapse();

// 是否折叠侧边栏
const isCollapse = ref(false);

const logoutDialogVisiable = ref(false);

const getUserInfoData = computed(() => userInfoData.value);

// 折叠侧边栏方法
function onCollapaseSideBar(): void {
  isCollapse.value = !isCollapse.value;
  setCollapse();
}

// 登出
function onLogout(): void {
  logoutDialogVisiable.value = true;
}
</script>

<template>
  <div class="nav-bar-content h_100 flex items-center justify-between">
    <div class="flex items-center">
      <!-- 侧边栏开关按钮 -->
      <div :class="['menu-btn h_100 flex items-center']" @click="onCollapaseSideBar">
        <div :class="['menu-btn-icon w-full flex items-center menu-btn-position']">
          <SvgIcon :icon-class="isCollapse ? 'expasion' : 'shou'" color="333"></SvgIcon>
        </div>
      </div>
      <!-- 路由信息 -->
      <Breakcrumb></Breakcrumb>
    </div>
    <!-- 用户信息 -->
    <div>
      <el-dropdown>
        <span class="c-white cursor-pointer">
          {{ getUserInfoData?.userName }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="onLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <LogoutDialog v-model:logout-dialog-visiable="logoutDialogVisiable" />
  </div>
</template>

<style scoped lang="scss">
.nav-bar-content {
  color: $color-white;
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
