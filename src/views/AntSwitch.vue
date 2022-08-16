<template>
  <div>
    <a-typography>
      <a-typography-title>Switch</a-typography-title>
      <a-divider></a-divider>
      <a-typography-paragraph>
        <ul>
          <li>需要表示开关状态/两种状态之间的切换时</li>
          <li>
            和
            <a-typography-text code>checkbox</a-typography-text>的区别是，切换
            <a-typography-text code>switch</a-typography-text>会直接触发状态改变，而
            <a-typography-text code>checkbox</a-typography-text>一般用于状态标记，需要和提交操作配合
          </li>
        </ul>
      </a-typography-paragraph>
    </a-typography>
    <a-divider orientation="left">不同尺寸</a-divider>
    <a-switch checked-children="开" un-checked-children="关" v-model:checked="checked1"></a-switch>
    <br />
    <a-switch
      checked-children="开"
      un-checked-children="关"
      loading
      size="small"
      v-model:checked="checked2"
    ></a-switch>
    <span>加载中</span>
  </div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>

<style>
</style>