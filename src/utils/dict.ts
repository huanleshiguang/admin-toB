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
