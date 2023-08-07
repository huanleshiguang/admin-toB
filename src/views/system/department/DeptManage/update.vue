<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-08-05 14:56:17
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 
-->
<template>
  <DialogLayout ref="dialogLayoutRef" show-close :title="title" :sure-method="submit" @sure="sureMethod">
    <el-form ref="formRef" :model="deptForm" :rules="rules" label-width="auto" label-position="right">
      <el-form-item label="科室" prop="deptName" required>
        <el-input v-model="deptForm.deptName" type="text" placeholder="请输入科室名称" />
      </el-form-item>
      <el-form-item label="所属科室" prop="bePartOfDeptName" required>
        <el-select v-model="deptForm.bePartOfDeptName" class="w_100" placeholder="请选择所属科室" />
      </el-form-item>
      <el-form-item label="姓名" prop="userName" required>
        <el-input v-model="deptForm.userName" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="登录名" prop="loginName" required>
        <el-input v-model="deptForm.loginName" placeholder="请输入登录名" />
      </el-form-item>
      <el-form-item label="类型" prop="positionLevelName" required>
        <el-radio-group v-model="deptForm.positionLevelName">
          <el-radio-button label="1">医生</el-radio-button>
          <el-radio-button label="2">护士</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="性别" prop="genderName">
        <el-radio-group v-model="deptForm.genderName">
          <el-radio label="0">男</el-radio>
          <el-radio label="1">女</el-radio>
          <el-radio label="2">未知</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="deptForm.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="工号" prop="userWorkOrder">
        <el-input v-model="deptForm.userWorkCode" placeholder="请输入工号" />
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash-es';
import { useCommon } from './useCommon'
import * as userType from 'userTypeModules'
const {  rules,deptForm } = useCommon();
const title = ref('新增人员');
const dialogLayoutRef = ref();
const formRef = ref();

const open = (data: userType.userInfo) => {
  title.value = `${data ? '编辑' : '新增'}人员`;
  deptForm.value = data ? cloneDeep(data) : {}
  dialogLayoutRef.value.open();
};
const close = () => {
  dialogLayoutRef.value.close();
};
const submit = async () => {
  const result = await formRef.value.validate();
  if (result) {
    // dosomething
  }
};
defineExpose({
  open,
  close
});
const sureMethod = () => {
  // updateHosptAreaInfo(form.value).then((res) => {
  //   if (res) {
  //     dialogLayoutRef.value.close()
  //     // 重新获取tableList
  //     emits('reFetchtableList')
  //   }
  // }).catch((error) => { throw (error) })
  // console.log(form.value, 'sure form');
}

</script>

<style lang="scss" scoped></style>
