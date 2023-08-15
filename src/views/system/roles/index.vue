<!--
 * @Autor: QMZhao
 * @Date: 2023-07-28 17:00:18
 * @LastEditTime: 2023-08-14 11:12:44
 * @Description: 角色管理
-->
<script lang="ts" setup>
import { useRolesCommon } from './composables/useRolesCommon';
import { useRoleTable } from './composables/useRoleTable';
import { useRoleTreeEvent } from './composables/useRoleTreeEvent';

import { RoleForm } from './components';

// 角色配置通用数据
const { roleBtnAuth, roleFormTitle, roleFormDialogRef, rolesTableRef, moduleConfigDrawer } = useRolesCommon();

// 角色配置表格
const { columns, loadTableData } = useRoleTable();

// 角色表格增删改查事件
const { roleFormData, onAddRoleTree, onEditRoleTree, onDeleteRole, onConfigAuth, onSubmitRoleForm } = useRoleTreeEvent({
  roleFormTitle,
  roleFormDialogRef,
  rolesTableRef,
  moduleConfigDrawer
});
</script>

<template>
  <div class="uno-wh-full p-16">
    <vxe-table-layout
      ref="rolesTableRef"
      class="h_100"
      border="full"
      :loader="loadTableData"
      height="100%"
      :columns-list="columns"
    >
      <template #operator-left>
        <div class="uno-flex-y-center w-full">
          <el-input placeholder="请输入角色名称/角色代码"></el-input>
          <p class="p-xAxis-12">
            <el-button type="primary">
              <i-ep-search class="el-icon"></i-ep-search>
              <span>搜索</span>
            </el-button>
          </p>
        </div>
      </template>
      <template #operator-right>
        <el-button v-auth="roleBtnAuth?.roleAdd.value" class="default-btn" @click="onAddRoleTree">
          <i-ep-plus class="el-icon"></i-ep-plus>
          <span>{{ roleBtnAuth?.roleAdd.label }}</span>
        </el-button>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" width="260">
          <template #default="{ row }">
            <div class="uno-flex-y-center">
              <p v-auth="roleBtnAuth?.roleEdit.value">
                <el-button text type="info" @click="onEditRoleTree(row)">
                  <i-ep-edit class="el-icon"></i-ep-edit>
                  <span>{{ roleBtnAuth?.roleEdit.label }}</span>
                </el-button>
              </p>
              <p>
                <el-button text type="primary" @click="onConfigAuth(row)">分配权限</el-button>
              </p>
              <p v-auth="roleBtnAuth?.roleDelete.value">
                <el-button text type="danger" @click="onDeleteRole(row)">
                  <i-ep-delete class="el-icon"></i-ep-delete>
                  <span>{{ roleBtnAuth?.roleDelete.label }}</span>
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

<style lang="scss" scoped>
.menu-search-form {
  :deep(.el-form-item) {
    margin-bottom: 0;
  }
}
</style>
