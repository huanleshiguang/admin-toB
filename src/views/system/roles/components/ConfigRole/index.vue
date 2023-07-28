<!--
 * @Autor: QMZhao
 * @Date: 2023-07-24 18:51:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-27 09:40:23
 * @Description: 角色权限
 * @FilePath: \servious-illness-admin\src\views\system\roles\components\ConfigRole\index.vue
-->
<template>
  <div class="flex w-full">
    <el-row :gutter="20" class="w-full">
      <el-col v-for="(item, index) in roleCardList" :key="item.label" :span="index ? 16 : 8">
        <component :is="item.component" :title="item.label"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useRoleConfigCommon } from './composiables/useRoleConfigCommon';
const { roleCardList } = useRoleConfigCommon();
</script>
<style lang="scss" scoped></style>