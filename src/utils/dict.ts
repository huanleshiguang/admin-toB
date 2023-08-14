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
 * 初始化菜单类型
 *
 * @param type 菜单类型 0--目录，1--菜单，2--功能
 * @returns 菜单类型
 */
export function menuTypeWrapper(type: string | number): number {
  const targetType = `${type}`;
  const typeMap = new Map<string, number>([
    ['目录', 0],
    ['菜单', 1],
    ['功能', 2]
  ]);
  return typeMap.get(targetType) ?? -1;
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
    // 医护工作站
    {
      label: 'doctor',
      value: 'doctor'
    },
    // 医生管理
    {
      label: 'manage',
      value: 'manage'
    },
    // 查询统计
    {
      label: 'statistics',
      value: 'statistics'
    },
    // 系统配置
    {
      label: 'setup',
      value: 'setup'
    },
    {
      label: '运行参数',
      value: 'yxcs'
    },
    {
      label: '科室管理',
      value: 'ksgl'
    },
    {
      label: '人员管理',
      value: 'rygl'
    },
    {
      label: '菜单管理',
      value: 'cdgl'
    },
    {
      label: '角色管理',
      value: 'jsgl'
    },
    {
      label: '床位管理',
      value: 'cwgl'
    },
    {
      label: '客户端管理',
      value: 'khdgl'
    },
    {
      label: '设备管理',
      value: 'sbgl'
    },
    {
      label: '模板管理',
      value: 'mkgl'
    },
    {
      label: '字典管理',
      value: 'zdgl'
    },
    {
      label: '数据管理',
      value: 'sjgl'
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

/**
 * 格式化弹窗状态名称
 *
 * @param status dataStatus
 * @returns 状态名称
 */
export function formatDataStatusName(status: number): string {
  const statusMap = new Map<number, string>([
    [0, '隐藏'],
    [1, '显示'],
    [2, '显示']
  ]);
  return statusMap.get(status) ?? '';
}

/**
 * 格式化数据状态切换传参
 *
 * @param status
 * @returns
 */
export function formatDataStatusParams(status: number): number {
  const statusMap = new Map<number, number>([
    [0, 2],
    [1, 0],
    [2, 0]
  ]);
  return statusMap.get(status) ?? 0;
}
