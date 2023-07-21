<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-14 14:45:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-20 19:38:58
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\RoleConfig\index.vue
 * @Description: 
-->
<template>
  <div class="role-config-comp">
    <itemHeader>
      <template #header-left>
        <span>角色配置</span>
      </template>
    </itemHeader>
    <el-divider></el-divider>
    <itemContent>
      <template #default>
        <common-tree :data="data" :transmit-props="transmitProps"></common-tree>
      </template>
    </itemContent>
  </div>
</template>
  
<script setup lang='ts'>
import itemHeader from '../components/ItemHeader.vue'
import itemContent from '../components/ItemContent.vue'

const data = [
  {
    "children": [
      {
        "children": [],
        "id": "6f0d7d2d70a949bbb61d44b416c46d82",
        "parentId": "6f0d7d2d70a949bbb61d44b416c46d80",
        "deptCode": "10001002",
        "deptName": "信息科2",
        "isMainDept": false
      },
      {
        "children": [],
        "id": "6f0d7d2d70a949bbb61d44b416c46d81",
        "parentId": "6f0d7d2d70a949bbb61d44b416c46d80",
        "deptCode": "10001001",
        "deptName": "信息科1",
        "isMainDept": true
      }
    ],
    "id": "6f0d7d2d70a949bbb61d44b416c46d80",
    "parentId": "0",
    "deptCode": "10001",
    "deptName": "信息科",
    "isMainDept": true
  }
]
const transmitProps = {
  label: 'deptName',
  deptCode: 'deptCode',
  isMainDept: 'isMainDept',
  children: 'children'
}
</script>
  
<style lang="scss" scoped>
.role-config-comp {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>