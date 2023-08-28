import { cloneDeep } from 'lodash-es';
export function useEvent({ ...args }) {
  const { createConfirm, createMessage } = useMessage();
  const { updateRef, vxeTableLayout } = args;

  /**
   * 新增字典
   */
  const add = (): void => {
    updateRef.value!.open();
  };

  /**
   * 编辑字段
   * @param row 表格行
   */
  const editRow = (row): void => {
    console.log(row);
    const tableData = vxeTableLayout.value.tableData;
    const parentData = tableData.find((item) => item.id === row.parentId);
    updateRef.value!.open(row, parentData);
  };
  /**
   * 删除行
   * @param row 表格行
   */
  const deleteRow = (row): void => {
    const { categoryName, id } = cloneDeep(row);
    createConfirm(`确定删除${categoryName}字典吗`, 'warning').then(async () => {
      try {
        await fetchDeleteDictCategory({ id: id });
        createMessage.success('删除成功！');
        refresh();
      } catch (e) {
        // createMessage.error(`${isEnable ? '停用' : '启用'}失败`);
      }
    });
  };
  /**
   * 是否可以删除
   * @param row 表格行
   * @returns Boolean
   */
  const canDeleteRow = (row) => {
    return !!vxeTableLayout.value?.tableData.find((item) => item.parentId === row.id);
  };
  /**
   * 刷新表格
   */
  const refresh = (): void => {
    vxeTableLayout.value!.refresh();
  };

  return {
    add,
    editRow,
    deleteRow,
    refresh,
    canDeleteRow
  };
}
