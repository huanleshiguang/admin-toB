/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-01-30 11:58:17
 * @LastEditTime: 2023-01-30 15:07:40
 * @Reference:
 */
import { ServerOptions } from "vite";

const httpsRE = /^https:\/\//;

export function useServer(target: string, prefix: string): ServerOptions {
  const isHttps = httpsRE.test(target);
  return {
    host: true,
    port: 2857,
    open: true,
    proxy: {
      [prefix]: {
        target,
        changeOrigin: true,
        ws: true,
        rewrite: (path: any) => path.replace(/^\/api/, "/"),
        ...(isHttps ? { secure: false } : {})
      }
    }
  };
}
