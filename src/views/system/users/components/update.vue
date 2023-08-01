<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-31 18:14:41
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 人员管理新增与编辑
-->
<template>
  <DialogLayout ref="dialogLayoutRef" show-close :title="userFormtitle" :sure-method="submit" @sure="sureMethod">
    <el-form ref="formRef" :model="userForm" :rules="rules" label-width="auto" label-position="right">
      <el-form-item label="所属科室" prop="deptName">
        <common-tree-select ref="belongToTreeRef" :data="hospAreaDepList" :modelData="userForm.deptId"
          :transmit-props="transmitProps" @handleNodeClick="handlePartOfDept">
        </common-tree-select>
      </el-form-item>
      <el-form-item label="参与科室" prop="bePartOfDeptName">
        <common-tree-select ref="bePartTreeRef" :data="hospAreaDepList" :modelData="userForm.deptIds"
          :multiple="isMultiple" placeholder="选择参与科室（可多选）" :transmit-props="transmitProps"
          @handleNodeClick="handleClickPartInDept">
        </common-tree-select>
      </el-form-item>
      <el-form-item label="用户姓名" prop="userName">
        <el-input v-model="userForm.userName" placeholder="请输入用户姓名" />
      </el-form-item>
      <el-form-item label="用户性别" prop="genderName">
        <el-select v-model="userForm.genderName" placeholder="请选择用户性别" />
      </el-form-item>
      <el-form-item label="身份证号" prop="userIdNo">
        <el-input v-model="userForm.userIdNo" class="w_100" placeholder="请输入身份证号码" />
      </el-form-item>
      <el-form-item label="联系电话" prop="userTel">
        <el-input v-model="userForm.userTel" class="w_100" placeholder="请输入联系电话" />
      </el-form-item>
      <el-form-item label="用户工号" prop="userWorkNo">
        <el-input v-model="userForm.userWorkNo" placeholder="请输入用户工号" />
      </el-form-item>
      <el-form-item label="职务类别" prop="positionLevelName">
        <el-select v-model="userForm.positionLevelName" placeholder="请选择职务类别" />
      </el-form-item>
      <el-form-item label="用户角色" prop="userRoleIds">
        <el-select v-model="userForm.userRoleIds" multiple placeholder="请选择（可多选）">
          <el-option v-for="item in roleList" :key="item.id" :label="item.roleName" :value="item.id"
            @click="handleRoleSelected(item)" />
        </el-select>
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import { useUpdateCommon } from './composiables/useUpdateCommon'
const {formRef, rules, userForm, userFormtitle, dialogLayoutRef, belongToTreeRef, bePartTreeRef,
  hospAreaDepList, roleList, transmitProps, isMultiple } = useUpdateCommon();
import { useUpdateEvent } from './composiables/useUpdateEvent';
const { loadHospAreaDepTree, loadRoleList, handleRoleSelected, submit, sureMethod, handlePartOfDept, handleClickPartInDept,open,close } = useUpdateEvent({
  formRef,dialogLayoutRef, hospAreaDepList, roleList, userFormtitle, userForm, 
});

onMounted(() => {
  loadHospAreaDepTree();
  loadRoleList();
})
defineExpose({
  open,
  close
});
</script>

<style lang="scss" scoped>
:deep(.el-select .el-input__wrapper) {
  width: 538px;
}
</style>
