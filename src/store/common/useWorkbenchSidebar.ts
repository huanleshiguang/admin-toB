/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-02-11 15:51:21
 * @LastEditTime: 2023-08-10 15:18:51
 * @Reference:
 */

export const useWorkbenchSidebar = defineStore('workbenchSidebar', () => {
  const leftBar = reactive({
    showSideBar: false
  });

  function setShowSideBar(data: boolean) {
    leftBar.showSideBar = data;
  }

  return { leftBar, setShowSideBar };
});
