<template>
  <div>
    <h2>Calender</h2>
    <a-divider></a-divider>
    <a-typography-title :level="3">代码演示</a-typography-title>
    <a-divider></a-divider>
    <a-calendar v-model:value="value" @panelChange="onPanelChange"></a-calendar>
    <a-divider orientation="left">卡片版</a-divider>
    <div :style="{width:'300px', border:'1px solid #d9d9d9', borderRadius:'4px'}">
      <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange"></a-calendar>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref();
    const onPanelChange = (value, mode) => {
      console.log(value, mode);
    };

    return {
      value,
      onPanelChange
    };
  }
});
</script>

<style>
</style>