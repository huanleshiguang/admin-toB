<!--
 * @Autor: QMZhao
 * @Date: 2023-08-07 13:56:05
 * @LastEditTime: 2023-08-09 10:29:28
 * @Description: 
-->
<script lang="ts" setup>
import { Logout } from 'login';

import { useUserInfo } from '/@/store/common/useUserInfo';

const logoutDialogProps = withDefaults(
  defineProps<{
    logoutDialogVisiable: boolean;
  }>(),
  {
    logoutDialogVisiable: false
  }
);

const logoutDialogEmits = defineEmits<{
  (event: 'update:logoutDialogVisiable', visiable: boolean);
}>();

const { userInfoData } = storeToRefs(useUserInfo());

const getVisiable = computed({
  get: () => {
    return logoutDialogProps.logoutDialogVisiable;
  },
  set: (value: boolean) => {
    logoutDialogEmits('update:logoutDialogVisiable', value);
  }
});

// 用户信息 pinia 数据
const getUserInfoData = computed(() => userInfoData.value);

const privateRouter = useRouter();

// 退出提示信息
const logoutDialogData = reactive({
  message: `是否退出 "${getUserInfoData.value?.userName}" 账号`,
  loading: false
});

// 退出弹窗取消
function onCancelLogout(): void {
  logoutDialogEmits('update:logoutDialogVisiable', false);
}

// 退出弹窗确定
function onComfirmLogout(): void {
  logoutDialogData.message = '正在注销中, 请稍后...';
  loadLogout();
}

// 退出注销请求
async function loadLogout() {
  const params: Logout = { accountInfoId: getUserInfoData.value!.id };
  logoutDialogData.loading = true;
  try {
    await fetchLogout(params);
    privateRouter.replace({
      path: '/'
    });
    logoutDialogEmits('update:logoutDialogVisiable', false);
  } catch (error) {
    logoutDialogData.message = `退出失败，请重试`;
    logoutDialogData.loading = false;
  }
}

// 关闭弹窗事件
function onCloseLogoutDialog(): void {
  logoutDialogData.message = `是否退出 "${getUserInfoData.value?.userName}" 账号`;
  logoutDialogData.loading = false;
}
</script>

<template>
  <el-dialog v-model="getVisiable" title="" destroy-on-close width="500px" @close="onCloseLogoutDialog">
    <span class="f-s-16">{{ logoutDialogData.message }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="onCancelLogout">取消</el-button>
        <el-button :loading="logoutDialogData.loading" type="primary" @click="onComfirmLogout">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
