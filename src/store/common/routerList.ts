/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-02-11 15:51:21
 * @LastEditTime: 2023-07-21 19:14:26
 * @Reference:
 */
export const useNavMenuList = defineStore('navMenuList', () => {
  const navMenuList = ref<Array<ICUCommon.MenuList>>([
    {
      id: 1001,
      label: '运行参数',
      icon: 'business',
      permission: 'system_role',
      path: '/system/param'
    },
    {
      id: 1002,
      label: '人员管理',
      icon: 'patient',
      permission: 'system_user',
      path: '/system/users'
    },
    {
      id: 1003,
      label: '床位管理',
      icon: 'kc',
      permission: 'system_role',
      path: '/system/bunk'
    },
    {
      id: 1004,
      label: '字典维护',
      icon: 'data',
      permission: 'system_menu',
      path: '/system/dictionary'
    }
  ]);
  function setNavMenuList(menuList: Array<ICUCommon.MenuList>) {
    navMenuList.value = menuList;
  }
  
  const leftBar = reactive({
	  showSideBar:false
  }) 
   
   function setShowSideBar(data:boolean){
	   leftBar.showSideBar = data;
   }
   
  return { navMenuList, setNavMenuList,leftBar,setShowSideBar };
});
