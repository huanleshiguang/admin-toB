<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 19:57:02
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-26 17:00:06
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
        <vxe-column title="操作" align="center" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" @click="editRow(row)">编辑</el-button>
            <el-popconfirm
              confirm-button-text="是"
              cancel-button-text="否"
              :icon="InfoFilled"
              icon-color="#626AEF"
              title="确定要删除这条信息吗？"
              @confirm="deleteRow(row)"
            >
              <template #reference>
                <el-button link type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
    <!-- 新增院区的dialog -->
    <update ref="updateRef" @reFetchtableList="reFresh" />
  </div>
</template>

<script setup lang="ts">
import { update } from './components';
import { Plus, InfoFilled } from '@element-plus/icons-vue';
import { useHospManageCommon } from './composiables/useHospManageCommon';
import { useHospManageEvent } from './composiables/useHospManageEvent';
const { vxeTableLayoutRef, updateRef, hospAreacolumnsList } = useHospManageCommon();
const { currentChangeEvent, initMethod, add, editRow, deleteRow, reFresh } = useHospManageEvent({
  vxeTableLayoutRef,
  updateRef,
  hospAreacolumnsList
});
</script>
<style scoped lang="scss"></style>
