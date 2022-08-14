<template>
  <div>
    <!-- <h2>Checkbox</h2> -->
    <!-- indeterminate 混合状态 -->
    <!-- <a-checkbox
      v-model:checked="state.checkAll"
      :indeterminate="state.indeterminate"
      @change="onCheckAllChange"
      >Check all
    </a-checkbox>
    <br />
    <a-checkbox-group v-model:value="state.checkedList" :options="plainOptions">
    </a-checkbox-group>
    <br /> -->
    <br />
    <a-checkbox-group
      v-model:value="state.value1"
      name="checkboxgroup"
      :options="plainOptions"
    />
    <br />
    <a-checkbox-group v-model:value="state.value2" :options="plainOptions" />
    <br />
    <a-checkbox-group v-model:value="state.value3" :options="options" />
    <br />
    <a-checkbox-group
      v-model:value="state.value4"
      :options="optionsWithDisabled"
      disabled
    >
      <template #label="{ value }">
        <span style="color: red">{{ value }}</span>
      </template>
    </a-checkbox-group>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, watch } from "vue";
// const plainOptions = ["Apple", "Pear", "Orange"];
// // const checked = ref(false);
// // reactive 根据一个引用类型返回一个响应式对象
// const state = reactive({
//   indeterminate: true,
//   checkAll: false,
//   checkedList: ["Apple", "Orange"],
// });

// const onCheckAllChange = (e) => {
//   Object.assign(state, {
//     checkedList: state.checkAll ? plainOptions : [],
//     indeterminate: false,
//   });
// };

// // 侦听checkedList变化，更新 indeterminate(混合) 和 checkAll 状态
// watch(
//   () => state.checkedList,
//   (val) => {
//     state.indeterminate = !!val.length && val.length < plainOptions.length;
//     state.checkAll = val.length === plainOptions.length;
//   }
// );

// ------------------------------------------
// 数组形式选项
const plainOptions = ["Apple", "Pear", "Orange"];
// 对象形式选项
const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
    disabled: true, // 禁用此选项
  },
];
const optionsWithDisabled = [
  {
    value: "Apple",
    //TODO: label 是渲染的 checkbox 而 value 是传递给的值
    // 此项未指定 label 因此默认插槽会读取此项
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
    disabled: false,
  },
];
const state = reactive({
  value1: [],
  value2: ["Apple"],
  value3: ["Pear"],
  value4: ["Orange"],
});
</script>
