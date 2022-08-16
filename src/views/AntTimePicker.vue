<template>
  <div>
    <a-typography>
      <a-typography-title :level="2">TimePicker</a-typography-title>
      <a-divider></a-divider>
      <a-typography-title :level="3">何时使用</a-typography-title>
      <a-typography-paragraph>当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。</a-typography-paragraph>
      <br />
      <br />
      <a-typography-title :level="3">代码演示</a-typography-title>
    </a-typography>
    <a-divider></a-divider>
    <a-time-picker v-model:value="value"></a-time-picker>
  </div>
</template>

<script>
import moment from "moment";
import { ref, watch } from "vue";
export default {
  setup() {
    const value = ref(moment("08:00:00", "HH:mm:ss"));
    const strValue = ref("09:00:00");
    watch(value, () => {
      console.log(value.value);
    });
  }
};
</script>

<style>
</style>