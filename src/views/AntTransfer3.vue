<template>
  <div>
    <a-transfer
      class="tree-transfer"
      :data-source="dataSource"
      :target-keys="targetKeys"
      :render="item=>item.title"
      :show-select-all="false"
      @change="onChange"
    >
      <template #children="{direction, selectedKeys, onItemSelect}">
        <!-- Tree 树形控件 -->
        <a-tree
          v-if="direction === 'left'"
          blockNode
          checkable
          checkStrictly
          defaultExpandAll
          :checkedKeys="[...selectedKeys, ...targetKeys]"
          :treeData="treeData"
          @check="(_,props)=>{
            onChecked(_,props,[...selectedKeys,...targetKeys],onItemSelect)
          }"
          @select="
          (_,props)=>{
            onChecked(_,props,[...selectedKeys,...targetKeys],onItemSelect)
          }"
        />
      </template>
    </a-transfer>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
const tData = [
  {
    key: "0-0",
    title: "0-0"
  },
  {
    key: "0-1",
    title: "0-1",
    children: [
      {
        key: "0-1-0",
        title: "0-1-0"
      },
      {
        key: "0-1-1",
        title: "0-1-1"
      }
    ]
  },
  {
    key: "0-2",
    title: "0-3"
  }
];
const transferDataSource = [];

function flatten(list = []) {
  list.forEach(item => {
    transferDataSource.push(item);
    flatten(item.children);
  });
}

flatten(JSON.parse(JSON.stringify(tData)));

// 判断当前操作的key 在不在已选中的 key 中，在返回 true 不在返回 false
function isChecked(selectedKeys, eventKey) {
  return selectedKeys.indexOf(eventKey) !== -1;
}

// 修改目标数据的 disable 为 true
function handleTreeData(data, targetKeys = []) {
  data.forEach(item => {
    item["disabled"] = targetKeys.includes(item.key);

    if (item.children) {
      handleTreeData(item.children, targetKeys);
    }
  });

  return data;
}

export default defineComponent({
  setup() {
    const targetKeys = ref([]);
    const dataSource = ref(transferDataSource);
    const treeData = computed(() => {
      // console.log("handle", handleTreeData(tData, targetKeys.value));
      return handleTreeData(tData, targetKeys.value);
    });
    // 更新目标key数组
    const onChange = keys => {
      targetKeys.value = keys;
    };
    const onChecked = (_, e, checkedKeys, onItemSelect) => {
      // console.log("_:当前操作的值", _);
      // console.log("e:当前操作的对象", e);
      // console.log("checkedKeys:选中的key值，不包含当前操作的key值", checkedKeys);
      // console.log("onItemSelect:组件提供的函数", onItemSelect);
      const { eventKey } = e.node; // 当前操作节点的 key
      onItemSelect(eventKey, !isChecked(checkedKeys, eventKey)); // 改变选择状态
    };

    return {
      targetKeys,
      dataSource,
      treeData,
      onChange,
      onChecked
    };
  }
});
</script>

<style>
</style>