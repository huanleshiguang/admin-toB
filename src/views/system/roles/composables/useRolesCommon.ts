import { ButtonAuth } from 'ICUCommon';

export function useRolesCommon() {
  // 表格引用
  const rolesTableRef = ref<any>(null);
  // 表单名称
  const roleFormTitle = ref('');

  // 表单弹窗组件引用
  const roleFormDialogRef = ref<any>(null);

  // 角色配置抽屉参数
  const moduleConfigDrawer = ref({
    visiable: false,
    title: ''
  });

  // 功能按钮
  const roleBtnAuth = ref<ButtonAuth | null>({
    roleAdd: {
      label: '新增',
      value: 'bqicu_sys_roleAdd'
    },
    roleEdit: {
      label: '修改',
      value: 'bqicu_sys_roleEdit'
    },
    roleDelete: {
      label: '删除',
      value: 'bqicu_sys_roleDelete'
    }
  });

  function cleanData(): void {
    rolesTableRef.value = null;
    roleFormDialogRef.value = null;
  }

  onBeforeUnmount(() => {
    cleanData();
  });

  return {
    roleBtnAuth,
    ...toRefs(
      reactive({
        moduleConfigDrawer,
        rolesTableRef,
        roleFormTitle,
        roleFormDialogRef
      })
    )
  };
}
