<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="值域值(中文)" prop="dictCode" required>
            <el-input v-model.number="form.dictCode" placeholder="请输入值域值(中文)" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="值域值(英文)" prop="dictName">
            <el-input v-model="form.dictName" placeholder="请输入值域值(英文)" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="取值" prop="dictEnName" required>
            <el-input v-model="form.dictEnName" placeholder="请输入取值" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述" prop="dictEnAbbr">
            <el-input v-model="form.dictEnAbbr" placeholder="请输入描述" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import DialogLayout from '/@/components/DialogLayout/index.vue';
import type { FormRules } from 'element-plus';
const title = ref<string>('新增值域项');
const dialogLayout = ref<any>();
const open = (data) => {
  title.value = `${data ? '编辑' : '新增'}值域项`;
  dialogLayout.value.open();
};
const close = () => {
  dialogLayout.value.close();
};

interface BasicForm {
  dictCode: number;
  dictName: string;
  dictEnName: string;
  dictEnAbbr: string;
  remark: string;
}
const form = reactive<BasicForm>({
  dictCode: 0,
  dictName: '',
  dictEnName: '',
  dictEnAbbr: '',
  remark: ''
});
const rules = reactive<FormRules<BasicForm>>({
  dictCode: [
    {
      required: true,
      message: '请输入编码',
      trigger: 'change'
    },
    { type: 'number', message: '编码必须是数字类型' }
  ],
  dictName: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'change'
    }
  ],
  dictEnName: [
    {
      required: true,
      message: '请输入英文名',
      trigger: 'change'
    }
  ],
  dictEnAbbr: [
    {
      required: true,
      message: '请输入缩略名',
      trigger: 'change'
    }
  ],
  remark: [
    {
      required: true,
      message: '请输入描述',
      trigger: 'change'
    }
  ]
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
</script>

<style lang="scss" scoped></style>
