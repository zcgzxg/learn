<template>
  <a-affix :offset-top="0">
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 200px"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <template #icon>
          <MailOutlined />
        </template>
        <!-- 插槽 -->
        <template #title>08-10</template>
        <!-- <template #title>Item 1</template> -->
        <a-menu-item key="home">Home</a-menu-item>
        <a-menu-item key="antTypography">antTypography</a-menu-item>
        <a-menu-item key="conditionRender">conditionRender</a-menu-item>
        <a-menu-item key="grid">Grid 栅格</a-menu-item>
        <a-menu-item key="antLayout">Layout 布局</a-menu-item>
        <a-menu-item key="antSpace">Spcae 间距</a-menu-item>
        <a-menu-item key="antBreadcrumb">Breadcrumb 面包屑</a-menu-item>
        <!-- <a-menu-item-group key="g2" title="Item 2">
        <a-menu-item key="4">Option 4</a-menu-item>
      </a-menu-item-group> -->
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>Navigation Three</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-affix>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  MailOutlined,
  // QqOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'
/* eslint-disable */ 
export default defineComponent({
  components: {
    MailOutlined,
    // QqOutlined,
    AppstoreOutlined,
    SettingOutlined
  },

  setup() {
    const router = useRouter()
    const route = useRoute()

    const selectedKeys = ref(['1'])
    const openKeys = ref(['sub1'])

    const handleClick = (e) => {

      console.log("click", e.key);
      console.log(route);
      router.push({ name: e.key, params:{id:123} });
    }
    const titleClick = (e) => {
      console.log('titleClick', e)
    }

    watch(
      () => openKeys,
      (val) => {
        console.log('openKeys', val)
      }
    )
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick
    }
  }
})
</script>
<style>
</style>