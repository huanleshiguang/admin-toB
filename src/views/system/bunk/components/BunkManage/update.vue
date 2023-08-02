<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-02 14:59:40
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 床位管理新增与编辑 
-->
<template>
  <DialogLayout ref="dialogLayoutRef" show-close :title="title" :sure-method="submit" @sure="sureMethod">
    <el-form ref="formRef" :model="userForm" label-width="auto" label-position="right">
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
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash-es';
// import { rules } from './useCommon';
import type { userInfo } from '/@/api/system/types/user';
import type { resRoleInfo } from '/@/api/system/types/user'
import type { resHospAreaDepTree } from '/@/api/system/types/area'
const title = ref<string>('新增人员');
const dialogLayoutRef = ref();
const belongToTreeRef = ref()
const bePartTreeRef = ref()
const isMultiple = ref<Boolean>(true)
const userForm = ref<any>({
  deptId: '',
  deptIds: [],
  userName: '',
  userIdNo: '',
  positionLevelName: '',
  genderName: '',
  userTel: '',
  userWorkNo: '',
  userRoleIds: []
});
/**
 * 定义需要传给公共组件<common-tree-select />的字段（用于tree展示）
 */
const transmitProps = {
  id: 'id',
  type: 'type',
  label: 'areaDeptName',
  children: 'children'
};
const hospAreaDepList = ref<resHospAreaDepTree[]>([]);
const roleList = ref<resRoleInfo[]>([]);
const formRef = ref<any>();
onMounted(() => {
  loadHospAreaDepTree()
  loadRoleList()
})
// 获取院区科室Tree
const loadHospAreaDepTree = async () => {
  try {
    hospAreaDepList.value = await fetchHospAreaDepTree();
  } catch (error) {
    console.log(error);
  }
}
// 获取角色信息
async function loadRoleList() {
  try {
    roleList.value = await fetchRoleList();
  } catch (error) {
    console.log(error);
  }
}
const open = (data: userInfo) => {
  title.value = `${data ? '编辑' : '新增'}人员`;
  userForm.value = data ? cloneDeep(data) : {}
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
const handlePartOfDept = () => { }
const handleClickPartInDept = () => { }
</script>

<style lang="scss" scoped>
:deep(.el-select .el-input__wrapper) {
  width: 538px;
}
</style>
