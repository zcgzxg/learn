<template>
  <div>
    <h2>通知事项日历</h2>
    <a-divider></a-divider>
    <a-alert :message="`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`"></a-alert>
    <a-calendar v-model:value="value" @select="onSelect">
      <template #dateCellRender="{ current: value }">
        <ul class="events">
          <li v-for="item in getListData(value)" :key="item.content">
            <a-badge :status="item.type" :text="item.content"></a-badge>
          </li>
        </ul>
      </template>
      <template #monthCellRender="{current :value}">
        <div v-if="getMonthData(value)" class="notes-month">
          <section>{{getMonthData(value)}}</section>
          <span>Backlog number</span>
        </div>
      </template>
    </a-calendar>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import moment from "moment";
export default defineComponent({
  setup() {
    const value = ref();
    const selectedValue = ref(moment("2022-08-18"));

    const getListData = value => {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            {
              type: "warning",
              content: "This is warning event."
            },
            {
              type: "success",
              content: "This is usual event."
            }
          ];
          break;
        case 10:
          listData = [
            {
              type: "warning",
              content: "This is warning event."
            },
            {
              type: "success",
              content: "This is usual evevt."
            },
            {
              type: "error",
              content: "This is error event."
            }
          ];
          break;
        case 15:
          listData = [
            {
              type: "warning",
              content: "This is warning event"
            },
            {
              type: "success",
              content: "This is very long usual event。。...."
            },
            {
              type: "error",
              content: "This is error event 1."
            },
            {
              type: "error",
              content: "This is error event 2."
            },
            {
              type: "error",
              content: "This is error event 3."
            },
            {
              type: "error",
              content: "This is error event 4."
            }
          ];
          break;
        default:
      }
      return listData || [];
    };

    const onSelect = value => {
      selectedValue.value = value;
    };

    const getMonthData = value => {
      if (value.month() === 8) {
        return 1394;
      }
    };

    return {
      selectedValue,
      onSelect,
      value,
      getListData,
      getMonthData
    };
  }
});
</script>

<style>
</style>