<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:31:02
 * @LastEditTime: 2023-02-16 15:12:36
 * @Reference: 
-->
<script lang="ts" setup>
import { useNavMenuList } from '/@/store/common/routerList';

withDefaults(
  defineProps<{
    collapseValue: boolean;
  }>(),
  {
    collapseValue: false
  }
);
const { navMenuList } = useNavMenuList();
const privateRoute = useRoute();

const currentRouteName = computed(() => {
  return privateRoute.path;
});
</script>

<template>
  <el-menu
    router
    unique-opened
    :default-active="currentRouteName"
    class="qm-menu"
    :collapse="collapseValue"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#0aa1ed"
    popper-effect="dark"
  >
    <template v-for="item in navMenuList" :key="item.id">
      <el-sub-menu v-if="item.children" :index="item.path">
        <template #title>
          <el-icon>
            <i-ep-location color="#fff"></i-ep-location>
          </el-icon>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="menuItem in item.children" :key="menuItem.id">
          <el-menu-item :index="menuItem.path" class="menu-item_custom">{{ menuItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" class="menu-item_custom">
        <template #title>{{ item.label }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style scoped lang="scss">
.qm-menu {
  border-right-color: transparent;
}
.menu-icon {
  width: 1em;
  height: 1em;
  margin-right: 5px;
}
</style>
