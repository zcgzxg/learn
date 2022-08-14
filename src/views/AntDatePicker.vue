<template>
  <a-range-picker
    v-model:value="value"
    :disabledDate="disabledDate"
    @change="onChange"
    @openChange="onOpenChange"
    @calendarChange="onCalendarChange"
  >
    <template #renderExtraFooter>extra footer</template>
  </a-range-picker>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const dates = ref([]);
    const value = ref();

    // disabledDate 会遍历所有显示的日期
    const disabledDate = (current) => {
      if (!dates.value || dates.value.length === 0) {
        return false;
      }
      //   console.log(current);
      // moment().diff 获取给定日期的毫秒差
      //   第一个参数为日期类型，第二参数是度量单位，默认为整数，
      //   如果需要浮点则传入第三个参数为true
      const diffDate = current.diff(dates.value[0], "days" /*,true*/);
      console.log(diffDate);
      return Math.abs(diffDate) > 7; // 大于7则不可选取
    };

    const onOpenChange = (open) => {
      if (open) {
        dates.value = [];
      }
    };

    const onChange = (val) => {
      value.value = val;
    };

    const onCalendarChange = (val) => {
      dates.value = val;
    };

    return {
      dates,
      value,
      disabledDate,
      onOpenChange,
      onChange,
      onCalendarChange,
    };
  },
});
</script>
