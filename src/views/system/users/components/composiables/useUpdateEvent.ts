import { cloneDeep } from 'lodash-es';
import type { resRoleInfo, userInfo } from '/@/api/system/types/user'
export function useUpdateEvent({ ...arg }) {
  const { formRef, dialogLayoutRef, hospAreaDepList, roleList, userFormtitle, userForm } = arg
  // 获取院区科室Tree
  const loadHospAreaDepTree = async () => {
    try {
      hospAreaDepList.value = await fetchHospAreaDepTree();
    } catch (error) {
      console.log(error);
    }
  }
  // 获取角色信息
  async function loadRoleList() {
    try {
      roleList.value = await fetchRoleList();
    } catch (error) {
      console.log(error);
    }
  }
  // 处理角色选中
  const handleRoleSelected = (item: resRoleInfo) => {
    console.log(item.id, 'item.id');
    // userForm.value.userRoleIds.value = item.id
  }
  const open = (data: userInfo) => {
    userFormtitle.value = `${data ? '编辑' : '新增'}人员`;
    userForm.value = data ? cloneDeep(data) : {};
    dialogLayoutRef.value.open();
  };
  const close = () => {
    dialogLayoutRef.value.close();
  };
  const submit = async () => {
    const result = await formRef.value.validate();
    if (result) {
      // dosomething
    }
  };
  const sureMethod = () => {
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
    submit,
    sureMethod,
    handlePartOfDept,
    handleClickPartInDept
  }
}