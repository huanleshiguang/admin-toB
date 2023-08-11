<!--
 * @Autor: QMZhao
 * @Date: 2023-07-14 15:48:54
 * @LastEditTime: 2023-08-11 15:56:44
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
      <el-menu-item :index="item.routeAddr" class="menu-item__custom">
        <span
          :class="[
            'menu-icon',
            'uno-flex-center',
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
  padding: 0;
  :deep(.is-active) {
    background-color: $color-primary;
  }
}
.qm-menu .el-menu--collapse {
  width: 40px;
}

.menu-item__custom {
  :deep(.el-menu-tooltip__trigger) {
    justify-content: center;
    padding: 0;
  }
}

.menu-icon {
  width: 30px;
  height: 30px;
  color: $color-primary;
  // display: inline-block;
  &::before {
    font-size: 42px;
  }
  &__trigger {
    color: $color-white;
  }
}
</style>
