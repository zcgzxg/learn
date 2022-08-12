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
    <a-steps direction="vertical" :current="1" size="small">
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
      <a-steps progress-dot :current="current" status="error">
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
    <br />
    <div>
      <a-steps :current="1">
        <template #progressDot="{ index, status, prefixCls }">
          <a-popover>
            <template #content>
              <span>step {{ index }} status: {{ status }}</span>
            </template>
            <span :class="`${prefixCls}-icon-dot`" />
          </a-popover>
        </template>
        <a-step title="Finished" description="You can hover on the dot." />
        <a-step title="In Progress" description="You can hover on the dot." />
        <a-step title="Waiting" description="You can hover on the dot." />
        <a-step title="Waiting" description="You can hover on the dot." />
      </a-steps>
    </div>
    <br />
    <div>
      <a-steps progressDot size="small" v-model:current="current2">
        <a-step title="Step 1" description="This is a description." />
        <a-step title="Step 2" description="This is a description." />
        <a-step title="Step 3" description="This is a description." />
      </a-steps>
      <a-divider />
      <a-steps progressDot v-model:current="current2" direction="vertical">
        <template #progressDot="{ index, status, prefixCls }">
          <a-popover>
            <template #content>
              <span>step {{ index }} status: {{ status }}</span>
            </template>
            <span :class="`${prefixCls}-icon-dot`" />
          </a-popover>
        </template>
        <a-step title="Step 1" description="v-model 绑定后." />
        <a-step title="Step 2" description="可以通过点击改变" />
        <a-step title="Step 3" description="This is a description." />
      </a-steps>
    </div>

    <div>
      <a-steps :current="1">
        <template #progressDot="{ index, status, prefixCls }">
          <a-popover>
            <template #content>
              <span>step {{ index }} status: {{ status }}</span>
            </template>
            <span :class="`${prefixCls}-icon-dot`" />
          </a-popover>
        </template>
        <a-step title="Finished" description="You can hover on the dot." />
        <a-step title="In Progress" description="You can hover on the dot." />
        <a-step title="Waiting" description="You can hover on the dot." />
        <a-step title="Waiting" description="You can hover on the dot." />
      </a-steps>
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
const current2 = ref(0);
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