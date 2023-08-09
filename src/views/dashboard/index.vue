<!--
 * @Autor: QMZhao
 * @Date: 2023-07-03 09:49:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 10:00:36
 * @Description: 主界面
 * @FilePath: \servious-illness-admin\src\views\dashboard\index.vue
-->
<script lang="ts" setup>
import { NavHeader } from './components';

import { useDashboardCommon } from './composables/useCommon';
import { useDashboradEvent } from './composables/useEvent';

const { menuList, notificationList, supportList } = useDashboardCommon();
const { onJumpTo } = useDashboradEvent();
</script>

<template>
  <div class="w-full h_100 dashboard-container flex flex-col">
    <NavHeader />
    <div class="company-logo">
      <el-image :src="require('/@/assets/image/dashboard/logo-desktop.png')"></el-image>
    </div>
    <div class="dashboard-content flex">
      <div class="menu-content dashboard-container__box">
        <span class="dashboard-container__title">ICU临床信息系统&nbsp;(BQICU.V3)</span>
        <div class="flex flex-wrap grid-justify-between">
          <div
            v-for="item in menuList"
            :key="item.id"
            class="menu-list-item flex flex-items-center"
            @click="onJumpTo(item)"
          >
            <p class="mli-icon grid-justify-center flex flex-items-center">
              <SvgIcon :icon-class="item.menuIcon" class-name="mli-icon__item"></SvgIcon>
            </p>
            <span class="mli-title">{{ item.menuName }}</span>
          </div>
        </div>
      </div>
      <div class="system-content flex flex-col grid-justify-between">
        <div class="system-content__notification dashboard-container__box">
          <span class="dashboard-container__title">重要功能更新通知：</span>
          <div>
            <span v-for="item in notificationList" :key="item.id" class="system-content__item">{{ item.title }}</span>
          </div>
        </div>
        <div class="system-content__support dashboard-container__box">
          <span class="dashboard-container__title">系统支持</span>
          <div>
            <span v-for="item in supportList" :key="item.id" class="system-content__item">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  background: url('/@/assets/image/dashboard/desktop-bg.png') 100% 100%;
  .dashboard-content {
    padding: 67px 0 0 40px;
  }
  &__title {
    font-family: Noto Sans SC;
    font-weight: bold;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 10px;
    display: inline-block;
  }
  .company-logo {
    width: 321px;
    height: 119px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    transform: translate(0, 0);
  }
  &__box {
    padding: 24px;
    box-sizing: border-box;
    border-radius: $border-radius-lg;
    background: rgba(0, 0, 0, 0.1);
  }
  .menu-content {
    width: 518px;
    min-width: 518px;
    height: 703px;
    margin-right: 16px;

    .menu-list-item {
      width: 227px;
      height: 88px;
      background: hsla(0, 0%, 94.9%, 0.11);
      margin-bottom: 16px;
      border-radius: 6px;
      cursor: pointer;
      .mli-icon {
        height: 100%;
        padding: 20px 10px 20px 20px;
        box-sizing: border-box;
        &__item {
          width: 60px;
          height: 60px;
        }
      }
      .mli-title {
        font-size: 24px;
        color: hsla(0, 0%, 100%, 0.9);
      }
    }
  }
  .system-content {
    width: 254px;
    min-width: 254px;
    height: 703px;
    &__notification {
      width: 100%;
      height: 344px;
    }
    &__support {
      width: 100%;
      height: 344px;
    }
    &__item {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-family: Noto Sans SC;
      color: #fff;
      display: inline-block;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
