<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:30:49
 * @LastEditTime: 2023-08-11 16:03:06
 * @Reference: 
-->
<script lang="ts" setup>
import SideBarItem from './sideBarItem.vue';
import SideBarToggle from '/@/layout/manage/components/Navbar/SideBarToggle.vue';
import { useMenuCollapse } from '/@/store/common/useCommon';

const store = useMenuCollapse();

const getCollapaseStatus = computed(() => store.isCollapse);
</script>

<template>
  <div class="h_100 flex flex-col sidebar-content">
    <div
      :class="[
        'company-cell h-32 uno-uno-flex-y-center cursor-pointer',
        getCollapaseStatus ? 'sidebar-header_collapse' : 'sidebar-header_expand'
      ]"
    >
      <SideBarToggle />
    </div>
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
  .sidebar-header_expand {
    width: 151px;
    background-color: $color-border;
    @include cursor;
  }
  .sidebar-header_collapse {
    width: 40px;
  }
  .company-cell {
    transition: all 0.3s ease-in;
    .logo {
      width: 50px;
      height: 50px;
      .logo-image {
        border-radius: 50%;
      }
    }
    .company-name-position {
      position: absolute;
      top: 40px;
    }
  }
  .company-name-box {
    min-width: 100px;
    max-width: 110px;
    text-align: center;
    font-size: $font-size-14;
    @include text-ellipsis;
    transition: all 0.1s 0.3s cubic-bezier(0.18, -0.1, 0.04, 1.15);

    .company-name {
      display: inline-block;
      transition: all 0.1s 0.3s cubic-bezier(0.18, -0.1, 0.04, 1.15);
    }
    .hide-name {
      opacity: 0;
    }
    .show-name {
      opacity: 1;
    }
  }
  .translate-hide {
    left: 0px;
    transform: translate(100%, -50%);
  }
  .translate-show {
    left: 70px;
    transform: translate(-10%, -50%);
  }
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
  .menu-btn {
    height: calc(100% - 730px);
    .menu-btn-icon {
      width: 40px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
  }
  .expand-icon {
    width: 70px;
  }
  .collapse-icon {
    width: 200px;
  }
}
</style>
