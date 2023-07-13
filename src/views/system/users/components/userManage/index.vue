
<template>
  <div class="role-manage">
    <div calss="role-config">
      <base-item>
        <template #header-left>
          <span>角色配置</span>
          <el-button type="primary">添加</el-button>
          <el-button type="primary">修改</el-button>
          <el-button type="primary">删除</el-button>
        </template>
        <template #content>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">
                  <el-icon>
                    <Document />
                  </el-icon>
                  <span>item one</span>
                </el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </template>
      </base-item>
    </div>
    <div calss="work-stat">
      <base-item>
        <template #header-left>
          <span>工作站</span>
          <el-button type="primary">添加</el-button>
          <el-button type="primary">修改</el-button>
          <el-button type="primary">删除</el-button>
        </template>
        <template #content>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">
                  <el-icon>
                    <Document />
                  </el-icon>
                  <span>item one</span>
                </el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </template>
      </base-item>
    </div>
    <div calss="feac-list">
      <base-item>
        <template #header-left>
          <span>功能清单</span>
        </template>
        <template #content>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">
                  <el-icon>
                    <Document />
                  </el-icon>
                  <span>item one</span>
                </el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </template>
      </base-item>
    </div>
    <div calss="feac-limit">
      <base-item>
        <template #header-left>
          <span>功能权限</span>
        </template>
        <template #content>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">
                  <el-icon>
                    <Document />
                  </el-icon>
                  <span>item one</span>
                </el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Folder />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </template>
      </base-item>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import BaseItem from './components/BaseItem.vue'


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// const titleItem = '角色配置'
</script>
  
<style scoped lang="scss">
.role-manage {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  div {
    height: inherit
  }
}
</style>