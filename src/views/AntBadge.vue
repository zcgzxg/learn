<template>
  <div>
    <a-typography-title :level="2">Badge 徽标数</a-typography-title>
    <a-divider></a-divider>
    <a-typography-title :level="3">代码演示</a-typography-title>
    <a-divider></a-divider>
    <a-badge count="5">
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge count="0" show-zero>
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge count="156">
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge count="13545" :overflowCount="123">
      <a href="#" class="head-example" />
    </a-badge>

    <a-badge>
      <template #count>
        <clock-circle-outlined style="color: #f5222d" />
      </template>
      <a href="#" class="head-example"></a>
    </a-badge>
    <br />
    <span style="margin:20px"></span>
    <a-badge
      count="25"
      :number-style="{
        backgroundColor:'yellow',
        color:'green',
        boxShadow:'2px 2px 2px 0px'
    }"
    ></a-badge>
    <span style="margin:20px"></span>
    <a-badge dot>
      <notification-outlined />
    </a-badge>

    <br />
    <a-typography-paragraph>不包裹任何元素的 badge 可以自定义样式，在右上角的 badge 只能是红色</a-typography-paragraph>
    <a-badge status="success" text="Success" />
    <br />
    <a-badge status="error" text="Error" />
    <br />
    <a-badge status="default" text="Default" />
    <br />
    <a-badge status="processing" text="Processing" />
    <br />
    <a-badge status="warning" text="warning" />
    <br />
    <a-typography-text>用来表示状态的小圆点</a-typography-text>
    <br />
    <a-badge color="#f50" text="#f50" />
    <br />
    <a-badge color="#2db7f5" text="#2db7f5" />
    <br />
    <a-badge color="#87d068" text="#87d068" />
    <br />
    <a-badge color="#108ee9" text="#108ee9" />
    <br />
    <a-typography-text>自定义颜色</a-typography-text>
    <br />
    <div style="width:300px">
      <a-badge-ribbon style text="Pushes open the window">
        <a-card>And raises the spyglass</a-card>
      </a-badge-ribbon>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  ClockCircleOutlined,
  NotificationOutlined
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    ClockCircleOutlined,
    NotificationOutlined
  }
});
</script>

<style>
.head-example {
  display: block;
  width: 50px;
  height: 50px;
  background: rgba(64, 96, 128, 0.6);
  padding: 20px;
  margin-left: 30px;
  border-radius: 5px;
}
</style>