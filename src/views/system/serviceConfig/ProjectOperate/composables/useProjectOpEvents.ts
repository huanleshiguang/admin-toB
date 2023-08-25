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
    updateRef.value!.open(row);
  };
  /**
   * 启用禁用行
   * @param row 表格行
   */
  const enableRow = (row): void => {
    const { dataStatus, dictName, id } = cloneDeep(row);
    const isEnable = dataStatus === 0;
    createConfirm(`确定${isEnable ? '停用' : '启用'}${dictName}字典吗`, isEnable ? 'warning' : 'success').then(
      async () => {
        try {
          await enabledBaseDict({ id: id, dataStatus: isEnable ? 2 : 0 });
          createMessage.success(`${isEnable ? '停用' : '启用'}成功`);
          refresh();
        } catch (e) {
          // createMessage.error(`${isEnable ? '停用' : '启用'}失败`);
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

  return {
    add,
    editRow,
    enableRow,
    refresh
  };
}
