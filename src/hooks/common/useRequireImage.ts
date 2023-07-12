/*
 * @Autor: QMZhao
 * @Date: 2023-07-12 10:37:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-12 18:42:37
 * @Description:
 * @FilePath: \servious-illness-admin\src\hooks\common\useRequireImage.ts
 */
export function useRequereImage() {
  const assetsImages = {
    dashboard: {
      bgPath: '/assets/image/dashboard/desktop-bg.png',
      logoPath: 'src/assets/image/dashboard/logo-desktop.png'
    }
  };
  // 主界面背景图
  function setDashbordBgImage(srouce: string): string {
    return `/${srouce}${assetsImages.dashboard.bgPath}`;
  }
  // 主界面公司logo
  function setDashbordLogo() {
    return require(assetsImages.dashboard.logoPath);
  }
  return {
    setDashbordBgImage,
    setDashbordLogo
  };
}
