import { cloneDeep } from 'lodash-es';
import type { resRoleInfo, userInfo } from '/@/api/system/types/user'
export function useUpdateEvent({ ...arg }) {
  const { formRef, dialogLayoutRef, hospAreaDepList, roleList, userFormtitle, userForm } = arg

  /**
   *  加载院区科室Tree
   */
  const loadHospAreaDepTree = async () => {
      const result = await fetchHospAreaDepTree();
      hospAreaDepList.value = result || []
  }

 /**
  * 加载角色列表
  */
  async function loadRoleList() {
      const result = await fetchRoleList();
      roleList.value = result || [];
  }

  /**
   * 
   * @param roleItem 角色信息
   */
  const handleRoleSelected = (roleItem: resRoleInfo) => {
    console.log(roleItem.id, 'roleItem.id');
    // userForm.value.userRoleIds.value = item.id
  }

  /**
   * 
   * @param userItem 用户信息
   */
  const open = (userItem: userInfo) => {
    userFormtitle.value = `${userItem ? '编辑' : '新增'}用户`;
    userForm.value = userItem ? cloneDeep(userItem) : {};
    dialogLayoutRef.value.open();
  };
  const close = () => {
    dialogLayoutRef.value.close();
  };
  const sureMethod = async () => {
    const result = await formRef.value.validate();
    if (result) {
      // dosomething
    }
    // updateHosptAreaInfo(form.value).then((res) => {
    //   if (res) {
    //     dialogLayoutRef.value.close()
    //     // 重新获取tableList
    //     emits('reFetchtableList')
    //   }
    // }).catch((error) => { throw (error) })
    // console.log(form.value, 'sure form');
  }
  const handlePartOfDept = () => { }
  const handleClickPartInDept = () => { }
  return {
    loadHospAreaDepTree,
    loadRoleList,
    handleRoleSelected,
    open,
    close,
    sureMethod,
    handlePartOfDept,
    handleClickPartInDept
  }
}