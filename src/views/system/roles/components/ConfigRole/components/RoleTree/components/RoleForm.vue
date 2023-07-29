<!--
 * @Autor: QMZhao
 * @Date: 2023-07-25 15:05:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-28 11:36:57
 * @Description: 配置表单
 * @FilePath: \servious-illness-admin\src\views\system\roles\components\ConfigRole\components\RoleTree\components\RoleForm.vue
-->
<template>
  <el-form ref="formRef" :model="roleFormData" :rules="roleFormRules" label-width="auto" label-position="right">
    <el-row>
      <el-col :span="24">
        <el-form-item label="系统名称" prop="roleName" class="w-full">
          <el-input v-model="setRoleFormData.roleName" clearable placeholder="请输入名称" />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="显示名称" prop="roleCode">
          <el-input v-model="setRoleFormData.roleCode" clearable placeholder="请输入角色代码" />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="角色代码" prop="roleCode">
          <el-input v-model="setRoleFormData.roleCode" clearable placeholder="请输入角色代码" />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="排序" prop="roleCode">
          <el-input-number
            v-model="setRoleFormData.roleCode"
            class="mx-4"
            :min="1"
            :max="10"
            controls-position="right"
          />
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
            placeholder="请输入描述"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
const roleFormProps = withDefaults(
  defineProps<{
    roleFormData: RoleConfig.RoleForm;
  }>(),
  {
    roleFormData: (): RoleConfig.RoleForm => ({
      id: '',
      // 角色代码
      roleCode: '',
      // 角色名称
      roleName: '',
      // 描述
      remark: ''
    })
  }
);

const roleFormEmits = defineEmits<{
  (event: 'update:roleFormData', roleFormData: RoleConfig.RoleForm): void;
}>();

// 表单 v-model 处理
const setRoleFormData = computed({
  get: () => {
    return roleFormProps.roleFormData;
  },
  set: (value) => {
    roleFormEmits('update:roleFormData', value);
  }
});

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
</script>
<style lang="scss" scoped></style>
