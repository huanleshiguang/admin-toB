/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-08-02 17:21:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-07 10:02:49
 * @Descripttion: 
 */
import userType from 'userTypeModules'
import roleType from 'roleTypeModules'
import areaType from 'areaTypeModules'
import { FormInstance } from 'element-plus';

interface argsType {
  userFormRef: Ref<FormInstance | undefined>
  dialogLayoutRef: Ref<any>
  hospAreaDepList: Ref<areaType.resHospAreaDepTree[]>
  roleList: Ref<roleType.roleInfo[]>
  userFormtitle: Ref<string>
  userForm: Ref<userType.userForm>,
}
export function useUpdateEvent(args: argsType) {
  const { userFormRef, dialogLayoutRef, hospAreaDepList, roleList, userFormtitle, userForm } = args

  /**
   *  加载院区科室组合Tree
   */
  const loadHospAreaDepTree = async () => {
    const result = await fetchHospAreaDepTree();
    hospAreaDepList.value = result || []
  }

  /**
   * 加载角色下拉框
   */
  async function loadRoleList() {
    const result = await fetchRoleList();
    roleList.value = result.pageData || [];
  }

  /**
   * 选中角色后的回调
   * @param roleInfo 角色信息
   */
  const handleRoleSelected = (roleInfo: roleType.roleInfo) => {
    console.log(roleInfo.id, 'roleInfo.id');
    // userForm.value.userRoleIds.value = item.id
  }

  /**
   * userForm赋值
   * @param userInfo 用户信息
   */
  const open = (userInfo: userType.userInfo) => {
    userFormtitle.value = `${userInfo ? '编辑' : '新增'}用户`;
    const { deptId, deptIds, userName, userIdNo, positionLevelName, genderName, userTel, userWorkNo, userRoleIds } = userInfo;
    userForm.value = Object.assign(userForm.value, {
      deptId,
      deptIds,
      userName,
      userIdNo,
      positionLevelName,
      genderName,
      userTel,
      userWorkNo,
      userRoleIds
    })
    dialogLayoutRef.value.open();
  };
  const close = () => {
    dialogLayoutRef.value.close();
  };

  /**
   * 点击确认后的回调
   */
  const sureMethod = async () => {
    const result = await userFormRef.value?.validate();
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