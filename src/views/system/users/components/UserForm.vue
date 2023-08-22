<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-21 18:29:02
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 人员管理新增与编辑
-->
<template>
  <DialogLayout ref="dialogLayoutRef" show-close :title="userFormtitle" @sure="sureMethod">
    <el-form ref="userFormRef" :model="userForm" :rules="rules" label-width="auto" label-position="right">
      <el-form-item label="所属科室" prop="deptId">
        <CommonTreeSelect
          ref="belongToTreeRef"
          v-model:model-data="userForm.deptId"
          :data="hospAreaDepList"
          :transmit-props="transmitProps"
          @handle-node-click="handlePartOfDept"
        ></CommonTreeSelect>
      </el-form-item>
      <el-form-item label="参与科室" prop="deptIds">
        <CommonTreeSelect
          ref="bePartTreeRef"
          v-model:model-data="userForm.deptIds"
          :data="hospAreaDepList"
          :multiple="true"
          placeholder="选择参与科室（可多选）"
          :transmit-props="transmitProps"
          @handle-node-click="handleClickPartInDept"
        ></CommonTreeSelect>
      </el-form-item>
      <el-form-item label="用户姓名" prop="userName">
        <el-input v-model="userForm.userName" placeholder="请输入用户姓名" />
      </el-form-item>
      <el-form-item label="用户性别" prop="genderName">
        <el-select v-model="userForm.genderName" placeholder="请选择用户性别">
          <el-option
            v-for="item in dictGenderList"
            :key="item.rangeValue"
            :label="item.rangeName"
            :value="item.rangeName"
            @click="onChangeGender(item)"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="证件类型" prop="idCategoryName">
        <el-select v-model="userForm.idCategoryName" placeholder="请选择证件类型">
          <el-option
            v-for="item in dictCertificateTypeList"
            :key="item.rangeValue"
            :label="item.rangeName"
            :value="item.rangeName"
            @click="onChangeCertificate(item)"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="证件号码" prop="userIdNo">
        <el-input v-model="userForm.userIdNo" class="w_100" placeholder="请输入身份证号码" />
      </el-form-item>
      <el-form-item label="联系电话" prop="userTel">
        <el-input v-model="userForm.userTel" class="w_100" placeholder="请输入联系电话" />
      </el-form-item>
      <el-form-item label="用户工号" prop="userWorkNo">
        <el-input v-model="userForm.userWorkNo" placeholder="请输入用户工号" />
      </el-form-item>
      <el-form-item label="职务类别" prop="positionLevelName">
        <el-select v-model="userForm.positionLevelName" placeholder="请选择职务类别">
          <el-option
            v-for="item in dictPositionLevelList"
            :key="item.rangeValue"
            :label="item.rangeName"
            :value="item.rangeName"
            @click="onChangePosition(item)"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="用户角色" prop="userRoleIds">
        <el-select v-model="userForm.userRoleIds" multiple placeholder="请选择（可多选）">
          <el-option v-for="item in roleList" :key="item.id" :label="item.roleName" :value="item.id" />
        </el-select>
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import { useUpdateCommon } from './composiables/useUpdateCommon';
import { useUpdateEvent } from './composiables/useUpdateEvent';
import CommonTreeSelect from '/@/components/common/CommonTreeSelect.vue';
const { createMessage } = useMessage();
const {
  rules,
  userForm,
  userFormtitle,
  dialogLayoutRef,
  belongToTreeRef,
  bePartTreeRef,
  hospAreaDepList,
  roleList,
  transmitProps,
  userFormRef,
  dictGenderList,
  dictPositionLevelList,
  dictCertificateTypeList
} = useUpdateCommon();

const {
  loadHospAreaDepTree,
  loadRoleList,
  open,
  close,
  handlePartOfDept,
  handleClickPartInDept,
  onChangeGender,
  onChangePosition,
  loadDictGenderList,
  loadPositionLevel,
  loadCertificateType,
  onChangeCertificate
} = useUpdateEvent({
  dialogLayoutRef,
  hospAreaDepList,
  roleList,
  userFormtitle,
  userForm,
  dictGenderList,
  dictPositionLevelList,
  dictCertificateTypeList
});
const userFormEmits = defineEmits<{
  (event: 'handleSubmitUserForm', status: boolean): void;
}>();
onMounted(() => {
  // 加载院区科室组合Tree
  loadHospAreaDepTree();
  loadRoleList();
  // 获取字典信息-性别
  loadDictGenderList();
  // 获取字典信息-职务类别
  loadPositionLevel();
  // 获取证件号码
  loadCertificateType();
});
defineExpose({
  open,
  close
});

/**
 * 点击确认后的回调
 */
const sureMethod = async () => {
  const result = await userFormRef.value?.validate();
  if (result) {
    // 验证成功，保存用户信息
    try {
      const result = await updateUserInfo(userForm.value);
      if (result) {
        createMessage.success('修改成功');
        // 更新Table
        userFormEmits('handleSubmitUserForm', true);
      }
    } catch (error) {
      createMessage.error('修改失败');
      console.error(error);
    }
  }
};
</script>
<style lang="scss" scoped>
:deep(.el-select .el-input__wrapper) {
  width: 538px;
}
</style>
