<template>
  <div>
    <a-tree-select
      v-model:value="value"
      tree-data-simple-mode
      style="width:80%"
      :dropdown-style="{maxHeight:'400px', overflow:'auto'}"
      :tree-data="treeData"
      placeholder="Please select"
      :load-data="onLoadData"
    />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  setup() {
    const value = ref();
    const treeData = ref([
      {
        id: 1,
        pId: 0,
        value: "1",
        title: "Expand to load"
      },
      {
        id: 2,
        pId: 0,
        value: "2",
        title: "Expand to load"
      },
      {
        id: 3,
        pId: 0,
        value: "3",
        title: "Tree Node",
        isLeaf: true
      }
    ]);
    watch(value, () => {
      console.log(value.value);
    });

    // 节点生成
    const genTreeNode = (parentId, isLeaf = false) => {
      const random = Math.random()
        .toString(36)
        .substring(2, 6);
      return {
        id: random,
        pId: parentId,
        value: random,
        title: isLeaf ? "Tree Node" : "Expand to load",
        isLeaf
      };
    };

    const onLoadData = treeNode => {
      console.log(treeNode);
      return new Promise(resolve => {
        const { id } = treeNode.dataRef;
        setTimeout(() => {
          // 通过数组的 concat 方法将生成数据合并到原数组中
          treeData.value = treeData.value.concat([
            genTreeNode(id, false),
            genTreeNode(id, true),
            console.log("data", treeData.value),
            resolve() // Promise 对象异步调用结束时执行此函数来告诉 Promise 对象执行结束
          ]);
        }, 300);
      });
    };
    return {
      value,
      treeData,
      genTreeNode,
      onLoadData
    };
  }
});
</script>

<style>
</style>