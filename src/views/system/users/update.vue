<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-29 18:06:29
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 人员管理新增编辑组件
-->
<template>
  <DialogLayout ref="dialogLayoutRef" show-close :title="title" :sure-method="submit" @sure="sureMethod">
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
import { cloneDeep } from 'lodash-es';
import { rules } from './useCommon';
import type { userInfo } from '/@/api/system/types/user';
import type { resHospAreaDepTree, resRoleList } from '/@/api/system/types/user'
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
const roleList = ref<resRoleList[]>([]);
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
    roleList.value = await fetchUserList();
  } catch (error) {
    console.log(error);
  }
}
// 处理角色选中
const handleRoleSelected = (item: resRoleList) => {
  // console.log(item.id,'item.id');
  // console.log(userForm.value.userRoleIds);

  // userForm.value.userRoleIds.value = item.id
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
