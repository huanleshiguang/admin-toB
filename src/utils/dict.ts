import { SelectOption } from 'ICUCommon';

/**
 * 初始化菜单类型名称
 *
 * @param type 菜单类型 0--目录，1--菜单，2--功能
 * @returns 菜单类型中文名称
 */
export function menuTypeNameWrapper(type: string | number): string {
  const targetType = `${type}`;
  const typeMap = new Map<string, string>([
    ['0', '目录'],
    ['1', '菜单'],
    ['2', '功能']
  ]);
  return typeMap.get(targetType) ?? '';
}

/**
 * 菜单类型下拉选项
 */
// export function setMenuTypeSelects(): SelectOption[] {
//   const menuTypes: SelectOption[] = [
//     {
//       label: '全部',
//       value: ''
//     },
//     {
//       label: '护士工作站',
//       value: 1
//     },
//     {
//       label: '功能',
//       value: 2
//     }
//   ];
//   return menuTypes;
// }
/**
 * 菜单类型下拉选项
 */
export function setMenuTypeSelects(): SelectOption[] {
  const menuTypes: SelectOption[] = [
    {
      label: '目录',
      value: 0
    },
    {
      label: '菜单',
      value: 1
    },
    {
      label: '功能',
      value: 2
    }
  ];
  return menuTypes;
}

/**
 * 菜单图标下拉选项
 *
 * @returns 菜单图标 menuIcons: SelectOption[]
 */
export function setMenuIcons(): SelectOption[] {
  const menuIcons: SelectOption[] = [
    {
      label: 'doctor',
      value: 'doctor'
    },
    {
      label: 'manage',
      value: 'manage'
    },
    {
      label: 'statistics',
      value: 'statistics'
    },
    {
      label: 'setup',
      value: 'setup'
    }
  ];
  return menuIcons;
}

/**
 * 通用判断逻辑下拉
 * 
 * @returns menuIcons: SelectOption<boolean>[]
 */
export function setSimpleBooleanSelects(): SelectOption<boolean>[] {
  const menuIcons: SelectOption<boolean>[] = [
    {
      label: '是',
      value: true
    },
    {
      label: '否',
      value: false
    }
  ];
  return menuIcons;
}
