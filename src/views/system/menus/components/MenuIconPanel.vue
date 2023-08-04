<template>
  <div
    v-for="item in menuIcons"
    :key="item.value"
    class="w-60 h-60 m-xAxis-5 flex-col uno-flex-center menu-icon"
    @click="onChangeMenuIcon(`${item.value}`)"
  >
    <SvgIcon :icon-class="item.value" class="w-20 h-20" color="000"></SvgIcon>
    <span>{{ item.label }}</span>
  </div>
</template>

<script lang="ts" setup>
import { setMenuIcons } from '/@/utils/dict';

// 菜单图标下拉
const menuIcons = setMenuIcons();

const menuIconPaneProps = withDefaults(
  defineProps<{
    // 菜单图标值
    menuIcon: string;
    // 显示隐藏图标
    menuIconVisiable: boolean;
  }>(),
  {
    menuIcon: '',
    menuIconVisiable: false
  }
);

const menuIconPaneEmits = defineEmits<{
  (event: 'update:menuIcon', iconName: string);
  (event: 'update:menuIconVisiable', visiable: boolean);
}>();

// 图标点击选择事件
function onChangeMenuIcon(value: string) {
  menuIconPaneEmits('update:menuIcon', value);
  menuIconPaneEmits('update:menuIconVisiable', !menuIconPaneProps.menuIconVisiable);
}
</script>
<style lang="scss" scoped>
.menu-icon {
  @include cursor;
  border-radius: $border-radius;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: rgba(#000000, 0.1);
  }
}
</style>
