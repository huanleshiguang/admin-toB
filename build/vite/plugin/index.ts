/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-08-16 11:27:54
 * @LastEditTime: 2023-08-17 14:06:31
 * @Reference:
 */
import type { Plugin } from 'vite';

// import path from "path";

import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import vitePluginRequire from 'vite-plugin-require';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import';

import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import UnoCSS from 'unocss/vite';

// const pathSrc = path.resolve(__dirname, "src");

import { configCompressPlugin } from './compress';

import { configSvgIconsPlugin } from './svgSprite';

export function createVitePlugins(env: Recordable, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx(),
    UnoCSS(),
    vitePluginRequire(),
    vueSetupExtend(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: ['src/api/**', 'src/hooks/web'],

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // AntDesignVueResolver(),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        })
      ],

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },

      // dts: path.resolve(pathSrc, "auto-imports.d.ts")
      dts: 'auto-imports.d.ts'
    }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
        // AntDesignVueResolver()
      ],

      dts: 'components.d.ts'
      // dts: path.resolve(pathSrc, "components.d.ts")
    }),

    Icons({
      autoInstall: true
    }),
    createStyleImportPlugin({
      resolves: [VxeTableResolve()]
    })
  ];

  // TODO
  // !isBuild && vitePlugins.push(configHmrPlugin());

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin(isBuild && env.VITE_BUILD_COMPRESS, isBuild));
  }
  return vitePlugins;
}
