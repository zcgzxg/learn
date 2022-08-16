<template>
  <div>
    <a-rate v-model:value="value1" />
    <a-divider orientation="left">支持半星</a-divider>
    <a-rate v-model:value="value2" allowHalf />

    <a-divider orientation="left">带文案</a-divider>
    <span>
      <a-rate v-model:value="value2" :tooltips="desc"></a-rate>
      <span>{{desc[parseInt(value2-1)]}}</span>
    </span>
    <a-divider orientation="left">只读</a-divider>
    <a-rate disabled v-model:value="value2" :tooltips="desc"></a-rate>
    <a-divider orientation="left">禁用清除</a-divider>
    <a-rate :allowClear="false" v-model:value="value2" :tooltips="desc">
      <template #character>
        <heart-outlined />
      </template>
    </a-rate>
    <a-divider orientation="left">自定义字符</a-divider>
    <a-rate character="Ginlon" v-model:value="value2" :tooltips="desc"></a-rate>
  </div>
</template>

<script>
import { ref } from "vue";
import { HeartOutlined } from "@ant-design/icons-vue";
export default {
  setup() {
    const value1 = ref(2);
    const value2 = ref(2.5);
    const desc = ref(["terrible", "bad", "normal", "good", "wonderful"]);

    return {
      value1,
      value2,
      desc
    };
  },
  components: {
    HeartOutlined
  }
};
</script>

<style>
</style>