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
    <a-row>
      <a-col :span="22">
        <a-divider orientation="left">基本</a-divider>
      </a-col>
      <a-col :span="18" :offset="1">
        <a-time-picker v-model:value="value"></a-time-picker>
        <a-time-picker v-model:value="strValue" valueFormat="HH:mm:ss"></a-time-picker>
        <br />
        <a-typography-text type="danger">有BUG，无法修改第一个时间选择器时间，需要点击 Now 后才能修改。</a-typography-text>
        <a-typography-text type="warning">推测原因是没有创建对象存储修改值，当点击 Now 后自动创建了 moment 对象，因此可以修改</a-typography-text>
      </a-col>
    </a-row>
    <a-divider orientation="left">12小时制</a-divider>
    <a-row>
      <a-col>
        <a-time-picker
          v-model:value="value"
          v-model:open="open"
          use12-hours
          @openChange="handleOpenChange"
        >
          <template #renderExtraFooter="{prefixCls}">
            <a-button size="small" type="primary" @click="handleClose">OK{{prefixCls}}</a-button>
          </template>
        </a-time-picker>

        <a-time-picker v-model:value="value2" v-model:open="open2" use12-hours format="h:mm:ss A">
          <template #renderExtraFooter>
            <a-button size="small" type="primary" @click="handleClose">OK</a-button>
          </template>
        </a-time-picker>
        <a-time-picker v-model:value="value2" use12-hours format="h:mm a" />
      </a-col>
    </a-row>
    <a-typography-text type="danger">有BUG，openChange无法触发。</a-typography-text>
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
    watch(strValue, () => {
      console.log(strValue);
    });

    const open = ref(false);
    const open2 = ref(false);
    const value2 = ref();

    const handleOpenChange = openStatus => {
      console.log("处理执行");
      console.log("open", openStatus);
      open.value = openStatus;
    };

    const handleClose = () => {
      open.value = false;
      open2.value = false;
    };

    return {
      open,
      open2,
      value2,
      value,
      strValue,
      moment,
      handleOpenChange,
      handleClose
    };
  }
};
</script>

<style>
</style>