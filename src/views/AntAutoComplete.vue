<template>
  <div>
    <!-- TODO:dataSource插槽不能用，改用props的options代替，但是options没有API说明 -->
    <a-auto-complete
      v-model:value="value"
      style="width:200px"
      placeholder="在此输入"
      @search="handleSearch"
      :options="options"
    ></a-auto-complete>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
const options = ref([
  { value: "gmail.con" },
  { value: "qq.com" },
  { value: "163.com" }
]);

const handleSearch = val => {
  let res;
  if (!val || val.indexOf("@") >= 0) {
    res = [];
    // console.log("清空");
  } else {
    // res = [{}].map() 这种写法会导致 res 接收到一个空的数组
    /*
    res = [
      { text: 1, value: "gmail.con" },
      { text: 2, value: "qq.com" },
      { text: 3, value: "163.com" }
    ].map(domain => {
      domain.value = `${val}@${domain.value}`;
      // console.log(domain.value);
    });
    console.log(res);
    */
    res = [
      { text: 1, value: "gmail.con" },
      { text: 2, value: "qq.com" },
      { text: 3, value: "163.com" }
    ];
    res.map(domain => {
      domain.value = `${val}@${domain.value}`;
      // console.log(domain.value);
    });
    // console.log(res);
  }
  options.value = res;
};
</script>

<style>
</style>