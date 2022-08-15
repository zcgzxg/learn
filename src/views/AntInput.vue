<template>
  <div>
    <a-space direction="vertical">
      <a-textarea
        size="small"
        style="width: 250px"
        v-model:value="value1"
        placeholder="Autosize height based on content lines"
        auto-size
      />
      <a-textarea
        size="small"
        style="width: 250px"
        v-model:value="value2"
        placeholder="Autosize height with minimum and maximum number of lines"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />

      <a-input size="small" style="width: 250px" placeholder="Basic usage" v-model:value="userName">
        <template #prefix>
          <user-outlined type="user" />
        </template>
        <template #suffix>
          <a-tooltip title="Extra information">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input>
      <a-input style="width: 250px" prefix="￥" suffix="RMB">
        <template #addonBefore>
          <a-select v-model:value="value3" style="width: 90px">
            <a-select-option value="Http://">Http://</a-select-option>
            <a-select-option value="Https://">Https://</a-select-option>
          </a-select>
        </template>
        <template #addonAfter>
          <a-select v-model:value="value4" style="width: 80px">
            <a-select-option value=".com">.com</a-select-option>
            <a-select-option value=".jp">.jp</a-select-option>
            <a-select-option value=".cn">.cn</a-select-option>
            <a-select-option value=".org">.org</a-select-option>
          </a-select>
        </template>
      </a-input>

      <a-input-search
        v-model:value="value"
        placeholder="input search text"
        style="width: 200px"
        @search="onSearch"
      />
      <a-input-search
        v-model:value="value"
        placeholder="input search text"
        enter-button
        @search="onSearch"
      ></a-input-search>
      <a-input-password v-model:value="value" placeholder="input password" />
      <a-input-number v-model:value="number" :min="0" :max="10" :step="0.01" />
    </a-space>
  </div>
</template>
<script setup>
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
const number = ref();
const value = ref("");
const value1 = ref("");
const value2 = ref("");
const value3 = ref("Http://");
const value4 = ref(".com");
const userName = ref("");
function onSearch(searchValue) {
  console.log("use value", searchValue);
  console.log("or use this.value", value.value);
}
</script>
<style>
</style>