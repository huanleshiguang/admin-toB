<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:31:02
 * @LastEditTime: 2023-02-16 15:12:36
 * @Reference: 
-->
<script lang="ts" setup>
import { useNavMenuList } from "/@/store/common/routerList";
import type { MenuProps } from "ant-design-vue";
withDefaults(
  defineProps<{
    collapseValue: boolean;
  }>(),
  {
    collapseValue: false
  }
);
const { navMenuList } = useNavMenuList();
const privateRoute = useRoute();
const router = useRouter();

const currentRouteName = computed(() => {
  return privateRoute.path;
});
const handleClick: MenuProps["onSelect"] = (e) => {
  const { key } = e;
  router.push({ path: key as string});
  console.log("click", e);
};
</script>

<template>
  <a-menu router unique-opened class="qm-menu" mode="inline" @select="handleClick">
    <template v-for="item in navMenuList" :key="item.id">
      <a-sub-menu v-if="item.children" :key="item.path">
        <template #title>
          <span>{{ item.label }}</span>
        </template>
        <a-menu-item-group v-for="menuItem in item.children" :key="menuItem.id">
          <a-menu-item :key="menuItem.path" class="menu-item_custom">{{ menuItem.label }}</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item v-else :key="item.path" class="menu-item_custom">
        {{ item.label }}
      </a-menu-item>
    </template>
  </a-menu>
</template>

<style scoped lang="scss">
.qm-menu {
  border-right-color: transparent;
}
.menu-icon {
  width: 1em;
  height: 1em;
  margin-right: 5px;
}
</style>
