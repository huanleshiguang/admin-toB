import { useRequereImage } from '/@/hooks/common/useRequireImage';
export function useDashboardCommon() {
  const { setDashbordBgImage, setDashbordLogo } = useRequereImage();
  const backgroundImage = `url("${setDashbordBgImage('src')}") 100% 100%`;
  const menuList = ref<Iobj[]>([
    {
      id: 1,
      icon: 'doctor',
      name: '医护工作站',
      url: '/system/param'
    },
    {
      id: 2,
      icon: 'manage',
      name: '医生工作站',
      url: '/doctorNurse/berth/index'
    },
    {
      id: 3,
      icon: 'statistics',
      name: '统计查询',
      url: '/system/menu'
    },
    {
      id: 4,
      icon: 'setup',
      name: '系统配置',
      url: '/system/menu'
    }
  ]);
  const notificationList = ref<Iobj[]>([
    {
      id: 1,
      title: '1、增加医嘱输入计算'
    },
    {
      id: 2,
      title: '2、增加护理评分模板'
    },
    {
      id: 3,
      title: '3、增加打印配置项'
    }
  ]);
  const supportList = ref<Iobj[]>([
    {
      id: 1,
      title: '1、信息科： 孙xx13913913900'
    },
    {
      id: 2,
      title: '2、飞救实施：李xx13681209999'
    }
  ]);
  return {
    ...toRefs(
      reactive({
        menuList,
        notificationList,
        supportList,
        backgroundImage,
        setDashbordLogo
      })
    )
  };
}
