<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-26 18:43:22
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 
-->
<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit" @sure="sureMethod">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">
      <el-form-item label="科室" prop="deptName" required>
        <el-input v-model="form.deptName" type="text" placeholder="请输入科室名称" />
      </el-form-item>
      <el-form-item label="所属科室" prop="bePartOfDeptName" required>
        <el-select v-model="form.bePartOfDeptName" class="w_100" placeholder="请选择所属科室" />
      </el-form-item>
      <el-form-item label="姓名" prop="userName" required>
        <el-input v-model="form.userName" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="登录名" prop="loginName" required>
        <el-input v-model="form.loginName" placeholder="请输入登录名" />
      </el-form-item>
      <el-form-item label="类型" prop="positionLevelName" required>
        <el-radio-group v-model="form.positionLevelName">
          <el-radio-button label="1">医生</el-radio-button>
          <el-radio-button label="2">护士</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="性别" prop="genderName">
        <el-radio-group v-model="form.genderName">
          <el-radio label="0">男</el-radio>
          <el-radio label="1">女</el-radio>
          <el-radio label="2">未知</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="工号" prop="userWorkOrder">
        <el-input v-model="form.userWorkCode" placeholder="请输入工号" />
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import { rules } from './useCommon';
import type { userInfo } from '/@/api/system/types/user';
const title = ref<string>('新增人员');
const dialogLayout = ref();
const form = ref({
  deptName: '',
  bePartOfDeptName: '',
  userName: '',
  loginName: '',
  positionLevelName: '',
  genderName: '',
  phone: '',
  userWorkCode: ''
});
const formRef = ref();
const open = (data:userInfo) => {
  console.log(data, 'dattt');
  title.value = `${data ? '编辑' : '新增'}人员`;
  Object.assign(form, data);
  console.log(form, 'formmmmmmmmmm');
  dialogLayout.value.open();
};
const close = () => {
  dialogLayout.value.close();
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
  //     dialogLayout.value.close()
  //     // 重新获取tableList
  //     emits('reFetchtableList')
  //   }
  // }).catch((error) => { throw (error) })
  // console.log(form.value, 'sure form');
}

</script>

<style lang="scss" scoped></style>
