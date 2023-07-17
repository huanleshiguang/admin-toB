<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-14 14:45:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-14 15:32:37
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\RoleConfig\index.vue
 * @Description: 
-->
<template>
  <div>
    <itemHeader>
      <template #header-left>
        <span>工作站</span>
      </template>

      <template #header-right>
        <el-button type="primary">添加</el-button>
        <el-button type="primary">修改</el-button>
        <el-button type="primary">删除</el-button>
      </template>
    </itemHeader> 
    <el-divider></el-divider>
    <itemContent>
      <template #default>
        <el-menu>
          <el-menu-item>1</el-menu-item>
          <el-menu-item>2</el-menu-item>
          <el-menu-item>3</el-menu-item>
        </el-menu>
      </template>
    </itemContent>
  </div>
</template>

<script setup lang='ts'>
import itemHeader from '../components/ItemHeader.vue';
import itemContent from '../components/ItemContent.vue';

</script>

<style lang="scss" scoped>

</style>