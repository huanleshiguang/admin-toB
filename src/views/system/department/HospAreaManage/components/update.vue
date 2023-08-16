<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-11 16:15:04
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 
-->
<template>
  <DialogLayout ref="dialogLayoutRef" show-close :title="title" :sure-method="submit" @sure="sureMethod">
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
const dialogLayoutRef = ref<any>();
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
  hospAreaCode: '',
  hospAreaName: ''
});
const emits = defineEmits(['reFetchtableList']);
const submit = async () => {
  const result = await hospAreaFormRef.value.validate();
  if (result) {
    // dosomething
  }
};
const open = (data: areaType.hospAreaInfo) => {
  title.value = `${data ? '编辑' : '新增'}院区`;
  // 新增
  if (!data) {
    hospAreaForm.value = {
      hospAreaCode: '',
      hospAreaName: ''
    };
    dialogLayoutRef.value.open();
    return;
  }
  // 编辑
  const { hospAreaCode, hospAreaName } = data;
  hospAreaForm.value = Object.assign(hospAreaForm.value, {
    hospAreaCode,
    hospAreaName
  });
  dialogLayoutRef.value.open();
};
const close = () => {
  dialogLayoutRef.value.close();
};
const sureMethod = () => {
  updateHosptAreaInfo(hospAreaForm.value)
    .then((res) => {
      if (res) {
        dialogLayoutRef.value.close();
        // 重新获取tableList
        emits('reFetchtableList');
      }
    })
    .catch((error) => {
      throw error;
    });
};
defineExpose({
  open,
  close
});
</script>

<style lang="scss" scoped></style>
