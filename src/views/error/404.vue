<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2023-02-11 15:47:04
 * @LastEditTime: 2023-08-11 15:06:01
 * @Reference: 404 错误页面
-->
<template>
  <div class="uno-wh-full flex-col uno-flex-y-center">
    <div class="error-image">
      <SvgIcon icon-class="404-erro" class-name="uno-wh-full" />
    </div>
    <el-button type="primary" @click="onBackTo">返回首页</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouterFrom } from '/@/store/common/useRouterFrom';

const privateRouter = useRouter();

const { routerFromPath } = storeToRefs(useRouterFrom());
const { setRouterFromPath } = useRouterFrom();

const getRouterPath = computed(() => routerFromPath.value);

// 返回
function onBackTo() {
  privateRouter.replace({
    path: getRouterPath.value || '/'
  });
  setRouterFromPath(null);
}
</script>

<style scoped lang="scss">
.error-image {
  width: 80%;
  height: 80%;
}
</style>
