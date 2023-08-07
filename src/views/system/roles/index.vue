<!--
 * @Autor: QMZhao
 * @Date: 2023-07-28 17:00:18
 * @LastEditTime: 2023-08-03 15:25:40
 * @Description: 角色管理
-->
<template>
  <div class="uno-wh-full">
    <vxe-table-layout
      ref="rolesTableRef"
      class="h_100"
      border="full"
      :loader="loadTableData"
      height="100%"
      :columns-list="columns"
    >
      <template #operator-left>
        <div class="uno-flex-y-center">
          <el-input placeholder="请输入角色名称/角色代码"></el-input>
          <p class="p-20">
            <el-button type="primary">
              <i-ep-search class="el-icon"></i-ep-search>
              <span>搜索</span>
            </el-button>
          </p>
        </div>
      </template>
      <template #operator-right>
        <el-button type="primary" @click="onAddRoleTree">
          <i-ep-plus class="el-icon"></i-ep-plus>
          <span>添加角色</span>
        </el-button>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" width="260">
          <template #default="{ row }">
            <div class="uno-flex-y-center">
              <p>
                <el-button text type="info" @click="onEditRoleTree(row)">
                  <i-ep-edit class="el-icon"></i-ep-edit>
                  <span>修改</span>
                </el-button>
              </p>
              <p>
                <el-button text type="primary" @click="onConfigAuth(row)">分配权限</el-button>
              </p>
              <p>
                <el-button text type="danger" @click="onDeleteRole(row)">
                  <i-ep-delete class="el-icon"></i-ep-delete>
                  <span>删除</span>
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
import { useMenusCommon } from './composables/useMenusCommon';
import { useMenuTable } from './composables/useMenuTable';
import { useRoleTreeEvent } from './composables/useRoleTreeEvent';

import { RoleForm } from './components';
import { ModuleConfig } from '/@/components/views/system/roles';

// 角色配置通用数据
const { roleFormTitle, roleFormDialogRef, rolesTableRef, moduleConfigDrawer } = useMenusCommon();

// 角色配置表格
const { columns, loadTableData } = useMenuTable();

// 角色表格增删改查事件
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
