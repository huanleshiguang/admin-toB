<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-13 18:57:53
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 
-->
<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">

      <el-form-item label="编码" prop="hospAreaCode" required>
        <el-input v-model="form.hospAreaCode" type="text" placeholder="请输入描述" />
      </el-form-item>
      <el-form-item label="院区名称" prop="hospAreaName" required>
        <el-input v-model="form.hospAreaName" placeholder="请输入描述" />
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import DialogLayout from '/@/components/DialogLayout/index.vue';
import type { FormRules } from 'element-plus';
const title = ref('新增院区');
const dialogLayout = ref<any>();
const open = (data) => {
  title.value = `${data ? '编辑' : '新增'}院区`;
  dialogLayout.value.open();
};
const close = () => {
  dialogLayout.value.close();
};

interface BasicForm {
  hospAreaCode: number;
  hospAreaName: string;
}
const form = reactive<BasicForm>({
  hospAreaCode: 0,
  hospAreaName: '',

});
const rules = reactive<FormRules<BasicForm>>({
  hospAreaCode: [
    {
      required: true,
      message: '请输入编码',
      trigger: 'change'
    },
    { type: 'number', message: '编码必须是数字类型' }
  ],
  hospAreaName: [
    {
      required: true,
      message: '请输入院区名称',
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

<style lang="scss" scoped>

</style>
