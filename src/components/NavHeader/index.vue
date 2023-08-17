<!--
 * @Autor: QMZhao
 * @Date: 2023-07-18 14:18:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-10 15:53:46
 * @Description: 主界面导航栏
 * @FilePath: \servious-illness-admin\src\views\dashboard\components\NavHeader.vue
-->

<script lang="ts" setup>
import { LoginResponse } from 'login';

import { DropDownItem } from 'Dashboard';
import { getUserInfo } from '/@/utils/session';
import { FlexSpacer } from '../common';

withDefaults(
  defineProps<{
    bgColor?: string;
    height?: string;
  }>(),
  {
    bgColor: '',
    height: '40px'
  }
);

const priavteRoute = useRoute();
const priavteRouter = useRouter();

const dropDownList = ref<DropDownItem[]>([
  {
    title: '修改角色',
    roleName: 'editRole'
  },
  {
    title: '修改密码',
    roleName: 'editPassword'
  },
  {
    title: '退出账号',
    roleName: 'logout'
  }
]);

const logoutDialogVisiable = ref(false);

const dashboardNavData = ref({
  organization: '扁鹊飞救医院（北京）',
  roleName: '',
  office: '重症监护室',
  userName: ''
});

const isDashboard = computed<boolean>(() => {
  const dashboardPath = '/dashboard';
  return priavteRoute.path === dashboardPath ? false : true;
});

// 初始化数据
function initUserInfo(): void {
  const userInfoStorage = getUserInfo() as LoginResponse;
  if (!userInfoStorage) return;
  const { userInfo, userRoles } = userInfoStorage;
  const { userName } = userInfo;
  dashboardNavData.value.userName = userName || '';
  dashboardNavData.value.roleName = userRoles.length ? userRoles[0].roleName : '';
}

/**
 * 根据下拉配置项调用对应方法
 *
 * @param item roleName
 */
function setdropDownMap(item: string) {
  const optionMap = new Map<string, () => void>([
    ['editRole', onEditRole],
    ['editPassword', onEditPassword],
    ['logout', onLogout]
  ]);
  return optionMap.get(item);
}

// 修改角色
function onEditRole() {
  console.log('修改角色');
}

// 修改密码
function onEditPassword() {
  console.log('修改密码');
}

// 登出
function onLogout() {
  logoutDialogVisiable.value = true;
}

// 用户下拉选项事件
function onCommandOption(roleName: string): void {
  setdropDownMap(roleName)!();
}

function onBackToDashboard() {
  priavteRouter.replace({
    path: '/dashboard'
  });
}

onMounted(() => {
  initUserInfo();
});
</script>

<template>
  <div class="w-full dashboard-header h-full">
    <p
      v-show="isDashboard"
      class="home uno-flex-y-center cursor-pointer w-40 flex-justify-center"
      title="主界面"
      @click="onBackToDashboard"
    >
      <SvgIcon icon-class="dashboard" class-name="w-24 h-24 cursor-pointer" />
    </p>

    <div class="h-full uno-flex-y-center">
      <span class="f-s-18 p-xAxis-10">{{ priavteRoute.meta.title }}</span>
      <slot name="default"></slot>
    </div>

    <FlexSpacer />

    <div class="h-full uno-flex-y-center justify-end pr">
      <p>
        (
        <span>{{ dashboardNavData.organization }}</span>
        <span>{{ dashboardNavData.roleName }}</span>
        )
      </p>
      <p class="p-xAxis-20">
        <span>所属科室：</span>
        <span>{{ dashboardNavData.office }}</span>
      </p>
      <p class="flex items-center">
        <span>欢迎您，</span>
        <el-dropdown trigger="click" @command="onCommandOption">
          <span class="user-name flex items-center">
            {{ dashboardNavData.userName }}
            <el-icon class="el-icon--right"><i-ep-arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in dropDownList" :key="item.roleName" :command="item.roleName">
                {{ item.title }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </p>
    </div>
  </div>
  <LogoutDialog v-model:logout-dialog-visiable="logoutDialogVisiable" />
</template>

<style lang="scss" scoped>
.dashboard-header {
  display: flex;
  flex-direction: row;
  height: v-bind(height);
  background-color: v-bind(bgColor);
  @include font-style($font-size-14, $color-white);
  .user-name {
    @include font-style($font-size-14, $color-white);
    @include cursor;
  }
  .primary {
    background-color: $color-primary;
  }
  .home :hover {
    background-color: v-bind(bgColor);
  }
}
</style>
