<template>
  <DialogLayout ref="dialogLayout" show-close :title="title" :sure-method="submit">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">
      <el-form-item label="上级分类" prop="parentId">
        <el-tree-select
          v-model="form['parentId']"
          class="w100"
          lazy
          :load="loadTreeData"
          :props="{ label: 'dictName', children: 'children', isLeaf: 'isLeaf' }"
          :cache-data="cacheData"
          placeholder="请选择上级分类"
          :render-after-expand="false"
        />
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="编码" prop="dictCode" required>
            <el-input v-model="form['dictCode']" placeholder="请输入编码" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称" prop="dictName" required>
            <el-input v-model="form['dictName']" placeholder="请输入名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="英文名称" prop="dictEnName" required>
            <el-input v-model="form['dictEnName']" placeholder="请输入英文名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="缩略名" prop="dictEnAbbr" required>
            <el-input v-model="form['dictEnAbbr']" placeholder="请输入缩略名" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="描述" prop="remark" required>
        <el-input v-model="form['remark']" type="textarea" placeholder="请输入描述" />
      </el-form-item>
    </el-form>
  </DialogLayout>
</template>

<script setup lang="ts">
// import DialogLayout from '/@/components/DialogLayout/index.vue';
import { DictInfo } from '/@/api/system/types/dict';
// import { updateBaseDict } from '/@/api/system/dict';
import type { FormRules } from 'element-plus';
// import { useMessage } from '/@/hooks/common/useMessage';
import { cloneDeep } from 'lodash-es';
const { createMessage } = useMessage();
const title = ref<string>('新增数据字典');
const dialogLayout = ref<any>();
const rules = reactive<FormRules<DictInfo>>({
  dictCode: [
    {
      required: true,
      message: '请输入编码',
      trigger: 'change'
    }
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
let form = reactive<DictInfo>({
  parentId: '',
  dictCode: '',
  dictName: '',
  dictEnName: '',
  dictEnAbbr: '',
  remark: ''
});

const open = (data: DictInfo) => {
  title.value = `${data?.id ? '编辑' : '新增'}基础字典`;
  if (data) {
    form = Object.assign(form, cloneDeep(data));
    // form = data;
  } else {
    form = reactive<DictInfo>({
      dictCode: '',
      dictName: '',
      dictEnName: '',
      dictEnAbbr: '',
      remark: ''
    });
  }

  dialogLayout.value.open();
};

const close = () => {
  formRef.value.resetFields();
  dialogLayout.value.close();
};
/**
 * tree缓存数据
 */
const cacheData = [];

const loadTreeData = (node, resolve) => {
  console.log(node);
  if (node.level === 0) {
    resolve([]);
  } else {
    resolve([]);
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
const submit = async () => {
  const result = await formRef.value.validate();
  if (result) {
    const { id } = form;
    try {
      const result = await updateBaseDict(form);
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

<style lang="scss" scoped>
.w100 {
  width: 100%;
}
</style>
