<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:31:02
 * @LastEditTime: 2023-02-16 15:12:36
 * @Reference: 
-->
<script lang="ts" setup>
import { useNavMenuList } from "/@/store/common/routerList";

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
  <a-menu
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
      <a-sub-menu v-if="item.children" :index="item.path">
        <template #title>
          <a-icon>
            <i-ep-location color="#fff"></i-ep-location>
          </a-icon>
          <span>{{ item.label }}</span>
        </template>
        <a-menu-item-group v-for="menuItem in item.children" :key="menuItem.id">
          <a-menu-item :index="menuItem.path" class="menu-item_custom">{{ menuItem.label }}</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item v-else :index="item.path" class="menu-item_custom">
        <template #title>{{ item.label }}</template>
      </a-menu-item>
    </template>
  </a-menu>
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
