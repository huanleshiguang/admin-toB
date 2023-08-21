<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="操作名称" prop="operName" required>
            <el-input v-model="form['operName']" :disabled="!!form.id" placeholder="请输入编码" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="操作类型" prop="operTypeCode" required>
            <el-select v-model="form['operTypeCode']" placeholder="请输入名称" @change="selectChange">
              <FormOptions ref="opType" :options="options" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="操作限制" prop="operLimitCode">
        <el-radio-group v-model="form['operLimitCode']" placeholder="请输入英文名称">
          <FormOptions type="radio" :options="options1" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="使用数据项" prop="dataItem">
        <el-select
          v-model="form['dataItem']"
          class="w_100"
          filterable
          multiple
          collapse-tags
          placeholder="请选择使用数据项"
          @change="changeDataItem"
        >
          <FormOptions ref="dataItemRef" :options="options2" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="dataItemSortOptions.length" label="数据项排序">
        <SortDragTree :options="dataItemSortOptions" />
      </el-form-item>
      <el-form-item label="护理记录格式" prop="nurseRecordFormat">
        <FormulaInput
          v-model="form['nurseRecordFormat']"
          class="w_100"
          :options="dataItemSortOptions"
          placeholder="请输入护理记录格式"
        />
      </el-form-item>
      <el-form-item label="护理记录格式" prop="nurseDocFormat">
        <FormulaInput
          v-model="form['nurseDocFormat']"
          class="w_100"
          :options="dataItemSortOptions"
          placeholder="请输入护理记录格式"
        />
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts" name="UpdateProjectOperate">
import { ProjectOperate } from 'Dictionary';
import type { FormRules } from 'element-plus';
import { cloneDeep, debounce } from 'lodash-es';
import FormOptions from '/@/components/common/FormOptions.vue';
import { FormulaInput, SortDragTree } from '/@/components/common';
const { createMessage } = useMessage();
const title = ref<string>('新增项目操作配置');
const dialogLayout = ref<any>();

const rules = reactive<FormRules<ProjectOperate>>({
  operName: [
    {
      required: true,
      message: '请输入编码',
      trigger: 'change'
    }
  ],
  operTypeCode: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'change'
    }
  ]
});
const formRef = ref<any>();
let form = reactive<ProjectOperate>({
  id: '',
  operName: '',
  operTypeCode: '',
  operTypeName: '',
  operLimitCode: '',
  operLimitName: '',
  canDelete: '',
  nurseRecordFormat: '',
  nurseDocFormat: '',
  dataItem: []
});
const options = [
  {
    label: '管路操作',
    value: '1'
  },
  {
    label: '皮肤操作',
    value: '2'
  }
];
const options1 = [
  {
    label: '一次',
    value: '3'
  },
  {
    label: '多次',
    value: '4'
  }
];
const options2 = [
  {
    label: '颜色',
    value: '11'
  },
  {
    label: '尿量',
    value: '244'
  },
  {
    label: '流速',
    value: '31'
  },
  {
    label: '大小',
    value: '441'
  }
];
const opType = ref();
const dataItemRef = ref();
const dataItemSortOptions = ref([]);
const selectChange = () => {
  const result = opType.value.getCurrentOptions(form.operTypeCode);
  console.log(result, '------?>>');
};
const changeDataItem = debounce(() => {
  dataItemSortOptions.value = dataItemRef.value.getCurrentOptions(form.dataItem);
  console.log(dataItemSortOptions.value);
}, 100);
/**
 * 打开方法
 * @param data 表格行数据
 * @param parentData 父级数据
 */
const open = (data: ProjectOperate) => {
  title.value = `${data?.id ? '编辑' : '新增'}项目操作配置`;
  if (data) {
    form = Object.assign(form, cloneDeep(data));
    // form = data;
  } else {
    dataItemSortOptions.value = [];
    form = reactive<ProjectOperate>({
      operName: '',
      operTypeCode: '',
      operTypeName: '',
      operLimitCode: '',
      operLimitName: '',
      canDelete: '',
      nurseRecordFormat: '',
      nurseDocFormat: '',
      dataItem: []
    });
  }

  dialogLayout.value.open();
};

/**
 * 弹窗关闭方法
 */
const close = () => {
  formRef.value.resetFields();
  dialogLayout.value.close();
};

const emit = defineEmits(['refresh']);
/**
 * 表格提交方法
 */
const submit = async () => {
  const result = await formRef.value.validate();
  if (result) {
    const { id } = form;
    try {
      const result = await fetchBaseDict({ ...form });
      console.log(result);

      createMessage.success(`${id ? '编辑' : '新增'}成功`);
      emit('refresh');
      close();
    } catch (e) {
      // createMessage.error(e || `${id ? '编辑' : '新增'}失败`);
    }
  }
};
defineExpose({
  open,
  close
});
</script>

<style lang="scss" scoped>
.w_100 {
  width: 100%;
}
</style>
