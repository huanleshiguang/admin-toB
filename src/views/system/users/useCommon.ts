/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-24 14:55:17
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-28 14:23:41
 * @FilePath: \servious-illness-admin\src\views\system\users\components\ArcManage\useCommon.ts
 * @Description: 科室管理相关数据
 */

import type { FormRules } from 'element-plus';
import type { resHosptAreaDepUserList } from '/@/api/system/types/user';
/**
 * columnsList: 需要显示的表格字段
 */
export const columnsList = [
  {
    title: '同步ID',
    field: 'syncId'
  },
  {
    title: '姓名',
    field: 'userName',
  },
  {
    title: '科室',
    field: 'deptName',
  },
  {
    title: '工号',
    field: 'userWorkNo',
  },
  {
    title: '职务类别',
    field: 'positionLevelName',
  },
  {
    title: '性别',
    field: 'genderName',
  },
  {
    title: '联系电话',
    field: 'userTel',
  },
  {
    title: '身份证号',
    field: 'userIdNo',
  },
];

// 院区名称
export const hospAreaName = ref<string>('');

/**
 * params: 请求参数
 */
export const params = ref<resHosptAreaDepUserList>({
  AreaId: '',
  DeptId: '',
  Keyword: '',
  PageIndex: 1,
  PageSize: 20
});


/**
 *  同级目录下的update组件：表单 rules
 */
export const rules = reactive<FormRules>({
  deptName: [
    {
      required: true,
      message: '请输入所属科室!',
      trigger: 'change'
    },
  ],
  userName: [
    {
      required: true,
      message: '请输入姓名！',
      trigger: 'change'
    }
  ],
  genderName: [{
    required: true,
    message: '请输入性别！',
    trigger: 'change'
  }],
  userWorkNo: [{
    required: true,
    message: '请输入用户工号！',
    trigger: 'change'
  }],
  positionLevelName: [
    {
      required: true,
      message: '请选择职务类别！',
      trigger: 'change'
    }
  ],
  userRoleIds: [{
    required: true,
    message: '请选择用户角色！',
    trigger: 'change'
  }]
});


