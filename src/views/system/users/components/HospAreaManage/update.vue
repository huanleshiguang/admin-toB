<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 18:37:58
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-18 14:49:18
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HospAreaManage\update.vue
 * @Description: 
-->
<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit" @sure="sureMethod">
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
import { apiUpdateHosptAreaInfo } from '/@/api/system/user';
import type { updateHospAreaInfo } from '/@/api/system/types/user'
const title = ref('新增院区');
const dialogLayout = ref<any>();


const open = (data) => {
  title.value = `${data ? '编辑' : '新增'}院区`;
  Object.assign(form, data);
  dialogLayout.value.open();
};
const close = () => {
  dialogLayout.value.close();
};
const emits = defineEmits(['reFetchtableList']);
const form = reactive<updateHospAreaInfo>({
  id: '',
  hospAreaCode: '',
  hospAreaName: ''
});
const rules = reactive<FormRules<updateHospAreaInfo>>({
  hospAreaCode: [
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
  apiUpdateHosptAreaInfo(form).then((res) => {
    if (res) {
      dialogLayout.value.close()
      //重新获取tableList
      emits('reFetchtableList')
    }
    console.log(res, 'res');
  })
  console.log(form, 'sure form');
}
</script>

<style lang="scss" scoped></style>
