/*
 * @Autor: QMZhao
 * @Date: 2023-07-12 10:37:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-12 10:58:40
 * @Description:
 * @FilePath: \servious-illness-admin\src\hooks\common\useRequireImage.ts
 */
export function useRequereImage() {
  const assetsImages = {
    dashboard: {
      bgPath: '/src/assets/image/dashboard/desktop-bg.png',
      logoPath: '/src/assets/image/dashboard/logo-desktop.png'
    }
  };
  // 主界面背景图
  function setDashbordBgImage() {
    return assetsImages.dashboard.bgPath;
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
