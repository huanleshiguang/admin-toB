/*
 * @Autor: QMZhao
 * @Date: 2023-07-29 16:50:28
 * @LastEditTime: 2023-08-09 09:57:41
 * @Description:
 */
import { cloneDeep } from 'lodash-es';

import { DeleteMenu } from 'MenuConfig';

export function useMenuEvent({ ...arg }) {
  const { createMessage, createConfirm } = useMessage();

  const {
    menuTabeRef,
    isMenuStatusLoading,
    menuFormDialogRef,
    menuFormData,
    formatMenuStatusChangeName,
    formatMenuStatusChangeParams
  } = arg;
  /**
   * 菜单状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换
   * mark: 由于钩子函数执行顺序会优先于点击事件执行，采用定时器方式获取点击事件的参数
   */
  function onChangeMenuStatus(row: Iobj) {
    isMenuStatusLoading.value = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const params = cloneDeep(row);
        const { menuName, dataStatus } = params;
        const statusName = formatMenuStatusChangeName(dataStatus);
        params.dataStatus = formatMenuStatusChangeParams(dataStatus);
        createConfirm(`是否${statusName}'${menuName}'`, 'warning')
          .then(async () => {
            try {
              await fetchEditMenu(params);
              isMenuStatusLoading.value = false;
              createMessage.success('修改成功');
              return resolve(true);
            } catch (error) {
              isMenuStatusLoading.value = false;
              reject(false);
            }
          })
          .catch(() => {
            isMenuStatusLoading.value = false;
          });
      }, 10);
    });
  }

  /**
   * 新增菜单
   */
  function onAddMenu() {
    menuFormData.value = {
      id: '',
      parentId: '',
      menuType: 0,
      menuCode: '',
      menuName: '',
      menuIcon: '',
      routeAddr: '',
      isCache: false,
      dataStatus: 0,
      sortNo: 0,
      remark: ''
    };
    menuFormDialogRef.value?.onOpenMenuFormDialog();
  }

  /**
   * 修改菜单数据
   *
   * @param row
   */
  function onEditMenuForm(row: Iobj): void {
    menuFormData.value = row;
    menuFormData.value.parentId = !row.parentId || row.parentId === '0' ? '' : row.parentId;
    menuFormDialogRef.value?.onOpenMenuFormDialog();
  }

  /**
   * 删除菜单
   *
   * @param row
   */
  function onDeleteMenu(row: Iobj): void {
    const { menuName, id } = row;
    createConfirm(`是否删除'${menuName}'`, 'warning').then(() => loadDeleteMenu({ menuId: id }));
  }

  /**
   * 删除菜单请求
   */
  async function loadDeleteMenu(params: DeleteMenu) {
    try {
      await fetchDelteMenu(params);
      createMessage.success('删除成功!');
      menuTabeRef.value!.refresh();
    } catch (error) {}
  }

  /**
   * 提交表单
   *
   * @param requestStatus 提交结果状态
   */
  function onSubmitMenuForm(requestStatus: boolean) {
    // 请求成功关闭弹窗重载表格
    if (requestStatus) {
      menuFormDialogRef.value?.onCloseMenuFormDialog();
      menuTabeRef.value!.refresh();
    }
  }

  /**
   * 菜单查询
   *
   * @param menuSearchForm
   */
  function onChangeMenuFormSearch(menuSearchForm: Iobj) {
    menuTabeRef.value!.refresh(menuSearchForm);
  }

  return {
    onAddMenu,
    onChangeMenuStatus,
    onEditMenuForm,
    onDeleteMenu,
    onSubmitMenuForm,
    onChangeMenuFormSearch,
  };
}
