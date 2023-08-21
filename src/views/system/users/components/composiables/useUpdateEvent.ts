/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-08-02 17:21:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-18 09:26:42
 * @Descripttion:
 */
import userType from 'userTypeModules';
import roleType from 'roleTypeModules';
import areaType from 'areaTypeModules';
import { cloneDeep } from 'lodash-es';
interface argsType {
  dialogLayoutRef: Ref<any>;
  hospAreaDepList: Ref<areaType.resHospAreaDepTree[]>;
  roleList: Ref<roleType.roleInfo[]>;
  userFormtitle: Ref<string>;
  userForm: Ref<userType.userForm>;
  dictGenderList: Ref<userType.resDictInfo[]>;
  dictPositionLevelList: Ref<userType.resDictInfo[]>;
  dictCertificateTypeList: Ref<userType.resDictInfo[]>;
}
export function useUpdateEvent(args: argsType) {
  const {
    dialogLayoutRef,
    hospAreaDepList,
    roleList,
    userFormtitle,
    userForm,
    dictGenderList,
    dictPositionLevelList,
    dictCertificateTypeList
  } = args;
  const userFormCopy = cloneDeep(userForm.value);

  /**
   *  加载院区科室组合Tree
   */
  const loadHospAreaDepTree = async () => {
    const result = await fetchHospAreaDepTree();
    hospAreaDepList.value = result || [];
  };

  /**
   * 加载角色下拉框
   */
  async function loadRoleList() {
    const result = await fetchRoleList();
    roleList.value = result.pageData || [];
  }

  /**
   * userForm赋值
   * @param userInfo 用户信息
   */
  const open = (userInfo?: userType.userInfo) => {
    userFormtitle.value = `${userInfo ? '编辑' : '新增'}用户`;
    // 新增
    if (!userInfo) {
      userForm.value = cloneDeep(userFormCopy);
      userForm.value.idCategoryCode = dictCertificateTypeList.value[0]?.rangeValue;
      userForm.value.idCategoryName = dictCertificateTypeList.value[0]?.rangeName;
      dialogLayoutRef.value!.open();
      return;
    }
    // 编辑
    const {
      id,
      deptId,
      deptIds,
      userName,
      userIdNo,
      positionLevelCode,
      positionLevelName,
      genderCode,
      genderName,
      userTel,
      userWorkNo,
      userRoleIds,
      idCategoryCode,
      idCategoryName
    } = userInfo;
    userForm.value = Object.assign(userForm.value, {
      id,
      deptId,
      deptIds,
      userName,
      userIdNo,
      userTel,
      positionLevelCode,
      positionLevelName,
      genderCode,
      genderName,
      idCategoryCode,
      idCategoryName,
      userWorkNo,
      userRoleIds
    });
    dialogLayoutRef.value.open();
  };
  const close = () => {
    dialogLayoutRef.value.close();
  };
  /**
   * 加载字典信息：性别
   */
  const loadDictGenderList = async () => {
    const result = await fetchDictGenderList('base_xb');
    dictGenderList.value = result || [];
  };

  /**
   * 加载职务类别
   */
  const loadPositionLevel = async () => {
    const result = await fetchDictGenderList('base_zwlb');
    dictPositionLevelList.value = result || [];
  };

  /**
   * 加载证件类型
   */
  const loadCertificateType = async () => {
    const result = await fetchDictGenderList('base_zjlx');
    dictCertificateTypeList.value = result || [];
  };

  /**
   * 选择性别后为userform赋值
   * @param genderInfo 字典：性别信息
   */
  const onChangeGender = (genderInfo: userType.resDictInfo) => {
    userForm.value.genderCode = genderInfo.rangeValue;
    userForm.value.genderName = genderInfo.rangeName;
  };

  /**
   * 选择职务类别后为userform赋值
   * @param positionInfo 字典：职务类别信息
   */
  const onChangePosition = (positionInfo: userType.resDictInfo) => {
    userForm.value.positionLevelCode = positionInfo.rangeValue;
    userForm.value.positionLevelName = positionInfo.rangeName;
  };

  /**
   * 选择证件类型后为userform赋值
   * @param positionInfo 字典：职务类别信息
   */
  const onChangeCertificate = (certificateInfo: userType.resDictInfo) => {
    console.log(certificateInfo, 'positionInfopositionInfopositionInfo');
    userForm.value.idCategoryCode = certificateInfo.rangeValue;
    userForm.value.idCategoryName = certificateInfo.rangeName;
  };
  const handlePartOfDept = () => {};
  const handleClickPartInDept = () => {};
  return {
    loadHospAreaDepTree,
    loadRoleList,
    open,
    close,
    handlePartOfDept,
    handleClickPartInDept,
    onChangeGender,
    onChangePosition,
    loadDictGenderList,
    loadPositionLevel,
    loadCertificateType,
    onChangeCertificate
  };
}
