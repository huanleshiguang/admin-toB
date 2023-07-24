<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-24 17:18:30
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
      <el-form-item label="类型" prop="type" required>
        <el-button>医生</el-button>
        <el-button>护士</el-button>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group>
          <el-radio label="男" />
          <el-radio label="女" />
          <el-radio label="未知" />
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
import DialogLayout from '/@/components/DialogLayout/index.vue';
import { rules } from './useCommon'

const title = ref('新增人员');
const dialogLayout = ref<any>();
const open = (data) => {
  console.log(data, 'dattt');
  title.value = `${data ? '编辑' : '新增'}人员`;
  Object.assign(form, data);
  console.log(form, 'formmmmmmmmmm')
  dialogLayout.value.open();
};
const close = () => {
  dialogLayout.value.close();
};
// const emits = defineEmits(['reFetchtableList']);
const form = ref({
  deptName: '',
  bePartOfDeptName: '',
  userName: '',
  loginName: '',
  type: '',
  genderName: '',
  phone: '',
  userWorkCode: ''
});

const formRef = ref<any>();

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
