/**
 * 自定义 LocalStorage/SessionStorage 序列化
 *
 * @param key storage key
 * @returns
 */
export function useGetStorage(key: string) {
  return useStorage(key, {}, undefined, {
    serializer: {
      read: (v: any) => (v ? JSON.parse(v) : null),
      write: (v: any) => JSON.stringify(v)
    }
  });
}

/**
 * 自定义 SessionStorage 序列化
 *
 * @param key storage key
 * @returns
 */
export function useGetSessionStorage(key: string, value = '') {
  return useSessionStorage(key, value, {
    serializer: {
      read: (v: any) => {
        v ? JSON.parse(v) : null;
      },
      write: (v: any) => JSON.stringify(v)
    }
  });
}

/**
 * 自定义异步的响应式Storage 序列化
 *
 * @param key storage key
 * @returns
 */
export function useGetStorageAsync(key: string) {
  return useStorageAsync(key, {}, undefined, {
    serializer: {
      read: (v: any) => (v ? JSON.parse(v) : null),
      write: (v: any) => JSON.stringify(v)
    }
  });
}
