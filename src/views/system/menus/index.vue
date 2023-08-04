<template>
  <div class="w-full h_100">
    <vxe-table-layout
      ref="menuTabeRef"
      class="h_100"
      border="inner"
      intact
      :tree-config="treeConfig"
      :loader="loadTableData"
      height="100%"
      :columns-list="columns"
    >
      <template #operator-left>
        <el-form :inline="true" :model="menuSearchForm" class="menu-search-form">
          <!-- <el-form-item label="所属目录" :show-message="false">
            <el-select v-model="menuSearchForm.menuType">
              <el-option ></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="菜单检索" :show-message="false">
            <el-input v-model="menuSearchForm.menuName" clearable placeholder="请输入菜单名称/菜单代码" />
          </el-form-item>
          <el-form-item label="" :show-message="false">
            <el-button type="primary" @click="onChangeMenuFormSearch(menuSearchForm)">
              <i-ep-search class="el-icon"></i-ep-search>
              <span>搜索</span>
            </el-button>
          </el-form-item>
        </el-form>
      </template>
      <template #operator-right>
        <el-button type="primary" @click="onAddMenu">
          <i-ep-plus class="el-icon"></i-ep-plus>
          <span>新增菜单</span>
        </el-button>
      </template>
      <template #columns>
        <vxe-column title="菜单状态" field="dataStatus" width="80" fixed="right">
          <template #default="{ row }">
            <el-switch
              v-model="row.dataStatus"
              :loading="isMenuStatusLoading"
              :active-value="0"
              :inactive-value="2"
              inline-prompt
              active-text="显示"
              inactive-text="隐藏"
              :before-change="onChangeMenuStatus.bind(menuConfigInstance, row)"
            />
          </template>
        </vxe-column>
        <vxe-column title="操作" width="180" align="center" fixed="right">
          <template #default="{ row }">
            <div class="uno-flex-y-center">
              <p>
                <el-button text type="info" @click="onEditMenuForm(row)">
                  <i-ep-edit class="el-icon"></i-ep-edit>
                  <span>修改</span>
                </el-button>
              </p>
              <p>
                <el-button text type="danger" @click="onDeleteMenu(row)">
                  <i-ep-delete class="el-icon"></i-ep-delete>
                  <span>删除</span>
                </el-button>
              </p>
            </div>
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
    <MenuForm
      ref="menuFormDialogRef"
      v-model:menu-form-data="menuFormData"
      :menu-form-title="menuFormTitle"
      :menu-trees="menuTrees"
      @handle-submit-menu-form="onSubmitMenuForm"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMenusCommon } from './composables/useMenusCommon';
import { useMenuTable } from './composables/useMenuTable';
import { useMenuEvent } from './composables/useMenuEvent';

import { MenuForm } from './components';

const {
  menuSearchForm,
  menuTabeRef,
  menuConfigInstance,
  isMenuStatusLoading,
  menuFormData,
  menuFormTitle,
  menuFormDialogRef,
  formatMenuStatusChangeName,
  formatMenuStatusChangeParams,
  menuTrees
} = useMenusCommon();

const { columns, treeConfig, loadTableData } = useMenuTable();

const { onChangeMenuStatus, onAddMenu, onEditMenuForm, onDeleteMenu, onSubmitMenuForm, onChangeMenuFormSearch } =
  useMenuEvent({
    menuTabeRef,
    isMenuStatusLoading,
    menuFormDialogRef,
    menuFormData,
    formatMenuStatusChangeName,
    formatMenuStatusChangeParams
  });
</script>
<style lang="scss" scoped>
.menu-search-form {
  :deep(.el-form-item) {
    margin-bottom: 0;
  }
}
</style>
