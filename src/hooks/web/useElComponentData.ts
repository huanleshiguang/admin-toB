/*
 * @Autor: QMZhao
 * @Date: 2023-08-11 18:25:12
 * @LastEditTime: 2023-08-11 18:39:26
 * @Description:
 */
import { SelectOption } from 'ICUCommon';

export function useElSelect<T = Iobj>(dataSource: T[] | null, keys: string[] = ['', '']) {
  const targetList: SelectOption[] = [];
  dataSource?.map((item: T) => {
    targetList.push({
      value: item[keys[0]],
      label: item[keys[1]]
    });
  });
  return targetList;
}
