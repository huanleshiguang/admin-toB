/*
 * @Autor: QMZhao
 * @Date: 2021-08-18 13:10:22
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-02 15:21:48
 * @Description: 
 * @FilePath: /vite-admin-template/build/vite/proxy.ts
 */
/**
 * Used to parse the .env.development proxy configuration
 */
// import type { ProxyOptions } from 'vite';

// type ProxyItem = [string, string];

// type ProxyList = ProxyItem[];

// type ProxyTargetList = Record<string, ProxyOptions & { rewrite: (path: string) => string }>;

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list
 */
// export function createProxy(list: ProxyList) {
//   const ret: ProxyTargetList = {};
//   for (const [prefix, target] of list) {
//     const isHttps = httpsRE.test(target);
    
//     // https://github.com/http-party/node-http-proxy#options
//     ret[prefix] = {
//       target: target,
//       changeOrigin: true,
//       ws: true,
//       rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '/'),
//       // https is require secure=false
//       ...(isHttps ? { secure: false } : {}),
//     };
//   }
  
//   console.log("proxy-target", ret)
//   return ret;
// }
export function createProxy(target: string) {
  // const ret: ProxyTargetList = {};
  // for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);
    
    // https://github.com/http-party/node-http-proxy#options
    const ret:Iobj = {
      // target: target,
      // changeOrigin: true,
      // ws: true,
      // rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '/'),
      // // https is require secure=false
      // ...(isHttps ? { secure: false } : {}),
      "/admin": {
        target: target,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/admin/, '/'),
        // https is require secure=false
        ...(isHttps ? { secure: false } : {}),
      }
    };
  // }
  
  // console.log("proxy-target", ret)
  return ret;
}
