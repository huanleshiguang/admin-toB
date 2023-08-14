import { cloneDeep } from 'lodash-es';
export function useEvent({ ...args }) {
  const { createConfirm, createMessage } = useMessage();
  const { isStatusLoading, drawerLayout, updateRef, updateValueRef, vxeTableLayout, childTableRef, currentRow } = args;
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
    const tableData = vxeTableLayout.value.tableData;
    const parentData = tableData.find((item) => item.id === row.parentId);
    updateRef.value!.open(row, parentData);
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
  const dataStatusDisabled = (row) => {
    return !!vxeTableLayout.value?.tableData.find((item) => item.parentId === row.id);
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
              // createMessage.success(error || '删除失败');
            }
          });
        }
        break;
    }
  };

  /**
   * 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换
   * mark: 由于钩子函数执行顺序会优先于点击事件执行，采用定时器方式获取点击事件的参数
   */
  const onChangeRowStatus = (row: Iobj) => {
    isStatusLoading.value = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const { dataStatus, dictName, id } = cloneDeep(row);
        const isEnable = dataStatus === 0;
        createConfirm(`确定${isEnable ? '停用' : '启用'}${dictName}字典吗`, isEnable ? 'warning' : 'success')
          .then(async () => {
            try {
              await enabledBaseDict({ id: id, dataStatus: isEnable ? 2 : 0 });
              createMessage.success(`${isEnable ? '停用' : '启用'}成功`);
              refresh();
              isStatusLoading.value = false;
              resolve(true);
            } catch (e) {
              // createMessage.error(`${isEnable ? '停用' : '启用'}失败`);
              isStatusLoading.value = false;
              reject(false);
            }
          })
          .catch(() => {
            isStatusLoading.value = false;
            reject(false);
          });
      }, 10);
    });
  };

  return {
    currentDbClick,
    add,
    addValue,
    editRow,
    enableRow,
    refresh,
    refreshChild,
    contextMenuClickEvent,
    onChangeRowStatus,
    dataStatusDisabled
  };
}
