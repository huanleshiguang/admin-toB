<!--
 * @Autor: QMZhao
 * @Date: 2023-07-24 18:59:46
 * @LastEditTime: 2023-07-27 16:42:01
 * @Description: 功能清单
-->
<template>
  <div class="uno-wh-full">
    <SimpleCard :title="title">
      <template #headerBtn>
        <el-button :loading="isSaveLoading" size="small" type="primary" @click="onSaveRoleModules(getTreeParams)">
          保存
        </el-button>
      </template>
      <SimpleLoading :loading="moduleTreesLoading" :source-data="moduleTrees">
        <el-tree
          ref="moduleTreeRef"
          show-checkbox
          :data="moduleTrees"
          :props="defaultProps"
          :check-strictly="isCheckStrictily"
          node-key="id"
          @check="onCheckedModuleTree"
        />
      </SimpleLoading>
    </SimpleCard>
  </div>
</template>

<script lang="ts" setup>
import { useRoleTreeData } from './composiables/useModuleTreeData';
import { useModuleTreeEvent } from './composiables/useModuleTreeEvent';

import type TreeStore from 'element-plus/es/components/tree/src/model/tree-store';

withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: ''
  }
);

// 菜单树组件引用
const moduleTreeRef = ref<TreeStore | null>(null);

const { moduleTrees, defaultProps, moduleTreesLoading, getTreeParams, isCheckStrictily } =
  useRoleTreeData(moduleTreeRef);
const { isSaveLoading, onSaveRoleModules, onCheckedModuleTree } = useModuleTreeEvent(moduleTreeRef, isCheckStrictily);
</script>
<style lang="scss" scoped></style>
