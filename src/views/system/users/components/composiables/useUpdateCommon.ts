/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-31 18:16:16
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-18 09:24:51
 * @FilePath: \servious-illness-admin\src\views\system\users\components\composiables\useUpdateCommon.ts
 * @Description:
 */

import type { FormInstance, FormRules } from 'element-plus';
import roleType from 'roleTypeModules';
import areaType from 'areaTypeModules';
import userType from 'userTypeModules';

export function useUpdateCommon() {
  const dialogLayoutRef = ref();
  const belongToTreeRef = ref();
  const bePartTreeRef = ref();
  const userFormRef = ref<FormInstance>();
  // 字典-性别
  const dictGenderList = ref<userType.resDictInfo[]>([]);
  // 字典-职务类别
  const dictPositionLevelList = ref<userType.resDictInfo[]>([]);
  // 基础字典-证件类型
  const dictCertificateTypeList = ref<userType.resDictInfo[]>([]);
  // dlalog标题
  const userFormtitle = ref('');
  // 作为common-tree-select组件的props:是否支持多选
  const isMultiple = ref(true);
  // 定义需要传给公共组件<common-tree-select />的字段（用于tree展示）
  const transmitProps = {
    id: 'id',
    type: 'type',
    label: 'areaDeptName',
    children: 'children'
  };
  const hospAreaDepList = ref<areaType.resHospAreaDepTree[]>([]);
  const roleList = ref<roleType.roleInfo[]>([]);
  // 同级目录下的update组件：表单 rules
  const rules = reactive<FormRules>({
    deptId: [
      {
        required: true,
        message: '请选择所属科室!',
        trigger: 'change'
      }
    ],
    userName: [
      {
        required: true,
        message: '请输入姓名！',
        trigger: 'blur'
      }
    ],
    genderName: [
      {
        required: true,
        message: '请输入性别！',
        trigger: 'change'
      }
    ],
    userWorkNo: [
      {
        required: true,
        message: '请输入用户工号！',
        trigger: 'blur'
      }
    ],
    idCategoryName: [
      {
        required: true,
        message: '请选择证件类型！',
        trigger: 'change'
      }
    ],
    positionLevelName: [
      {
        required: true,
        message: '请选择职务类别！',
        trigger: 'change'
      }
    ],
    userRoleIds: [
      {
        required: true,
        message: '请选择用户角色！',
        trigger: 'change'
      }
    ]
  });

  /**
   * userForm:表单
   */
  const userForm = ref<userType.userForm>({
    id: '',
    deptId: '',
    deptIds: [],
    userName: '',
    userIdNo: '',
    positionLevelName: '',
    positionLevelCode: '',
    genderName: '',
    genderCode: '',
    userTel: '',
    userWorkNo: '',
    idCategoryCode: '',
    idCategoryName: '',
    userRoleIds: []
  });
  return {
    dialogLayoutRef,
    belongToTreeRef,
    bePartTreeRef,
    transmitProps,
    hospAreaDepList,
    roleList,
    isMultiple,
    userFormtitle,
    rules,
    userForm,
    userFormRef,
    dictGenderList,
    dictPositionLevelList,
    dictCertificateTypeList
  };
}
