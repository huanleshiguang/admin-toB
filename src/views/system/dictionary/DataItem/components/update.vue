<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">
      <el-form-item label="上级分类" prop="parentId">
        <el-tree-select
          v-model="form['parentId']"
          class="w_100"
          clearable
          check-strictly
          :data="treeData"
          :props="{ label: 'categoryName', value: 'id', children: 'children', disabled: isDisabled }"
          placeholder="请选择上级分类"
          :render-after-expand="false"
        />
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="字典项(中文)" prop="itemName" required>
            <el-input v-model="form.itemName" placeholder="请输入值域值(中文)" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="字典项(英文)" prop="itemEnName">
            <el-input v-model="form.itemEnName" placeholder="请输入值域值(英文)" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="取值" prop="itemValue" required>
            <el-input v-model="form.itemValue" placeholder="请输入取值" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述" prop="remark">
            <el-input v-model="form.remark" placeholder="请输入描述" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="排序" prop="sortNo">
            <el-input-number
              v-model="form['sortNo']"
              class="w_100"
              controls-position="right"
              placeholder="请输入排序"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="版本" prop="itemVersion">
            <el-input v-model="form.itemVersion" placeholder="请输入版本" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus';
import { BaseDictItem } from 'Dictionary';
import { cloneDeep } from 'lodash-es';
const { createMessage } = useMessage();

defineProps({
  treeData: {
    type: Array,
    default: () => []
  }
});

let form = reactive<BaseDictItem>({
  parentId: '',
  itemName: '',
  itemEnName: '',
  itemValue: '',
  itemVersion: '',
  remark: ''
});
const title = ref<string>('');
const dialogLayout = ref<any>();
const open = ({ parent, data }) => {
  const { categoryName } = parent;
  title.value = `${data?.id ? '编辑' : '新增'}-${categoryName}-字典项`;
  if (data?.id) {
    form = Object.assign(form, cloneDeep(data));
  } else {
    form = reactive<BaseDictItem>({
      parentId: '',
      itemName: '',
      itemEnName: '',
      itemValue: '',
      itemVersion: '',
      remark: ''
    });
  }

  dialogLayout.value.open();
};
const close = () => {
  dialogLayout.value.close();
};

/**
 * 判断节点是否禁用
 * @param data
 */
const isDisabled = (data) => {
  return data.id === form.id;
};

const rules = reactive<FormRules<BaseDictItem>>({
  itemName: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'change'
    }
  ],

  itemValue: [
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
      const result = await fetchBaseDictValue(form);
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
  width: 100% !important;
}
</style>
