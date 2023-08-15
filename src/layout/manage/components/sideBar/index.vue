<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:30:49
 * @LastEditTime: 2023-08-14 18:43:28
 * @Reference: 
-->
<script lang="ts" setup>
import SideBarItem from './sideBarItem.vue';
import { useMenuCollapse } from '/@/store/common/useCommon';

const store = useMenuCollapse();

const getCollapaseStatus = computed(() => store.isCollapse);
</script>

<template>
  <div class="h_100 flex flex-col sidebar-content">
    <!-- 侧边栏 -->
    <div class="side-bar-list">
      <el-scrollbar>
        <SideBarItem v-model:collapseValue="getCollapaseStatus"></SideBarItem>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-content {
  box-sizing: border-box;

  .side-bar-list {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    background-color: $color-border;
    :deep(.el-menu--collapse) {
      width: 40px;
    }
  }
}
</style>
