<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-21 11:04:27
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 
-->
<template>
  <DialogLayout ref="hospFormRef" show-close :title="title" :sure-method="submitValidate">
    <el-form ref="hospAreaFormRef" :model="hospAreaForm" :rules="rules" label-width="auto" label-position="right">
      <el-form-item label="编码" prop="hospAreaCode" required>
        <el-input v-model="hospAreaForm.hospAreaCode" type="text" placeholder="请输入院区编码" />
      </el-form-item>
      <el-form-item label="院区名称" prop="hospAreaName" required>
        <el-input v-model="hospAreaForm.hospAreaName" placeholder="请输入院区名称" />
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus';
import areaType from 'areaTypeModules';

const hospAreaFormRef = ref();
const title = ref('新增院区');
const hospFormRef = ref<any>();
const rules = reactive<FormRules<areaType.hospAreaInfo>>({
  id: [
    {
      required: true,
      message: '请输入编码',
      trigger: 'change'
    },
    { type: 'string', message: '编码必须是数字类型' }
  ],
  hospAreaName: [
    {
      required: true,
      message: '请输入院区名称',
      trigger: 'change'
    }
  ]
});
const hospAreaForm = ref<areaType.hospAreaFormType>({
  id: '',
  hospAreaCode: '',
  hospAreaName: ''
});

const hospFormEmits = defineEmits<{
  (event: 'handleSubmitHosptForm', status: boolean): void;
}>();

/**
 * 验证表单
 */
const submitValidate = async () => {
  const result = await hospAreaFormRef.value.validate();
  if (result) {
    sureMethod();
  }
};

/**
 * 点击新增/编辑的回调函数
 * @param hospInfo 院区信息
 */
const open = (hospInfo: areaType.hospAreaInfo) => {
  title.value = `${hospInfo ? '编辑' : '新增'}院区`;
  // 新增
  if (!hospInfo) {
    hospAreaForm.value = {
      id: '',
      hospAreaCode: '',
      hospAreaName: ''
    };
    hospFormRef.value.open();
    return;
  }
  // 编辑
  const { id, hospAreaCode, hospAreaName } = hospInfo;
  hospAreaForm.value = Object.assign(hospAreaForm.value, {
    id,
    hospAreaCode,
    hospAreaName
  });
  hospFormRef.value.open();
};
const close = () => {
  hospFormRef.value.close();
};

/**
 * 表单验证成功，发送更新院区请求
 */
const sureMethod = async () => {
  try {
    await updateHosptAreaInfo(hospAreaForm.value);
    hospFormEmits('handleSubmitHosptForm', true);
  } catch (error) {
    hospFormEmits('handleSubmitHosptForm', false);
  }
};
defineExpose({
  open,
  close
});
</script>

<style lang="scss" scoped></style>
