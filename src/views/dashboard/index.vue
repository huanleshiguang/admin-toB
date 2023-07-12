<!--
 * @Autor: QMZhao
 * @Date: 2023-07-03 09:49:52
 * @LastEditors: 
 * @LastEditTime: 2023-07-12 15:43:02
 * @Description: 主界面
 * @FilePath: \servious-illness-admin\src\views\dashboard\index.vue
-->
<template>
  <div class="w_100 h_100 dashboard-container">
    <div class="company-logo">
      <el-image :src="setDashbordLogo()"></el-image>
    </div>
    <div class="menu-content">
      <span class="system-title">ICU临床信息系统&nbsp;(BQICU.V3)</span>
      <div class="flex flex-wrap menu-list">
        <div
          v-for="item in menuList"
          :key="item.id"
          class="menu-list-item flex flex-items-center"
          @click="onJumpTo(item.url)"
        >
          <p class="mli-icon flex flex-items-center"></p>
          <span class="mli-title">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDashboardCommon } from './composition/useCommon';
import { useDashboradEvent } from './composition/useEvent';
const { backgroundImage, menuList, setDashbordLogo } = useDashboardCommon();
const { onJumpTo } = useDashboradEvent();
</script>
<style lang="scss" scoped>
.dashboard-container {
  background: v-bind(backgroundImage);
  padding: 10px 50px;
  .company-logo {
    width: 321px;
    height: 119px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    transform: translate(0, 0);
  }
  .menu-content {
    width: 493px;
    height: auto;
    margin: 0 10px;
    background: rgba(0, 0, 0, 0.1);
    .system-title {
      display: inline-block;
      color: hsla(0, 0%, 100%, 0.4);
      font-size: 16px;
      margin: 20px 10px 0 20px;
    }
    .menu-list {
      padding: 8px;
    }
    .menu-list-item {
      width: 222px;
      height: 88px;
      background: hsla(0, 0%, 94.9%, 0.11);
      margin: 8px;
      border-radius: 6px;
      cursor: pointer;
      .mli-icon {
        width: 100px;
        height: 100%;
      }
      .mli-title {
        font-size: 20px;
        color: hsla(0, 0%, 100%, 0.9);
      }
    }
  }
}
</style>
