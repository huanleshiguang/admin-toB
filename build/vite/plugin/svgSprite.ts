/*
 * @Autor: QMZhao
 * @Date: 2021-08-18 13:10:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-15 17:55:49
 * @Description:
 * @FilePath: /vite-admin-template/build/vite/plugin/svgSprite.ts
 */
/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import {createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = createSvgIconsPlugin ({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
    svgoOptions: isBuild,
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]',

    /**
     * custom insert position
     * @default: body-last
     */
    // inject?: 'body-last' | 'body-first'

    /**
     * custom dom id
     * @default: __svg__icons__dom__
     */
    customDomId: '__svg__icons__dom__',
  });
  // const svgIconsPlugin = SvgIconsPlugin({
  //   iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
  //   svgoOptions: isBuild,
  //   // default
  //   symbolId: "icon-[dir]-[name]"
  // });
  return svgIconsPlugin;
}
