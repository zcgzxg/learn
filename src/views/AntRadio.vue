<template>
  <div>
    <a-radio v-model:checked="checked">基础单Radio</a-radio>
    <a-radio v-model:checked="checked" disabled>不可用</a-radio>
    <a-radio-group v-model:value="value">
      <a-radio-button value="1">按钮样式单选框</a-radio-button>
      <a-radio-button value="2">按钮样式单选框</a-radio-button>
      <a-radio-button value="3">按钮样式单选框</a-radio-button>
      <a-radio-button value="4">按钮样式单选框</a-radio-button>
    </a-radio-group>
    <a-radio-group size="small" v-model:value="value1" button-style="solid">
      <a-radio-button :style="radioStyle" value="a">Hangzhou</a-radio-button>
      <a-radio-button :style="radioStyle" value="b">Shanghai</a-radio-button>
      <a-radio-button :style="radioStyle" value="c">Beijing</a-radio-button>
      <a-radio-button :style="radioStyle" value="d">Chengdu</a-radio-button>
    </a-radio-group>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const value = ref();
    const value1 = ref();
    const radioStyle = reactive({
      display: "block",
      height: "30px",
      lineHeight: "30px"
    });

    return {
      checked,
      value,
      value1,
      radioStyle
    };
  }
};
</script>

<style>
</style>