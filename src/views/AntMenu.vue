<template>
  <div style="width: 256px">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <!-- 没有子元素时渲染为 a-menu-item -->
          <a-menu-item :key="item.key">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.title }}
          </a-menu-item>
        </template>

        <template v-else>
          <!-- 有子元素时引入 sub-menu 进行渲染，
          通过组件传值，传入当前对象的子列表作为 menu-info， 
          使用当前对象的 key 作为 item.key-->
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined
} from "@ant-design/icons-vue"; // you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js

// 声明一个新的组件对象，用于渲染子列表
const SubMenu = {
  name: "SubMenu",
  props: {
    menuInfo: {
      // 接受一个新的对象列表作为渲染 Menu 的依据
      type: Object,
      default: () => ({})
    }
  },
  template: `
    <a-sub-menu :key="menuInfo.key">
      <template #icon><MailOutlined /></template>
      <template #title>{{ menuInfo.title }}</template>
      <template v-for="item in menuInfo.children" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-sub-menu>
  `,
  components: {
    PieChartOutlined,
    MailOutlined
  }
};
const list = [
  {
    key: "1",
    title: "Option 1"
  },
  {
    key: "2",
    title: "Navigation 2",
    children: [
      {
        key: "2.1",
        title: "Navigation 3",
        children: [
          {
            key: "2.1.1",
            title: "Option 2.1.1"
          }
        ]
      }
    ]
  }
];
export default defineComponent({
  setup() {
    const collapsed = ref(false);

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    return {
      list,
      collapsed,
      toggleCollapsed
    };
  },

  components: {
    "sub-menu": SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined
  }
});
</script>