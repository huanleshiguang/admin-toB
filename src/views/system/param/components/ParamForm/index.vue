<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-22 17:58:28
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 人员管理新增与编辑
-->
<template>
  <DialogLayout ref="dialogLayoutRef" show-close>
    <el-form ref="userFormRef" :model="paramConfigForm" label-width="auto" label-position="right">
      <el-form-item label="配置项名称" prop="userIdNo">
        <el-input v-model="paramConfigForm.userIdNo" class="w_100" placeholder="请输入身份证号码" />
      </el-form-item>
      <el-form-item label="配置项值" prop="userTel">
        <el-input v-model="paramConfigForm.userTel" class="w_100" placeholder="请输入联系电话" />
      </el-form-item>
      <el-form-item label="配置项描述" prop="userWorkNo">
        <el-input v-model="paramConfigForm.userWorkNo" placeholder="请输入用户工号" />
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
const paramConfigForm = ref();
</script>
