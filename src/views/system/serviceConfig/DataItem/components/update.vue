<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="编码" prop="dataItemCode" required>
            <el-input v-model="form['dataItemCode']" :disabled="!!form.id" placeholder="请输入编码" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称" prop="dataItemName" required>
            <el-input v-model="form['dataItemName']" placeholder="请输入名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="数据类型" prop="dictEnName">
            <el-input v-model="form['dictEnName']" placeholder="请输入英文名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="控件类型" prop="dictEnAbbr">
            <el-input v-model="form['dictEnAbbr']" placeholder="请输入缩略名" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="描述" prop="remark">
        <el-input v-model="form['remark']" type="textarea" placeholder="请输入描述" />
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
import { DataItem } from 'Dictionary';
import type { FormRules } from 'element-plus';
import { cloneDeep } from 'lodash-es';
const { createMessage } = useMessage();
const title = ref<string>('新增数据项配置');
const dialogLayout = ref<any>();
/**
 * tree缓存数据
 */
const cacheData = ref<DataItem[]>([]);
const rules = reactive<FormRules<DataItem>>({
  dataItemCode: [
    {
      required: true,
      message: '请输入编码',
      trigger: 'change'
    }
  ],
  dataItemName: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'change'
    }
  ]
  // dictEnName: [
  //   {
  //     required: true,
  //     message: '请输入英文名',
  //     trigger: 'change'
  //   }
  // ],
  // dictEnAbbr: [
  //   {
  //     required: true,
  //     message: '请输入缩略名',
  //     trigger: 'change'
  //   }
  // ],
  // remark: [
  //   {
  //     required: true,
  //     message: '请输入描述',
  //     trigger: 'change'
  //   }
  //]
});
const formRef = ref<any>();
let form = reactive<DataItem>({
  id: '',
  dataItemName: '',
  dataItemCode: '',
  dataItemTypeCode: '',
  dataItemTypeName: '',
  outInTypeCode: '',
  outInTypeName: '',
  useValueCode: '',
  useValueName: ''
});
/**
 * 打开方法
 * @param data 表格行数据
 * @param parentData 父级数据
 */
const open = (data: DictInfo, parentData: DictInfo) => {
  title.value = `${data?.id ? '编辑' : '新增'}数据项配置`;
  if (data) {
    form = Object.assign(form, cloneDeep(data));
    if (form.parentId === '0') {
      form.parentId = '';
    } else {
      cacheData.value = [parentData];
    }
    // form = data;
  } else {
    form = reactive<DictInfo>({
      parentId: '',
      dictCode: '',
      dictName: '',
      dictEnName: '',
      dictEnAbbr: '',
      remark: ''
    });
  }

  dialogLayout.value.open();
};
/**
 * 判断节点是否禁用
 * @param data
 */
const isDisabled = (data) => {
  return data.id === form.id;
};
/**
 * 弹窗关闭方法
 */
const close = () => {
  formRef.value.resetFields();
  dialogLayout.value.close();
};
/**
 * 懒加载tree
 * @param node 当前节点
 * @param resolve 返回方法
 */
const loadTreeData = async (node, resolve) => {
  // 第一级
  if (node.level === 0) {
    const result = await fetchDictCategoryLazy('0');
    resolve(result);
  } else {
    // 其他级
    const result = await fetchDictCategoryLazy(node.data.id);
    resolve(result);
  }
};

// interface BasicForm {
//   dictCode: string;
//   dictName: string;
//   dictEnName: string;
//   dictEnAbbr: string;
//   remark: string;
// }

const emit = defineEmits(['refresh']);
/**
 * 表格提交方法
 */
const submit = async () => {
  const result = await formRef.value.validate();
  if (result) {
    const { id } = form;
    try {
      const result = await fetchBaseDict({ ...form, parentId: form.parentId ? form.parentId : '0' });
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
