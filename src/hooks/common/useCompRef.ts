/**
 * 定义组件类型
 * @param _comp 推导类型
 * @returns 
 */
export function useCompRef<T extends abstract new (...args: any) => any>(_comp: T) {
  return ref<InstanceType<T>>()
}