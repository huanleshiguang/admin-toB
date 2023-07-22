/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-21 20:58:51
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-21 21:02:03
 * @FilePath: \servious-illness-admin\src\views\system\users\components\ArcManage\useFilter.ts
 * @Description: 架构管理板块 相关方法抽离
 */
import type { fetchHospAreaDepList } from '/@/api/system/types/user'

/**
 * 递归查询
 * @param depItem   //需要过滤的对象
 * @param filterField  //需要判断的字段
 * @param newValue // 判断字段与当前值是否相等
 */
// 递归: 判断是否有子级 && 过滤 非 newValue 项
export const useFilterCurrentField = (depItem: fetchHospAreaDepList,filterField:string, newValue: Boolean) => {
  if (depItem.children?.length) {
    depItem.children = depItem.children.filter((depItem) => {
      return useFilterCurrentField(depItem,filterField, newValue);
    })
    return depItem.children.length ? true : false;
  } else {
    return depItem[filterField] === newValue;
  }
};