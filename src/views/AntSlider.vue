<template>
  <div>
    <a-row>
      <a-col :span="12">
        <div class="icon-wrapper">
          <frown-outlined :style="{ color: preColor }" />
          <a-slider :flex="1" :min="0" :max="100" v-model:value="value" :tip-formatter="formatter" />
          <smile-outlined :style="{ color: nextColor }" />
        </div>
      </a-col>
      <a-col :span="4">
        <a-input-number :min="0" :max="100" v-model:value="value"></a-input-number>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <div class="icon-wrapper">
          <frown-outlined :style="{ color: preColor }" />
          <a-slider
            :marks="marks"
            range
            :min="0"
            :max="100"
            v-model:value="value2"
            :tip-formatter="null"
          />
          <smile-outlined :style="{ color: nextColor }" />
        </div>
      </a-col>
      <a-col :span="4">
        <a-input-number :min="0" :max="100" v-model:value="value2[0]"></a-input-number>
      </a-col>
      <a-col :span="4">
        <a-input-number :min="0" :max="100" v-model:value="value2[1]"></a-input-number>
      </a-col>
    </a-row>
    <div style="height: 300px">
      <a-slider vertical :tooltip-visible="true"></a-slider>
    </div>
  </div>
</template>
<script>
import { defineComponent, createVNode, ref, computed } from "vue";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  setup() {
    const value = ref(0);
    const value2 = ref([0, 10]);
    const disabled = ref(false);
    const min = ref(0);
    const max = ref(100);

    const formatter = value => {
      return `${value}%`;
    };

    const preColor = computed(() => {
      const mid = +((max.value - min.value) / 2).toFixed(5);
      return value.value >= mid ? "" : "rgba(0, 0, 0, .45)";
    });
    const nextColor = computed(() => {
      const mid = +((max.value - min.value) / 2).toFixed(5);
      return value.value >= mid ? "rgba(0, 0, 0, .45)" : "";
    });

    const marks = ref({
      0: "0°C",
      26: "26°C",
      37: "37°C",
      100: {
        style: {
          color: "#f50"
        },
        // TODO:VNode?
        label: createVNode("strong", {}, "100°C")
      }
    });

    return {
      marks,
      preColor,
      nextColor,
      value,
      value2,
      disabled,
      formatter
    };
  },
  components: {
    FrownOutlined,
    SmileOutlined
  }
});
</script>
<style>
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}

.icon-wrapper .anticon:first-child {
  left: 0;
}

.icon-wrapper .anticon:last-child {
  right: 0;
}
</style>
