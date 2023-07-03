/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-02-09 13:51:07
 * @LastEditTime: 2023-02-09 16:46:28
 * @Reference:
 */

// 设置侧边栏伸缩状态
export const useMenuCollapse = defineStore("collapse", {
  state() {
    return {
      isCollapse: false
    };
  },
  actions: {
    setCollapse() {
      // setCollapse(collapseStatus: boolean) {
      this.isCollapse = !this.isCollapse;
    }
  },
  getters: {
    getCollapseStatus(state) {
      console.log(state.isCollapse);
      return state.isCollapse;
    }
  }
});
