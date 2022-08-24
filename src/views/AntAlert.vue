<template>
  <a-card title="Alert 警告">
    <a-card title="基本样式">
      <a-alert message="Success Text" type="success" closable show-icon banner>
        <template #icon><smile-outlined /></template>
      </a-alert>
      <a-alert message="Info Text" type="info" closable show-icon banner />
      <a-alert message="Warning Text" type="warning" closable show-icon />
      <a-alert
        message="Error Text"
        type="error"
        close-text="Close Now"
        show-icon
      >
        <template #description>
          <p>
            Success Description
            <span style="color: red">Success</span>
            Description Success Description
          </p>
        </template>
      </a-alert>
    </a-card>
  </a-card>
</template>

<script>
import { SmileOutlined } from '@ant-design/icons-vue'
export default {
  components: { SmileOutlined },
}
</script>

<style></style>

