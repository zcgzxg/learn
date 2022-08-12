<template>
  <div>
    <!-- 
        current 当前页数
        pageSzie 每页容纳条数
        pageSizeOptions 指定每页可以显示多少条
        showQuickjumper 是否可以快速跳转至某页
        showSizeChanger 是否可以改变pageSize
        simple 显示为简单分页
        total 总数据
        size="small" 小尺寸分页
        change 页码改变后的回调,参数是改变后的页码及每页条数 function(page, pageSize)
        showSizeChange pageSize 变化的回调
        /* 注意 vue 属性支持两种写法 page-size 和 pageSize 是等价的，其他同理 */
    -->
    <a-pagination
      v-model:current="current"
      v-model:pageSize="pageSize"
      :page-size-options="pageSizeOptions"
      :total="total"
      show-size-changer
      show-less-items
      showQuickJumper
      size="small"
      @showSizeChange="onShowSizeChange"
    >
      <template #buildOptionText="props">
        <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
        <span v-else>全部</span>
      </template>
    </a-pagination>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const pageSize = ref(20);

    watch(pageSize, () => {
      console.log("pageSize", pageSize.value);
    });
    // current 当前所在分页， pageSzie 每页展示条目数

    const pageSizeOptions = ref(["10", "20", "30", "40", "50"]);
    const current = ref(1);
    const pageSizeRef = ref(10);
    const total = ref(50);

    const onShowSizeChange = (current, pageSize) => {
      console.log(pageSize);
      pageSizeRef.value = pageSize;
    };

    return {
      pageSizeOptions,
      current,
      pageSize: pageSizeRef,
      total,
      onShowSizeChange
    };
  }
};
</script>

<style>
</style>