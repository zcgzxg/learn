<template>
  <div>
    <a-button type="primary" @click="toggleCollapsed">改变导航样式</a-button>
    <a-switch
      :checked="theme === 'dark'"
      checked-children="Dark"
      un-checked-children="Light"
      @change="changeTheme"
    />
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 200px"
      mode="inline"
      @click="handleClick"
      :inline-collapsed="collapsed"
      :theme="theme"
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
        </a-menu-item-group>-->
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>08-11</template>
        <a-menu-item key="antDropdown">Dropdwon</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>08-12</template>
        <a-menu-item key="antMenu">Menu 导航</a-menu-item>
        <a-menu-item key="antPageHeader">PageHeader 页头</a-menu-item>
        <a-menu-item key="antPagination">Pagintion 分页</a-menu-item>
        <a-menu-item key="antSteps">Steps 步骤条</a-menu-item>
        <a-menu-item key="antAutoComplete">AutoComplete 自动完成</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4" title="08-13">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <a-menu-item key="AntCascader">Cascader 级联选择</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5" title="08-14">
        <template #icon>
          <SettingOutlined />
        </template>
        <a-menu-item key="AntCheckbox">Checkbox 多选框</a-menu-item>
        <a-menu-item key="AntDatePicker">DatePicker 日期选择框</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub6" title="08-15">
        <template #icon>
          <SettingOutlined />
        </template>
        <a-menu-item key="AntForm">Form 表单</a-menu-item>
        <a-menu-item key="AntForm2">Form 表单2</a-menu-item>
        <a-menu-item key="AntForm3">Form 表单3</a-menu-item>
        <a-menu-item key="AntInput">Input 输入框</a-menu-item>
        <a-menu-item key="AntMentions">Mentions 提及</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  MailOutlined,
  // QqOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons-vue";
/* eslint-disable */

export default defineComponent({
  components: {
    MailOutlined,
    // QqOutlined,
    AppstoreOutlined,
    SettingOutlined
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const collapsed = ref(false);
    function toggleCollapsed() {
      collapsed.value = !collapsed.value;
    }
    // --------- 导航主题 -----------------
    const theme = ref("light");
    const changeTheme = checked => {
      theme.value = checked ? "dark" : "light";
    };
    // -----------------------------------

    const selectedKeys = ref(["AntForm"]); // 默认选中的菜单
    const openKeys = ref(["sub6"]); // 默认展开的导航
    const handleClick = e => {
      console.log("click", e.key);
      console.log(route);
      router.push({ name: e.key, params: { id: "Ginlon" } });
    };
    const titleClick = e => {
      console.log("titleClick", e);
    };

    watch(
      () => openKeys,
      val => {
        console.log("openKeys", val);
      }
    );
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
      collapsed,
      toggleCollapsed,
      theme,
      changeTheme
    };
  }
});
</script>
<style></style>
