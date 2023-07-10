/*
 * @Autor: QMZhao
 * @Date: 2021-09-06 22:26:37
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-07 17:39:58
 * @Description:
 * @FilePath: /vue-vite-template/vite.config.ts
 */
import { ConfigEnv, UserConfig, loadEnv } from 'vite';
// import vue from "@vitejs/plugin-vue";
// import VitePluginElementPlus from "vite-plugin-element-plus";
import { configSetting } from './src/config/setting';
import { OUTPUT_DIR } from './build/constant';
import { createVitePlugins } from './build/vite/plugin';

import { resolve } from 'path';

import pkg from './package.json';
import dayjs from 'dayjs';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
};

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const processRoot = process.cwd();
  const env = loadEnv(mode, processRoot);
  const { root, base, server } = configSetting(env);
  const isBuild = command === 'build';
  return {
    root,
    base,
    plugins: createVitePlugins(mode, isBuild),
    resolve: {
      alias: [{ find: /\/@\//, replacement: `${pathResolve('src')}/` }]
    },
    server,
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: env.VITE_DROP_CONSOLE === 'false' ? false : true
        }
      },
      // Turning off brotliSize display can slightly reduce packaging time
      // brotliSize: false,
      chunkSizeWarningLimit: 2000
    },
    define: {
      // setting vue-i18-next
      // Suppress warning
      // __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
      'process.env': {}
    },
    css: {
      preprocessorOptions: {
        scss: {
          // `
          // 引入多个文件的用法
          additionalData: `
            @use "./src/styles/variables";
            @use "./src/styles/mixins" as *;
          `
        }
      }
    }
  };
};
