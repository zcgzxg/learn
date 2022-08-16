<template>
  <div>
    <a-typography>
      <a-typography-title :level="2">Transfer 穿梭框</a-typography-title>
      <a-divider></a-divider>
      <a-typography-title :level="3">何时使用</a-typography-title>
      <ul>
        <li>需要在多个可选项中进行多选时</li>
        <li>比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。</li>
      </ul>
    </a-typography>
    <!-- target-keys 右侧项的key -->
    <a-transfer
      :data-source="mockData"
      show-search
      :list-style="{
        width:'300px',
        height:'300px',
    }"
      :operations="['to right', 'to left']"
      :target-keys="targetKeys"
      :render="item => `${item.tile} - ${item.description}`"
      @change="handleChange"
    >
      <template #footer>
        <a-button size="small" style="float:right; margin:5px" @click="getMock">reload</a-button>
      </template>
      <template #notFoundContent>
        <span>没有数据</span>
      </template>
    </a-transfer>
    <br />
    <a-divider orientation="left">自定义渲染项</a-divider>
    <br />
    <a-transfer
      :data-source="mockData"
      show-search
      :list-style="{
        width:'300px',
        height:'300px',
    }"
      :operations="['to right', 'to left']"
      :target-keys="targetKeys"
      @change="handleChange"
    >
      <template #footer>
        <a-button size="small" style="float:right; margin:5px" @click="getMock">reload</a-button>
      </template>
      <template #notFoundContent>
        <span>没有数据</span>
      </template>
      <!-- 自定义渲染项样式 -->
      <template #render="item">
        <span class="custon-item" style="color:#339956">{{item.title}}-{{item.description}}</span>
      </template>
    </a-transfer>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {
    const mockData = ref([]);
    const targetKeys = ref([]); // 标记数组
    onMounted(() => {
      getMock(); // 加载完成后填充假数据
    });

    // 生成假数据
    const getMock = () => {
      const keys = [];
      const mData = [];

      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1 // 随机选中部分数据
        };

        // 选中数据的key入组
        if (data.chosen) {
          keys.push(data.key);
        }
        // 所有数据都加入到总数据对象中
        mData.push(data);
      }

      mockData.value = mData;
      targetKeys.value = keys;
    };

    const handleChange = (keys, direction, moveKeys) => {
      // keys:目标(右侧)key数组，目标数组中的所有项的key(改变后)
      // direction:改变方向
      // moveKeys:发生改变的目标的key值数组
      targetKeys.value = keys;
      console.log(keys, direction, moveKeys);
    };

    return {
      mockData,
      targetKeys,
      handleChange,
      getMock
    };
  }
});
</script>

<style>
</style>