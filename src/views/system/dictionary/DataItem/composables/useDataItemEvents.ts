import { Tree } from 'element-plus/es/components/tree-v2/src/types';
import { cloneDeep } from 'lodash-es';
export function useEvent({ ...args }) {
  const { createConfirm, createMessage } = useMessage();
  const { updateRef, vxeTableLayout, currentRow, treeRef } = args;

  /**
   * 新增字典
   */
  const add = (): void => {
    updateRef.value!.open({ parent: currentRow.value });
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

  /**
   * 刷新表格
   */
  const refresh = (): void => {
    vxeTableLayout.value!.refresh();
  };

  const handleNodeClick = (data: Tree) => {
    console.log(data);

    currentRow.value = data;
    refresh();
  };

  /**
   * 懒加载tree
   * @param node 当前节点
   * @param resolve 返回方法
   */
  const loadTreeData = async (node, resolve) => {
    // 第一级
    if (node.level === 0) {
      const result = await fetchDictCategoryListLazy('0');
      // 执行默认选中第一条
      nextTick(() => {
        if (result.length > 0) {
          treeRef.value && treeRef.value?.setCurrentKey(result[0]);
          currentRow.value = result[0];
          refresh();
        }
      });
      resolve(result);
    } else {
      // 其他级
      const result = await fetchDictCategoryListLazy(node.data.id);
      resolve(result);
    }
  };
  return {
    add,
    editRow,
    enableRow,
    refresh,
    handleNodeClick,
    loadTreeData
  };
}
