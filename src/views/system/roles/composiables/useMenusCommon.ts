export function useMenusCommon() {
  // 表格引用
  const rolesTableRef = ref();
  // 表单名称
  const roleFormTitle = ref('');

  // 表单弹窗组件引用
  const roleFormDialogRef = ref();

  // 角色配置抽屉参数
  const moduleConfigDrawer = ref({
    visiable: false,
    title: ''
  });
  return {
    ...toRefs(
      reactive({
        moduleConfigDrawer,
        rolesTableRef,
        roleFormTitle,
        roleFormDialogRef
      })
    )
  }
}