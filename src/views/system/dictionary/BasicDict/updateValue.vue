<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="值域值(中文)" prop="rangeName" required>
            <el-input v-model="form.rangeName" placeholder="请输入值域值(中文)" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="值域值(英文)" prop="rangeEnName">
            <el-input v-model="form.rangeEnName" placeholder="请输入值域值(英文)" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="取值" prop="rangeValue" required>
            <el-input v-model="form.rangeValue" placeholder="请输入取值" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述" prop="remark">
            <el-input v-model="form.remark" placeholder="请输入描述" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
// import DialogLayout from '/@/components/DialogLayout/index.vue';
import type { FormRules } from 'element-plus';
import { DictValueInfo } from '/@/api/system/types/dict';
import { cloneDeep } from 'lodash-es';
// import { updateBaseDictValue } from '/@/api/system/dict';
// import { useMessage } from '/@/hooks/common/useMessage';
const { createMessage } = useMessage();

let form = reactive<DictValueInfo>({
  dictId: '',
  rangeName: '',
  rangeEnName: '',
  rangeValue: '',
  remark: ''
});
const title = ref<string>('新增值域项');
const dialogLayout = ref<any>();
const open = (data) => {
  const { dictName } = data;
  title.value = `${data?.id ? '编辑' : '新增'}-${dictName}-值域项`;
  if (data?.id) {
    form = Object.assign(form, cloneDeep(data));
  } else {
    form = reactive<DictValueInfo>({
      dictId: data.dictId,
      rangeName: '',
      rangeEnName: '',
      rangeValue: '',
      remark: ''
    });
  }

  dialogLayout.value.open();
};
const close = () => {
  dialogLayout.value.close();
};

const rules = reactive<FormRules<DictValueInfo>>({
  rangeName: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'change'
    }
  ],

  rangeValue: [
    {
      required: true,
      message: '请输入缩略名',
      trigger: 'change'
    }
  ]
});
const formRef = ref<any>();
const emit = defineEmits(['refresh']);
const submit = async () => {
  const result = await formRef.value.validate();
  if (result) {
    const { id } = form;
    try {
      const result = await updateBaseDictValue(form);
      console.log(result);

      createMessage.success(`${id ? '编辑' : '新增'}成功`);
      emit('refresh');
      close();
    } catch (e) {
      createMessage.error(e || `${id ? '编辑' : '新增'}失败`);
    }
  }
};
defineExpose({
  open,
  close
});
</script>

<style lang="scss" scoped></style>
