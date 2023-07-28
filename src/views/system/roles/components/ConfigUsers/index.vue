<!--
 * @Autor: QMZhao
 * @Date: 2023-07-24 18:51:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-27 09:35:57
 * @Description: 人员权限
 * @FilePath: \servious-illness-admin\src\views\system\roles\components\ConfigUsers\index.vue
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
import { useRoleUserCommon } from './composiables/useRoleUserCommon';
const { roleCardList } = useRoleUserCommon();
</script>
<style lang="scss" scoped></style>
