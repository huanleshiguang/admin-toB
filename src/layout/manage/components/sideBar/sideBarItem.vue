<!--
 * @Autor: QMZhao
 * @Date: 2023-07-14 15:48:54
 * @LastEditTime: 2023-08-09 12:46:33
 * @Description: 
-->
<script lang="ts" setup>
import { useMenus } from '/@/store/common/useMenus';

withDefaults(
  defineProps<{
    collapseValue: boolean;
  }>(),
  {
    collapseValue: false
  }
);
const { targetMenus } = storeToRefs(useMenus());
const privateRoute = useRoute();

const currentRouteName = computed(() => {
  return privateRoute.path;
});

const getTargetMenus = computed(() => targetMenus.value);
</script>

<template>
  <el-menu
    router
    unique-opened
    :default-active="currentRouteName"
    class="qm-menu"
    :collapse="collapseValue"
    background-color="#D9D9D9"
    text-color="#606266"
    active-text-color="#fff"
    popper-effect="dark"
  >
    <template v-for="item in getTargetMenus" :key="item.id">
      <el-menu-item :index="item.routeAddr" class="menu-item_custom">
        <span
          :class="[
            'menu-icon',
            `iconfont icon-${item.menuIcon}`,
            currentRouteName === item.routeAddr && 'menu-icon__trigger'
          ]"
        ></span>
        <template #title>
          <p class="flex grid-items-center">
            <span>{{ item.menuName }}</span>
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
    background-color: $color-primary;
  }
}
.menu-icon {
  width: 50px;
  height: 50px;
  color: $color-primary;
  display: inline-block;
  margin-right: 5px;
  &::before {
    font-size: 42px;
  }
  &__trigger {
    color: $color-white;
  }
}
</style>
