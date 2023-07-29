<!--
 * @Autor: QMZhao
 * @Date: 2023-07-29 14:51:42
 * @LastEditTime: 2023-07-29 16:15:07
 * @Description: 功能菜单抽屉树
-->
<template>
  <el-drawer v-model="moduleConfigDrawerVisiable" destroy-on-close size="500px" v-bind="$attrs">
    <SimpleCard :title="cardTitle">
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
          default-expand-all
          @check="onCheckedModuleTree"
        />
      </SimpleLoading>
    </SimpleCard>
  </el-drawer>
</template>

<script lang="ts" setup>
import { useRoleTreeData } from './composiables/useModuleTreeData';
import { useModuleTreeEvent } from './composiables/useModuleTreeEvent';

import type TreeStore from 'element-plus/es/components/tree/src/model/tree-store';

const moduleConfigDrawerProps = withDefaults(
  defineProps<{
    moduleConfigVisiable: boolean;
    cardTitle: string;
  }>(),
  {
    moduleConfigVisiable: false,
    cardTitle: ''
  }
);

const roleFormEmits = defineEmits<{
  (event: 'update:moduleConfigVisiable', visiable: boolean): void;
}>();

// 表单 v-model 处理
const moduleConfigDrawerVisiable = computed({
  get: () => {
    return moduleConfigDrawerProps.moduleConfigVisiable;
  },
  set: (value) => {
    roleFormEmits('update:moduleConfigVisiable', value);
  }
});

// 菜单树组件引用
const moduleTreeRef = ref<TreeStore | null>(null);

const { moduleTrees, defaultProps, moduleTreesLoading, getTreeParams, isCheckStrictily } =
  useRoleTreeData(moduleTreeRef);
const { isSaveLoading, onSaveRoleModules, onCheckedModuleTree } = useModuleTreeEvent({
  moduleTreeRef,
  isCheckStrictily,
  roleFormEmits
});
</script>
<style lang="scss" scoped></style>
