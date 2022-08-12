<template>
  <div>
    <a-steps :current="1">
      <a-step>
        <!-- 插槽写法 -->
        <template #title>Finished</template>
        <template #description>
          <span>描述信息</span>
        </template>
      </a-step>
      <!-- 传参写法 -->
      <a-step title="In Progress" sub-title="副标题" description="描述信息"></a-step>
      <a-step title="Waiting" sub-title="sub-title" description="描述"></a-step>
    </a-steps>
    <br />
    <!-- size="small" 迷你版 -->
    <a-steps :current="1" size="small">
      <a-step title="Finished">
        <!-- 图标 -->
        <template #icon>
          <user-outlined />
        </template>
      </a-step>
      <a-step state="process" title="In Progress">
        <template #icon>
          <loading-outlined />
        </template>
      </a-step>
      <a-step state="wait" title="Waiting" />
    </a-steps>

    <div>
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title"></a-step>
      </a-steps>
      <div class="steps-content">{{steps[current].content}}</div>
      <div class="steps-action">
        <a-button v-if="current < steps.length -1" type="primary" @click="next">Next</a-button>
        <a-button
          v-if="current == steps.leght - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
        >Done</a-button>
        <a-button v-if="current > 0" style="margin-left:8px" @click="prev">Previous</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined
} from "@ant-design/icons-vue";

const current = ref(0);
const next = () => {
  current.value++;
};
const prev = () => {
  current.value--;
};
const steps = [
  {
    title: "First",
    content: "First-content"
  },
  {
    title: "Second",
    content: "Second-content"
  },
  {
    title: "Last",
    content: "Last-content"
  }
];
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>