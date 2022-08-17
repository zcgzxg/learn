<template>
  <div>
    <h2>Select</h2>
    <a-space>
      <a-select
        ref="select"
        v-model:value="value1"
        style="width:120px"
        @focus="focus"
        @change="handleChange"
      >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="diasbled" disabled>Disabled</a-select-option>
      </a-select>
      <a-select
        ref="select"
        v-model:value="value1"
        style="width:120px"
        @focus="focus"
        @change="handleChange"
        label-in-value
        loading
      >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="diasbled" disabled>Disabled</a-select-option>
        <a-select-option value="label" disabled>
          <a-typography-text type="danger">label in value</a-typography-text>
        </a-select-option>
      </a-select>
      <a-select
        ref="select"
        v-model:value="value1"
        style="width:120px"
        @focus="focus"
        @change="handleChange"
        disabled
      >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="diasbled" disabled>Disabled</a-select-option>
      </a-select>
    </a-space>
    <a-divider orientation="left">尺寸大小</a-divider>
    <a-space direction="vertical">
      <a-radio-group v-model:value="size" button-style="solid">
        <a-radio-button value="large">Large</a-radio-button>
        <a-radio-button value="default">Default</a-radio-button>
        <a-radio-button value="small">Small</a-radio-button>
      </a-radio-group>

      <a-select v-model:value="value2" :size="size" style="width:200px" :options="options"></a-select>
      <a-select
        v-model:value="value3"
        :size="size"
        placeholder="multiple 多选模式"
        style="width:200px"
        :token-separators="[',']"
        mode="multiple"
        :options="options"
        @popupScroll="popupScroll"
      ></a-select>
      <a-select
        :filterOption="filterOption"
        v-model:value="value4"
        :size="size"
        placeholder="tags 标签模式 ','自动分词 检索"
        :token-separators="[',']"
        style="width:260px"
        mode="tags"
        :options="options1"
        @popupScroll="popupScroll"
      ></a-select>
    </a-space>
    <a-divider orientation="left">扩展菜单</a-divider>
    <a-select
      :bordered="false"
      v-model:value="value5"
      style="width:120px"
      :options="items.map(item=>({value:item}))"
    >
      <template #dropdownRender="{menuNode:menu}">
        <!-- 
        dropdownRender：自定义下拉框内容
        类型 ({menuNode: VNode, props}) => VNode | v-slot
        {menuNode:menu} 作用域传参 传递了一个menuNode节点出来 用解构运算将 menuNode 重命名为 menu
        然后将 menu 传递到代理组件VNodes中去，并在VNodes中返回（此处的 menu 是组件通过作用域传参提供的 VNode 虚拟节点）
        -->
        <!-- TODO: VNodes -->
        <v-nodes :vnodes="menu" />
        <!-- 创建虚拟节点 menu -->
        <a-divider style="margin: 4px 0" />
        <div
          style="padding: 4px 8px; cursor:pointer"
          @mousedown="e=>e.preventDefault()"
          @click="addItem"
        >
          <plus-outlined />Add item
        </div>
      </template>
    </a-select>
  </div>
</template>

<script>
import { PlusOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
let index = 0;
export default {
  setup() {
    const options = ref([
      {
        value: "jack",
        label: "Jack"
      },
      {
        value: "lucy",
        label: "Lucy"
      },
      {
        value: "disabled",
        label: "Disabled",
        disabled: true
      },
      {
        value: "yiminghe",
        label: "Yiminghe"
      }
    ]);
    const focus = () => {
      console.log("focus");
    };
    const handleChange = value => {
      console.log("selected", value);
    };
    // ====================================
    const size = ref("small");
    const value2 = ref();
    const value3 = ref([]);
    const value4 = ref([]);
    const popupScroll = () => {
      console.log("popupScroll");
    };
    // 扩展菜单------------------------------
    const items = ref(["jack", "lucy"]);
    const value5 = ref("lucy");

    const addItem = () => [
      console.log("addItem"),
      items.value.push(`New item ${index++}`)
    ];
    // -------------------------------------
    // filterOption-------------------------
    function filterOption(inputValue, options) {
      return options.value.includes(inputValue);
    }

    return {
      filterOption,
      size,
      focus,
      value1: ref({ value: "lucky" }),
      popupScroll,
      value2,
      value3,
      value4,
      handleChange,
      options: [...Array(25)].map((_, i) => ({
        value: (i + 10).toString(36) + (i + 1)
      })),
      options1: [...Array(25)].map((_, i) => ({
        value: (i + 10).toString(36) + (i + 1)
      })),
      //   --------------
      items,
      value5,
      addItem
    };
  },
  components: {
    PlusOutlined,
    // VNodes:返回一个构建组件的函数，这个函数实际上就是setup()
    // 接收的第一个值 '_' 实际上就是props，props 中未定义的值会传入到 attrs
    // 此处 attrs 接收到了一个 vnode 虚拟节点对象，并将其返回
    VNodes: (_, { attrs }) => {
      //   console.log(attrs.vnodes);
      //   console.log(_);
      return attrs.vnodes;
    }
  }
};
</script>

<style>
</style>