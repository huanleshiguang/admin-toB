/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-21 20:58:51
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-26 10:37:44
 * @FilePath: \servious-illness-admin\src\views\system\users\components\ArcManage\useFilter.ts
 * @Description: 科室管理相关方法
 */
import type { fetchHospAreaDepList } from '/@/api/system/types/user'

/**
 * 递归查询
 * @param depItem   //需要过滤的对象
 * @param filterField  //需要判断的字段
 * @param newValue // 判断字段与当前值是否相等
 */
// 递归: 判断是否有子级 && 过滤 非 newValue 项
export const useFilterCurrentField = (depItem: fetchHospAreaDepList, filterField: string, newValue: Boolean) => {
  if (depItem.children?.length) {
    depItem.children = depItem.children.filter((depItem) => {
      return useFilterCurrentField(depItem, filterField, newValue);
    })
    return depItem.children.length ? true : false;
  } else {
    return depItem[filterField] === newValue;
  }
};

// function filterDepList(newValue: boolean): void {
//   // 过滤前拿到初始数据
//   reactHospAreaDepList.value = JSON.parse(JSON.stringify(tempHospAreaDepList.value));
//   const filteredDepList = reactHospAreaDepList.value.filter((depItem) => {
//     return useFilterCurrentField(depItem, 'isMainDept', newValue);
//   });
//   // 赋值过滤后的数据
//   reactHospAreaDepList.value = filteredDepList;
// }
// function onChanageDept(event: boolean): void {
//   // 勾选重症
//   if (event) {
//     filterDepList(event);
//   }
//   // 未勾选重症
//   else {
//     reactHospAreaDepList.value = JSON.parse(JSON.stringify(tempHospAreaDepList.value));
//   }
// }