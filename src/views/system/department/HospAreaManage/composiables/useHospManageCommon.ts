export function useHospManageCommon() {
  // vxeTableLayoutRef组件实例
  const vxeTableLayoutRef = ref();
  // updateRef组件实例
  const updateRef = ref();
  // 表格需要展示的字段
  const hospAreacolumnsList = [
    {
      title: '院区编码',
      field: 'hospAreaCode'
    },
    {
      title: '机构ID',
      field: 'hospId'
    },
    {
      title: '院区名称',
      field: 'hospAreaName'
    }
  ];
  return{
    ...toRefs(
      reactive({
        vxeTableLayoutRef,
        updateRef,
        hospAreacolumnsList
      })
    )
  }
}