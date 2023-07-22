/**
 * 自定义 LocalStorage/SessionStorage 序列化
 *
 * @param key storage key
 * @returns
 */
export function useGetStorage(key: string) {
  return useStorage(key, {});
}

/**
 * 自定义 SessionStorage 序列化
 *
 * @param key storage key
 * @returns
 */
export function useGetSessionStorage(key: string) {
  return useStorage(key, {}, sessionStorage);
}
