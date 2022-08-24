<template>
  <a-card title="Timeline">
    <a-timeline pending="Recording..." :reverse="reverse" mode="alternate">
      <a-timeline-item color="green">
        时间轴第一个节点 color:green
      </a-timeline-item>
      <a-timeline-item color="green">
        时间轴第二个节点 color:green
      </a-timeline-item>
      <a-timeline-item color="red">
        <h3>红色节点</h3>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item>
        <h3>默认蓝色</h3>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item color="gray">
        <template #dot>
          <clock-circle-outlined style="font-size: 16px" />
        </template>
        <h3>灰色节点</h3>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </a-timeline-item>
    </a-timeline>
    <a-tooltip color="green">
      <template #title>改变时间轴方向</template>
      <a-button type="primary" @click="handleClick">Toggle reverse</a-button>
    </a-tooltip>
  </a-card>
</template>

<script>
import { ref } from 'vue'
import { ClockCircleOutlined } from '@ant-design/icons-vue'
export default {
  setup() {
    const reverse = ref(false)
    const handleClick = () => {
      reverse.value = !reverse.value
    }

    return {
      reverse,
      handleClick,
    }
  },
  components: {
    ClockCircleOutlined,
  },
}
</script>

<style></style>

