<template>
  <div>
    <a-typography-title :level="2">Avatar</a-typography-title>
    <a-divider></a-divider>
    <a-typography-title :level="3">代码演示</a-typography-title>
    <a-divider></a-divider>
    <a-space :size="24">
      <a-avatar :size="64">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <a-avatar size="large">Ginlon</a-avatar>
      <!-- TODO:用get方式加载了相对链接，加载不出来 -->
      <a-avatar src="../assets/logo.png"></a-avatar>
      <a-avatar style="color: #f56a00; background-color: #fde3cf">G</a-avatar>
      <a-avatar shape="square">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <a-avatar shape="square" style="background-color: #87d068">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>

      <a-badge :count="1">
        <a-avatar size="small">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-badge>

      <a-badge dot>
        <a-avatar size="small">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-badge>

      <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">响应式</a-avatar>
    </a-space>
    <a-divider></a-divider>
    <a-avatar-group
      :size="64"
      :max-count="2"
      :max-style="{ color: '#f56a00', backgroundColor: '#fde3cf' }"
    >
      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <a-avatar style="background-color: #1890ff">K</a-avatar>
      <a-tooltip title="Ant User" placement="top">
        <a-avatar style="background-color: #87d068">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-tooltip>
      <a-avatar style="background-color: #1890ff">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </a-avatar-group>
  </div>
</template>

<script>
import { UserOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined
  }
};
</script>

<style>
</style>