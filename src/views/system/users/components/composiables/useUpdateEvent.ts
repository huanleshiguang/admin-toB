
import type { userInfo } from '/@/api/system/types/user'
import type { resHospAreaDepTree } from '/@/api/system/types/area'
import type { roleInfo } from '/@/api/system/types/role'
import { cloneDeep } from 'lodash-es';
import type { FormInstance } from 'element-plus'

interface argType {
  formRef: Ref<FormInstance>
  dialogLayoutRef: Ref<any>
  hospAreaDepList: Ref<resHospAreaDepTree[]>
  roleList: Ref<roleInfo[]>
  userFormtitle: Ref<string>
  userForm: Ref<any>
}

export function useUpdateEvent(args: argType) {
  const { formRef, dialogLayoutRef, hospAreaDepList, roleList, userFormtitle, userForm } = args

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
    roleList.value = result.pageData || [];
  }

  /**
   * 
   * @param roleInfo 角色信息
   */
  const handleRoleSelected = (roleInfo: roleInfo) => {
    console.log(roleInfo.id, 'roleInfo.id');
    // userForm.value.userRoleIds.value = item.id
  }

  /**
   * 
   * @param userInfo 用户信息
   */
  const open = (userInfo: userInfo) => {
    userFormtitle.value = `${userInfo ? '编辑' : '新增'}用户`;
    userForm.value = userInfo ? cloneDeep(userInfo) : {};
    dialogLayoutRef.value.open();
  };
  const close = () => {
    dialogLayoutRef.value.close();
  };
  const sureMethod = async () => {
    const result = await formRef.value?.validate();
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