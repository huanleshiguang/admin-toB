<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-14 14:45:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-19 18:38:53
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\RoleConfig\index.vue
 * @Description: 功能权限板块
-->
<template>
  <div>
    <itemHeader>
      <template #header-left>
        <span>功能权限</span>
      </template>
      <template #header-right>
        <!-- <el-button>123</el-button> -->
      </template>
    </itemHeader>
    <el-divider></el-divider>
    <itemContent>
      <template #default>
        <!-- <CommonTree :data="data" :show-checkbox="true" /> -->
            <el-checkbox label="换床" name="type" />
            <el-checkbox label="入科" name="type" />
            <el-checkbox label="出科" name="type" />
            <el-checkbox label="出科" name="type" />
            <el-checkbox label="入科" name="type" />
            <el-checkbox label="换床" name="type" />
            <el-checkbox label="换床" name="type" />
            <el-checkbox label="换床" name="type" />
            <el-checkbox label="入科" name="type" />
            <el-checkbox label="出科" name="type" />
            <el-checkbox label="入科" name="type" />
            <el-checkbox label="换床" name="type" />

      </template>
    </itemContent>
  </div>
</template>

<script setup lang='ts'>

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<style lang="scss" scoped>
</style>