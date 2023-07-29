<!--
 * @Autor: QMZhao
 * @Date: 2023-07-24 18:59:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-28 11:22:25
 * @Description: 角色配置
 * @FilePath: \servious-illness-admin\src\views\system\roles\components\ConfigRole\components\RoleTree\index.vue
-->
<template>
  <div class="uno-wh-full">
    <SimpleCard :title="title">
      <template #headerBtn>
        <el-button size="small" type="primary" @click="onAddRoleTree">
          <i-ep-plus></i-ep-plus>
          添加角色
        </el-button>
      </template>
      <SimpleLoading :loading="roleTreeLoading" :source-data="roleTrees">
        <el-tree
          :data="roleTrees"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :props="defaultProps"
          @node-click="handleNodeClick"
        >
          <template #default="{ node, data }">
            <div class="w-full flex items-center justify-between">
              <span>{{ node.label }}</span>
              <div class="flex items-center">
                <el-button link text type="info" size="small" @click="onEditRoleTree(data)">修改</el-button>
                <el-button link text type="danger" size="small" @click="onDeleteRole(data)">删除</el-button>
              </div>
            </div>
          </template>
        </el-tree>
      </SimpleLoading>
    </SimpleCard>
    <DialogLayout
      ref="roleFormDialogRef"
      show-close
      width="500px"
      :title="roleFormTitle"
      :sure-method="loadSaveRole"
      @sure="onSubmitRoleForm"
    >
      <RoleForm v-model:role-form-data="roleFormData"></RoleForm>
    </DialogLayout>
  </div>
</template>

<script lang="ts" setup>
import { useRoleTreeData } from './composiables/useRoleTreeData';
import { useRoleTreeEvent } from './composiables/useRoleTreeEvent';

import { RoleForm } from './components';

withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: ''
  }
);

const { roleTreeLoading, roleTrees, defaultProps, loadRoles } = useRoleTreeData();

const {
  roleFormTitle,
  roleFormDialogRef,
  roleFormData,
  loadSaveRole,
  onAddRoleTree,
  onEditRoleTree,
  onDeleteRole,
  onSubmitRoleForm,
  handleNodeClick
} = useRoleTreeEvent(loadRoles);
</script>
<style lang="scss" scoped></style>
