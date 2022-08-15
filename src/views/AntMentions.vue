<template>
  <a-mentions autofocus v-model:value="value" @select="onSelect">
    <a-mentions-option value="afc163">afc163</a-mentions-option>
    <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
    <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
  </a-mentions>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  setup() {
    const value = ref("@afc163");
    watch(value, () => {
      console.log("value", value);
    });

    const onSelect = option => {
      console.log("select", option);
    };

    return {
      value,
      onSelect
    };
  }
});
</script>