<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 19:57:02
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-21 11:15:50
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HosptAreaManage.vue
 * @Description: 院区管理
-->
<template>
  <div class="three-container w-full h_100">
    <vxe-table-layout
      ref="vxeTableLayoutRef"
      class="h_100"
      border
      has-index
      :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }"
      height="100%"
      :columns-list="hospAreacolumnsList"
      @current-change="currentChangeEvent"
    >
      <template #operator-left>
        <h2>院区管理</h2>
      </template>
      <template #operator-right>
        <el-button type="primary" :icon="Plus" @click="add">新增院区</el-button>
        <!-- <el-button type="primary" :icon="Delete" @click="remove">删除院区</el-button> -->
      </template>
      <template #columns>
        <vxe-column title="操作" width="180" align="center" fixed="right">
          <template #default="{ row }">
            <div class="uno-flex-y-center">
              <p>
                <el-button type="info" text link @click="editRow(row)">
                  <i-ep-edit class="el-icon"></i-ep-edit>
                  <span>编辑</span>
                </el-button>
              </p>
              <p>
                <el-button type="danger" icon="delete" link text @click="deleteRow(row)">
                  <i-ep-delete class="el-icon"></i-ep-delete>
                  <span>删除</span>
                </el-button>
              </p>
            </div>
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
    <!-- 新增院区的dialog -->
    <hospForm ref="updateRef" @handle-submit-hospt-form="onSubmitHosptForm" />
  </div>
</template>

<script setup lang="ts">
import { hospForm } from './components';
import { Plus } from '@element-plus/icons-vue';
import { useHospManageCommon } from './composiables/useHospManageCommon';
import { useHospManageEvent } from './composiables/useHospManageEvent';
const { vxeTableLayoutRef, updateRef, hospAreacolumnsList } = useHospManageCommon();
const { currentChangeEvent, initMethod, add, editRow, deleteRow, onSubmitHosptForm } = useHospManageEvent({
  vxeTableLayoutRef,
  updateRef,
  hospAreacolumnsList
});
</script>
<style scoped lang="scss"></style>
