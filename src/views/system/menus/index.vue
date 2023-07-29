<template>
  <div class="w-full h_100">
    <vxe-table-layout
      ref="vxeTableLayout"
      class="h_100"
      border="inner"
      intact
      :tree-config="treeConfig"
      :loader="loadTableData"
      height="100%"
      :columns-list="columns"
    >
      <template #operator-left>
        <el-form :inline="true" :model="formInline" class="menu-search-form">
          <!-- <el-form-item label="所属目录" :show-message="false">
            <el-select>
              <el-option ></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="菜单检索" :show-message="false">
            <el-input placeholder="请输入菜单名称/菜单代码"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template #columns>
        <vxe-column title="菜单状态" field="menuStatus">
          <template #default="{ row }">
            <el-switch v-model="row.menuStatus" inline-prompt active-text="显示" inactive-text="隐藏" />
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
  </div>
</template>

<script lang="ts" setup>
import { useMenusCommon } from './composiables/useMenusCommon';
import { useMenuTable } from './composiables/useMenuTable';

const { formInline } = useMenusCommon();
const { columns, treeConfig, loadTableData } = useMenuTable();
</script>
<style lang="scss" scoped>
.menu-search-form {
  :deep(.el-form-item) {
    margin-bottom: 0;
  }
}
</style>
