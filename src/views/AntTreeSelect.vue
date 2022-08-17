<template>
  <div>
    <a-typography>
      <a-typography-title :level="2">Tree 树形控件</a-typography-title>
      <a-divider></a-divider>
      <a-typography-title :level="3">何时使用</a-typography-title>
      <a-typography-paragraph>类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等。</a-typography-paragraph>
      <a-typography-title :level="3">代码演示</a-typography-title>
      <a-divider></a-divider>
    </a-typography>
    <a-tree-select
      v-model:value="value"
      style="width:80%"
      :dropdown-style="{maxHeight:'400px', overflow:'auto'}"
      :tree-data="treeData"
      placeholder="Please select"
      tree-default-expand-all
      allow-clear
      multiple
      :maxTagCount="1"
      maxTagPlaceholder="…"
      treeCheckable
      :treeDefaultExpandAll="false"
    >
      <template #suffixIcon>
        <SettingOutlined />
      </template>
      <template #title="{key,value}">
        <span style="color: #08c">Child Node1 {{ value }}</span>
      </template>
    </a-tree-select>
    <br />
    <a-typography-text type="danger">Bug:加载不出后缀图标，原因不详</a-typography-text>
  </div>
</template>

<script>
import { SettingOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";
const treeData = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        value: "0-0-1",
        key: "0-0-1",
        slots: {
          title: "title"
        }
      },
      {
        title: "Child Node2",
        value: "0-0-2",
        key: "0-0-2"
      }
    ]
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1"
  }
];
export default defineComponent({
  components: {
    SettingOutlined
  },
  setup() {
    const value = ref();
    watch(value, () => {
      console.log(value.value);
    });

    return {
      value,
      treeData
    };
  }
});
</script>

<style>
</style>