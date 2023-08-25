/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-31 17:15:02
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-23 17:23:56
 * @FilePath: \servious-illness-admin\src\views\system\users\composables\useUserCommon.ts
 * @Description:
 */

import areaType from 'areaTypeModules';
import userType from 'userTypeModules';
import { ButtonAuth } from 'ICUCommon';
export function useUserCommon() {
  // update组件实例
  const userFormDialogRef = ref<any>(null);
  // vxe-table组件实例
  const vxeTableLayoutRef = ref();
  // common-tree-select组件实例
  const treeSelectRef = ref();
  // 绑定院区名称
  const hospAreaName = ref('');
  // 院区列表
  const hospAreaList = ref<areaType.hospAreaInfo[]>([]);
  // 科室列表
  const hospAreaDepList = ref<areaType.resDepInfo[]>([]);
  // 定义需要传给公共组件<common-tree-select />的字段（用于tree展示）
  const treeSelectProps = {
    label: 'deptName',
    deptCode: 'deptCode',
    isMainDept: 'isMainDept',
    children: 'children'
  };
  // params: 请求参数
  const params = ref<userType.fetchUserList>({
    AreaId: '',
    DeptId: '',
    Keyword: ''
  });
  // Table表头字段
  const columnsUserList = [
    {
      title: '同步ID',
      field: 'syncId'
    },
    {
      title: '姓名',
      field: 'userName'
    },
    {
      title: '科室',
      field: 'deptName'
    },
    {
      title: '工号',
      field: 'userWorkNo'
    },
    {
      title: '职务类别',
      field: 'positionLevelName'
    },
    {
      title: '性别',
      field: 'genderName'
    },
    {
      title: '联系电话',
      field: 'userTel'
    },
    {
      title: '身份证号',
      field: 'userIdNo'
    }
  ];

  // 功能按钮
  const userBtnAuth = ref<ButtonAuth | null>({
    userAdd: {
      label: '新增',
      value: 'bqicu_sys_userAdd'
    },
    userEdit: {
      label: '修改',
      value: 'bqicu_sys_userEdit'
    },
    userDelete: {
      label: '删除',
      value: 'bqicu_sys_userDelete'
    }
  });
  return {
    userFormDialogRef,
    vxeTableLayoutRef,
    treeSelectRef,
    treeSelectProps,
    params,
    hospAreaList,
    hospAreaDepList,
    columnsUserList,
    hospAreaName,
    userBtnAuth
  };
}
