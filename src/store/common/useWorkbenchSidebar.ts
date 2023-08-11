/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-02-11 15:51:21
 * @LastEditTime: 2023-08-10 15:18:51
 * @Reference:
 */

/**
 * 护士 / 医生工作站侧边栏
 */
export const useWorkbenchSidebar = defineStore('workbenchSidebar', () => {
  const leftBar = reactive({
    showSideBar: false
  });

  function setShowSideBar(data: boolean): void {
    leftBar.showSideBar = data;
  }

  return { leftBar, setShowSideBar };
});
