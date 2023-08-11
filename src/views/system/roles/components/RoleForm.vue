<!--
 * @Autor: QMZhao
 * @Date: 2023-07-25 15:05:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-29 09:52:54
 * @Description: 配置表单
-->
<script lang="ts" setup>
import { RoleForm } from 'RoleConfig';

const roleFormProps = withDefaults(
  defineProps<{
    roleFormData: RoleForm;
    roleFormTitle: string;
  }>(),
  {
    roleFormData: (): RoleForm => ({
      id: '',
      // 角色代码
      roleCode: '',
      // 角色名称
      roleName: '',
      roleDisplayName: '',
      sort: 0,
      // 描述
      remark: ''
    }),
    roleFormTitle: ''
  }
);

const roleFormEmits = defineEmits<{
  (event: 'update:roleFormData', roleFormData: RoleForm): void;
  (event: 'handleSubmitRoleForm', status: boolean): void;
}>();

// 暴露事件
defineExpose({
  onOpenRoleFormDialog,
  onCloseRoleFormDialog
});

// 表单 v-model 处理
const setRoleFormData = computed({
  get: () => {
    return roleFormProps.roleFormData;
  },
  set: (value) => {
    roleFormEmits('update:roleFormData', value);
  }
});

const { createMessage } = useMessage();

// 弹窗组件引用
const roleFormDialogRef = ref<any>(null);
// 权限表单组件引用
const roleConfigformRef = ref<any>(null);

// 角色表规则
const roleFormRules = {
  roleCode: [
    {
      required: true,
      message: '请输入角色代码',
      trigger: 'blur'
    }
  ],
  roleName: [
    {
      required: true,
      message: '请输入角色名称',
      trigger: 'blur'
    }
  ]
};

// 调用打开弹窗方法
function onOpenRoleFormDialog(): void {
  roleFormDialogRef.value!.open();
}

// 调用关闭弹窗方法
function onCloseRoleFormDialog(): void {
  roleFormDialogRef.value!.close();
}

/**
 * 提交权限表单事件
 */
async function onSubmitRoleForm() {
  try {
    const valid = await roleConfigformRef.value!.validate();
    valid && loadRoleForm();
  } catch (error) {}
}

// 权限表单请求
async function loadRoleForm() {
  const status = setRoleFormData.value.id ? '修改' : '添加';
  try {
    await fetchSaveRole(setRoleFormData.value);
    createMessage.success(`${status}成功`);
    roleFormEmits('handleSubmitRoleForm', true);
  } catch (error) {
    roleFormEmits('handleSubmitRoleForm', false);
  }
}
</script>

<template>
  <DialogLayout ref="roleFormDialogRef" show-close width="500px" :title="roleFormTitle" @sure="onSubmitRoleForm">
    <el-form
      ref="roleConfigformRef"
      :model="roleFormData"
      :rules="roleFormRules"
      label-width="auto"
      label-position="top"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="系统名称" prop="roleName" class="w-full">
            <el-input v-model="setRoleFormData.roleName" clearable placeholder="请输入名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="角色代码" prop="roleCode">
            <el-input v-model="setRoleFormData.roleCode" clearable placeholder="请输入角色代码" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="显示名称" prop="roleDisplayName">
            <el-input v-model="setRoleFormData.roleDisplayName" clearable placeholder="请输入角色代码" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排序" prop="sort" class="role-form-item">
            <el-input-number v-model="setRoleFormData.sort" class="w-full" :min="0" controls-position="right" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="描述" prop="remark">
            <el-input
              v-model="setRoleFormData.remark"
              :autosize="{ minRows: 2, maxRows: 4 }"
              clearable
              type="textarea"
              maxlength="200"
              placeholder="请输入描述"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </DialogLayout>
</template>

<style lang="scss" scoped>
.role-form-item {
  :deep(.el-input-number) {
    width: 100%;
  }
}
</style>
