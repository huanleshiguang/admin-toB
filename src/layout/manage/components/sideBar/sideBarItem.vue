<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:31:02
 * @LastEditTime: 2023-07-13 18:46:17
 * @Reference: 
-->
<script lang="ts" setup>
import { useNavMenuList } from '/@/store/common/routerList';
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';

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
    background-color="#E8E8E8"
    text-color="#606266"
    active-text-color="#fff"
    popper-effect="dark"
  >
    <template v-for="item in navMenuList" :key="item.id">
      <el-menu-item :index="item.path" class="menu-item_custom">
        <i :class="['menu-icon', `icon-${item.icon}`]"></i>
        <template #title>
          <p class="flex grid-items-center">
            <span>{{ item.label }}</span>
          </p>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style scoped lang="scss">
.qm-menu {
  border-right-color: transparent;
  :deep(.is-active) {
    background-color: #00a0df;
  }
}
.menu-icon {
  // width: 24px;
  // height: 24px;

  display: inline-block;
  margin-right: 5px;
  &::before {
    font-size: 18px;
  }
}
</style>
