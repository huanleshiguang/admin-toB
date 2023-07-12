import { useRequereImage } from '/@/hooks/common/useRequireImage';
export function useDashboardCommon() {
  const { setDashbordBgImage, setDashbordLogo } = useRequereImage();
  const backgroundImage = `url("${setDashbordBgImage()}") 100% 100%`;
  const menuList = ref<Iobj[]>([
    {
      id: 1,
      name: '医护工作站',
      url: '/system/menu'
    },
    {
      id: 2,
      name: '医生工作站',
      url: '/system/menu'
    },
    {
      id: 3,
      name: '统计查询',
      url: '/system/menu'
    },
    {
      id: 4,
      name: '系统配置',
      url: '/system/menu'
    }
  ]);
  return {
    ...toRefs(
      reactive({
        menuList,
        backgroundImage,
        setDashbordLogo
      })
    )
  };
}
