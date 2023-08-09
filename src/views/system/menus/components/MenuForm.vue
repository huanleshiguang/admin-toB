<!--
 * @Autor: QMZhao
 * @Date: 2023-07-25 15:05:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 13:39:48
 * @Description: 配置表单
-->
<script lang="ts" setup>
import { setMenuTypeSelects, setSimpleBooleanSelects } from '/@/utils/dict';

import { MenuIconPanel } from './index';
import { MenuForm } from 'MenuConfig';

const menuFormProps = withDefaults(
  defineProps<{
    menuFormData: MenuForm;
    // 表头
    menuFormTitle: string;
    // 菜单树
    menuTrees: Iobj[];
  }>(),
  {
    menuFormData: (): MenuForm => ({
      id: '',
      // 上级id
      parentId: '',
      // 菜单类型
      menuType: 0,
      // 菜单code
      menuCode: '',
      // 菜单名称
      menuName: '',
      // 菜单图标
      menuIcon: '',
      // 路由地址
      routeAddr: '',
      // 是否缓存
      isCache: false,
      // 数据状态
      dataStatus: 0,
      // 排序
      sortNo: 0,
      // 描述
      remark: ''
    }),
    menuFormTitle: '',
    menuTrees: (): Iobj[] => []
  }
);

const menuFormEmits = defineEmits<{
  (event: 'update:menuFormData', menuFormData: MenuForm): void;
  (event: 'handleSubmitMenuForm', status: boolean): void;
}>();

// 暴露事件
defineExpose({
  onOpenMenuFormDialog,
  onCloseMenuFormDialog
});

// 表单 v-model 处理
const setMenuFormData = computed({
  get: () => {
    return menuFormProps.menuFormData;
  },
  set: (value) => {
    menuFormEmits('update:menuFormData', value);
  }
});

const { createMessage } = useMessage();
// 菜单类型下拉
const menuTypes = setMenuTypeSelects();

// 是否缓存
const simpleBooleanSelects = setSimpleBooleanSelects();
// // 菜单树是否父子关联
// const isCheckStrictily = ref(false)

const defaultProps = {
  label: 'menuName',
  children: 'children'
};

// 弹窗组件引用
const menuFormDialogRef = ref<any>(null);
// 权限表单组件引用
const menuConfigformRef = ref<any>(null);

// 角色表规则
const menuFormRules = {
  menuCode: [
    {
      required: true,
      message: '请输入菜单代码',
      trigger: 'blur'
    }
  ],
  menuName: [
    {
      required: true,
      message: '请输入菜单名称',
      trigger: 'blur'
    }
  ]
};

// 唤起菜单图标选择卡片
const menuIconVisiable = ref(false);

// 调用打开弹窗方法
function onOpenMenuFormDialog(): void {
  menuFormDialogRef.value!.open();
}

// 调用关闭弹窗方法
function onCloseMenuFormDialog(): void {
  menuFormDialogRef.value!.close();
}

// 菜单图标选择卡片唤起点击事件
function onFocusMenuIcon(): void {
  menuIconVisiable.value = !menuIconVisiable.value;
}

// 提交权限表单事件
async function onSubmitMenuForm() {
  try {
    const valid = await menuConfigformRef.value!.validate();
    valid && loadMenuForm();
  } catch (error) {}
}

// 权限表单请求
async function loadMenuForm() {
  const status = setMenuFormData.value.id ? '修改' : '添加';
  try {
    await fetchEditMenu(setMenuFormData.value);
    createMessage.success(`${status}成功`);
    menuFormEmits('handleSubmitMenuForm', true);
    menuConfigformRef.value!.resetField();
  } catch (error) {
    menuFormEmits('handleSubmitMenuForm', false);
  }
}
</script>

<template>
  <DialogLayout ref="menuFormDialogRef" show-close width="500px" :title="menuFormTitle" @sure="onSubmitMenuForm">
    <el-form
      ref="menuConfigformRef"
      :model="menuFormData"
      :rules="menuFormRules"
      label-width="auto"
      label-position="top"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="菜单名称" prop="menuName" class="w-full">
            <el-input v-model="setMenuFormData.menuName" clearable placeholder="请输入名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单代码" prop="menuCode">
            <el-input v-model="setMenuFormData.menuCode" clearable placeholder="请输入菜单代码" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="上级菜单" prop="parentId">
            <el-tree-select
              v-model="setMenuFormData.parentId"
              :data="menuTrees"
              :props="defaultProps"
              check-strictly
              :render-after-expand="false"
              show-checkbox
              node-key="id"
              check-on-click-node
            ></el-tree-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单类型" prop="menuType" class="menu-form-item">
            <el-select v-model="setMenuFormData.menuType" placeholder="请选择菜单类型">
              <el-option
                v-for="item in menuTypes"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="菜单图标" prop="menuIcon" class="menu-form-item">
            <el-popover
              :visible="menuIconVisiable"
              placement="bottom"
              width="400"
              popper-class="overflow-y-auto overflow-x-hidden"
            >
              <template #default>
                <div class="w-full h-200 flex flex-wrap overflow-y-auto">
                  <MenuIconPanel
                    v-model:menu-icon-visiable="menuIconVisiable"
                    v-model:menu-icon="setMenuFormData.menuIcon"
                  />
                </div>
              </template>
              <template #reference>
                <el-input
                  v-model="setMenuFormData.menuIcon"
                  clearable
                  placeholder="请选择图标"
                  @click="onFocusMenuIcon"
                />
              </template>
            </el-popover>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="路由地址" prop="routeAddr">
            <el-input v-model="setMenuFormData.routeAddr" clearable placeholder="请输入路由地址" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="是否缓存" prop="isCache">
            <el-radio-group v-model="setMenuFormData.isCache">
              <el-radio v-for="item in simpleBooleanSelects" :key="item.value" :label="item.value">
                {{ item.label }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排序" prop="sortNo" class="menu-form-item">
            <el-input-number v-model="setMenuFormData.sortNo" class="w-full" :min="0" controls-position="right" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="描述" prop="remark">
            <el-input
              v-model="setMenuFormData.remark"
              :autosize="{ minRows: 2, maxRows: 4 }"
              clearable
              type="textarea"
              maxlength="200"
              placeholder="请输入描述"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </DialogLayout>
</template>

<style lang="scss" scoped>
.menu-form-item {
  :deep(.el-input-number) {
    width: 100%;
  }
}
</style>
