export function useEvent({ ...args }) {
  const { createConfirm, createMessage } = useMessage();
  const { drawerLayout, updateRef, updateValueRef, vxeTableLayout, childTableRef, currentRow } = args;

  /**
   * 表格双击事件
   * @param param0
   */
  const currentDbClick = ({ row }): void => {
    currentRow.value = row;
    drawerLayout.value!.open();
  };

  /**
   * 新增字典
   */
  const add = (): void => {
    updateRef.value!.open();
  };
  /**
   * 新增指域项
   */
  const addValue = (): void => {
    updateValueRef.value!.open({ dictId: currentRow.value.id, dictName: currentRow.value.dictName });
  };
  /**
   * 编辑字段
   * @param row 表格行
   */
  const editRow = (row): void => {
    console.log(row);

    updateRef.value!.open(row);
  };
  /**
   * 启用禁用行
   * @param row 表格行
   */
  const enableRow = (row): void => {
    const { dataStatus, dictName, id } = row;
    const isEnable = dataStatus === 0;
    createConfirm(`确定${isEnable ? '停用' : '启用'}${dictName}字典吗`, isEnable ? 'warning' : 'success').then(
      async () => {
        try {
          await enabledBaseDict({ id: id, isEnabled: !isEnable });
          createMessage.success(`${isEnable ? '停用' : '启用'}成功`);
          refresh();
        } catch (e) {
          createMessage.error(`${isEnable ? '停用' : '启用'}失败`);
        }
      }
    );
  };
  /**
   * 刷新表格
   */
  const refresh = (): void => {
    vxeTableLayout.value!.refresh();
  };
  /**
   * 刷新值域表格
   */
  const refreshChild = (): void => {
    childTableRef.value!.refresh();
  };
  /**
   * 右键点击事件
   * @param param0
   */
  const contextMenuClickEvent = async ({ menu, row, column }): void => {
    switch (menu.code) {
      case 'edit':
        // 示例
        if (row && column) {
          updateValueRef.value!.open(row);
          console.log('编辑');
        }
        break;
      case 'delete':
        // 示例
        if (row && column) {
          createConfirm('删除后不可恢复，是否确认删除？', 'warning').then(async () => {
            try {
              await deleteBaseDictValue(row.id);
              createMessage.success('删除成功');
              refreshChild();
            } catch (error) {
              createMessage.success(error || '删除失败');
            }
          });
        }
        break;
    }
  };

  return {
    currentDbClick,
    add,
    addValue,
    editRow,
    enableRow,
    refresh,
    refreshChild,
    contextMenuClickEvent
  };
}
