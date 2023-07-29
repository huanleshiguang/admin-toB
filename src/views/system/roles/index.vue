<!--
 * @Autor: QMZhao
 * @Date: 2023-07-28 17:00:18
 * @LastEditTime: 2023-07-29 15:17:21
 * @Description: 角色管理
-->
<template>
  <div class="uno-wh-full">
    <vxe-table-layout
      ref="rolesTableRef"
      class="h_100"
      border="full"
      intact
      :loader="loadTableData"
      height="100%"
      :columns-list="columns"
    >
      <template #operator-left>
        <div class="uno-flex-y-center">
          <el-input placeholder="请输入角色名称/角色代码"></el-input>
          <p class="p-20">
            <el-button type="primary">
              <i-ep-search></i-ep-search>
              搜索
            </el-button>
          </p>
        </div>
      </template>
      <template #operator-right>
        <el-button type="primary" @click="onAddRoleTree">
          <i-ep-plus></i-ep-plus>
          添加角色
        </el-button>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" width="250">
          <template #default="{ row }">
            <div class="uno-flex-y-center">
              <p>
                <el-button text type="info" @click="onEditRoleTree(row)">
                  <i-ep-edit></i-ep-edit>
                  修改
                </el-button>
              </p>
              <p>
                <el-button text type="primary" @click="onConfigAuth(row)">分配权限</el-button>
              </p>
              <p>
                <el-button text type="danger" @click="onDeleteRole(row)">
                  <i-ep-delete></i-ep-delete>
                  删除
                </el-button>
              </p>
            </div>
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
    <!-- 权限增改表单 -->
    <RoleForm
      ref="roleFormDialogRef"
      v-model:role-form-data="roleFormData"
      :role-form-title="roleFormTitle"
      @handle-submit-role-form="onSubmitRoleForm"
    />
    <!-- 角色权限配置 -->
    <ModuleConfig
      v-model:module-config-visiable="moduleConfigDrawer.visiable"
      :card-title="moduleConfigDrawer.title"
      title="角色配置"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMenusCommon } from './composiables/useMenusCommon';
import { useMenuTable } from './composiables/useMenuTable';
import { useRoleTreeEvent } from './composiables/useRoleTreeEvent';

import { RoleForm } from './components';
import { ModuleConfig } from '/@/components/views/system/roles';

const { roleFormTitle, roleFormDialogRef, rolesTableRef, moduleConfigDrawer } = useMenusCommon();
const { columns, loadTableData } = useMenuTable();
const { roleFormData, onAddRoleTree, onEditRoleTree, onDeleteRole, onConfigAuth, onSubmitRoleForm } = useRoleTreeEvent({
  roleFormTitle,
  roleFormDialogRef,
  rolesTableRef,
  moduleConfigDrawer
});
</script>
<style lang="scss" scoped>
.menu-search-form {
  :deep(.el-form-item) {
    margin-bottom: 0;
  }
}
</style>
