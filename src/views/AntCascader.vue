<template>
  <div>
    <a-cascader
      v-model:value="value"
      :options="optionsArray"
      :show-search="{ filter }"
      placeholder="Please select"
      :allowerClear="false"
      expandTrigger="hover"
      dropdownClassName="ceshi123"
      :dropdownStyle="{ background: '#aaeeff', width: '350px' }"
      @change="change"
    >
    </a-cascader>
    <a-typography-text v-if="isShow" type="danger">
      请选择完整
    </a-typography-text>
  </div>
</template>
<script setup>
import { ref } from "vue";
import provinces from "../store/provinces.json";
import cities from "../store/cities.json";
import areas from "../store/areas.json";
import { isTSEnumMember } from "@babel/types";
// 生成城市选择列表
const optionsArray = ref([]);
optionsArray.value = provinces;
optionsArray.value.map((item) => {
  item.value = item.code;
  item.label = item.name;
  item.children = cities.filter((element) => {
    element.value = element.code;
    element.label = element.name;
    if (element.provinceCode == item.code) {
      element.children = areas.filter((areas) => {
        areas.value = areas.code;
        areas.label = areas.name;
        if (areas.cityCode == element.code) return true;
        else return false;
      });
      return true;
    } else return false;
  });
  // console.log(item);
});
// console.log(optionsArray);

// console.log(provinces);
const value = ref(["11", "1101", "110101"]);

const filter = (inputValue, path) => {
  // some 测试数组是不是至少有一个元素通过了提供的函数的测试
  // tpLowerCase() 转小写
  // indexof() 字符串的indexOf方法返回该字符串在母字符串出现的第一个位置
  return path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
};

const isShow = ref(false);
const change = (value, selectedOptions) => {
  console.log("value", value);
  console.log("selectedOptions", selectedOptions);
  if ((value != undefined && value.length < 3) || value == undefined) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
};
</script>
<style></style>
