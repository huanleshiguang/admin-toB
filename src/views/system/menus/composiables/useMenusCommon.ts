export function useMenusCommon() {
  const formInline = ref();
  return {
    ...toRefs(
      reactive({
        formInline
      })
    )
  }
}