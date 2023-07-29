<!--
 * @Autor: QMZhao
 * @Date: 2023-07-24 18:31:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-26 17:20:54
 * @Description: 权限管理
 * @FilePath: \servious-illness-admin\src\views\system\roles\index.vue
-->
<template>
  <div class="uno-wh-full">
    <CommonTabs :tab-list="roleTabs" />
  </div>
</template>

<script setup lang="ts">
import { useRoleCommon } from './composiables/useRoleCommon';
const { roleTabs } = useRoleCommon();
</script>

<style scoped lang="scss">
.role-manage {
  height: 100%;
  div {
    width: 500px;
    padding: 20px 100px 0 0;
  }
}
</style>
