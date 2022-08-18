<template>
  <div>
    <h2>自定义头部</h2>
    <div style="width:300px; border:1px solid #d9d9d9; border-radius:4px">
      <a-calendar
        :disabledDate="(value)=>{
          // 限制只能选择 10 - 15 中间的日期
          if(value.date()>15||value.date()<10) return true}"
        v-model:value="value"
        :fullscreen="false"
        @panelChange="onPanelChange"
      >
        <template #headerRender="{value, type, onChange, onTypeChange}">
          <div style="padding:10px">
            <div style="margin-bottom:10px">Custom header</div>
            <a-row type="flex" justify="space-between">
              <a-col>
                <a-radio-group size="small" :value="type" @change="e=>onTypeChange(e.target.value)">
                  <a-radio-button value="month">Month</a-radio-button>
                  <a-radio-button value="year">Year</a-radio-button>
                </a-radio-group>
              </a-col>
              <a-col>
                <a-select
                  size="small"
                  :dropdown-match-select-width="false"
                  class="my-year-select"
                  :value="String(value.year())"
                  @change="newYear=>{
                    // 修改年份
                  onChange(value.clone().year(newYear))}"
                >
                  <a-select-option
                    v-for="val in getYears(value)"
                    :key="String(val)"
                    class="year-item"
                  >{{val}}</a-select-option>
                </a-select>
              </a-col>
              <a-col>
                <a-select
                  size="small"
                  :dropdown-match-select-width="false"
                  :value="String(value.month())"
                  @change="
                  selectedMonth => {
                    onChange(value.clone().month(parseInt(selectedMonth, 10)));
                  }
                "
                >
                  <a-select-option
                    v-for="(val, index) in getMonths(value)"
                    :key="String(index)"
                    class="month-item"
                  >{{ val }}</a-select-option>
                </a-select>
              </a-col>
            </a-row>
          </div>
        </template>
        <template #monthFullCellRender="{current: moment}">
          <div class="customMonth">{{moment.format('MMM')}}</div>
        </template>
      </a-calendar>
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

    const getMonths = value => {
      const current = value.clone();
      const localeData = value.localeData();
      const months = [];

      for (let i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.monthsShort(current.month(i)));
      }
      // console.log(months);
      return months;
    };

    const getYears = value => {
      const year = value.year();
      const years = [];

      for (let i = year - 10; i < year + 10; i += 1) {
        years.push(i);
      }

      return years;
    };

    return {
      value,
      onPanelChange,
      getMonths,
      getYears,
      log: m => console.log(m)
    };
  }
});
</script>

<style>
.customMonth {
  /* font-weight: bold; */
  background: rgba(192, 242, 250, 0);
  height: 100%;
  margin: 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.customMonth:hover {
  background: rgba(192, 242, 250, 0.6);
  font-size: 20px;
  border-radius: 10px;
}
</style>