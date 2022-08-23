<template>
  <a-card title="Popover 气泡卡片">
    <a-card title="基本用法">
      <a-space :size="12">
        <a-popover title="Title" trigger="hover">
          <template #content>
            <p>文本内容</p>
          </template>
          <a-button type="primary">Hover me</a-button>
        </a-popover>
        <a-popover title="Title" trigger="focus">
          <template #content>
            <p>文本内容</p>
          </template>
          <a-button type="primary">Focus me</a-button>
        </a-popover>
        <a-popover title="Title" tigger="click" v-model:visible="visible">
          <template #content>
            <p>文本内容</p>
            <a-button @click="hide">close</a-button>
          </template>
          <a-button type="primary">Click me</a-button>
        </a-popover>
      </a-space>
      <a-card style="margin-top: 20px; width: 100%" title="position">
        <a-popover placement="topLeft">
          <template #content>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <a-button>TL</a-button>
        </a-popover>
        <a-popover placement="topRight">
          <template #content>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <a-button>TR</a-button>
        </a-popover>
        <a-popover placement="leftTop">
          <template #content>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <a-button>LT</a-button>
        </a-popover>
      </a-card>
    </a-card>
    <a-card style="margin-top: 20px" title="Statistic 统计数值">
      <a-row>
        <a-col :span="12">
          <a-statistic
            title="Active Users"
            :value="12345644"
            style="margin-right: 50px"
            groupSeparator="-"
          >
            <template #suffix>
              <h4>Suffix</h4>
            </template>
          </a-statistic>
        </a-col>
        <a-col :span="12">
          <a-statistic
            title="Account Balance(CNY)"
            :value="1234564453"
            :precision="2"
            style="margin-right: 50px"
          >
            <template #prefix>
              <h4>Prefix</h4>
            </template>
          </a-statistic>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-card title="在卡片中使用Statistic">
            <a-statistic
              title="Feedback"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ fontSize: '36px', fontWeight: 'bold' }"
            >
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="展示2">
            <a-statistic title="Idle" :value="9.3" :precision="2" suffix="%">
            </a-statistic>
            <a-statistic-countdown
              title="Countdown"
              :value="deadline"
              style="margin-right: 50px"
              @finish="onFinish"
              format="HH:mm:ss"
            >
            </a-statistic-countdown>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </a-card>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const visible = ref(false)
    function hide() {
      visible.value = false
    }
    const onFinish = () => {
      console.log('finished!')
    }
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      hide,
      onFinish,
      visible,
    }
  },
}
</script>

<style></style>

