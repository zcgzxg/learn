<template>
  <!-- 动态增加表单项 -->
  <div>
    <a-form ref="formRef" :model="dynamicValidateForm" v-bind="formItemLayoutWithOutLabel">
      <!-- v-bind 传递绑定对象，如果 index === 0 即添加了 field 就会将布局信息传入，Label 同理  -->
      <!-- TODO: :name 具体作用? 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 -->
      <a-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        v-bind="index === 0 ? formItemLayout : {}"
        :label="index === 0 ? 'Domains' : ''"
        :name="['domains', index, 'value']"
        :rules="{
            required:true,
            message:'domain can not be null',
            trigger:'change'
        }"
      >
        <a-input
          v-model:value="domain.value"
          placeholder="please input domain"
          style="width:60%; margin-right:8px"
        ></a-input>
        <MinusCircleOutlined
          v-if="dynamicValidateForm.domains.length > 1"
          class="dynamic-delete-button"
          :disable="dynamicValidateForm.domains.length === 1"
          @click="removeDomain(domain)"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayoutWithOutLabel">
        <a-button type="dashed" style="width:60%" @click="addDomain">
          <PlusOutlined />Add field
        </a-button>
      </a-form-item>
      <a-form-item v-bind="formItemLayoutWithOutLabel">
        <a-button type="primary" html-type="submit" @click="submitForm">Submit</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, ref } from "vue";

export default {
  setup() {
    const formRef = ref();
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 }
      }
    };

    const dynamicValidateForm = reactive({
      domains: []
    });

    const submitForm = () => {
      // TODO: validate()和.catch()是什么
      /* Promise.catch() */
      /* WebAssembly.validate() 方法用于验证
      包含 WebAssembly 二进制码的一个 typed array 是否合法，
      返回 true 如果这些字节能构成一个合法的 wasm 模块，否则返回 false。 */
      formRef.value
        .validate()
        .then(() => {
          console.log("values", dynamicValidateForm.domains);
        })
        .catch(error => {
          console.log("error", error);
        });
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    const removeDomain = item => {
      let index = dynamicValidateForm.domains.indexOf(item);

      if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1);
      }
    };

    const addDomain = () => {
      dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    };

    return {
      formRef,
      formItemLayout,
      formItemLayoutWithOutLabel,
      dynamicValidateForm,
      submitForm,
      resetForm,
      removeDomain,
      addDomain
    };
  },
  components: {
    MinusCircleOutlined,
    PlusOutlined
  }
};
</script>

<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
</style>