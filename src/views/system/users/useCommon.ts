/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-24 14:55:17
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-31 16:16:48
 * @FilePath: \servious-illness-admin\src\views\system\users\components\ArcManage\useCommon.ts
 * @Description: 科室管理相关数据
 */



/**
 * columnsList: 需要显示的表格字段
 */

export function useUsersCommon() {
  
  

  const columnsList = [
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
  const hospAreaName = ref<string>('');


  return {
    ...toRefs(
      reactive({
 
      })
    )
  }
}



