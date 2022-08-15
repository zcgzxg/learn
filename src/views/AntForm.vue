<template>
  <div>
    <a-form
      :model="formState"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      ref="formRef"
      :rules="rules"
    >
      <a-form-item ref="name" name="name" label="Activity name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item name="region" label="Activity zone">
        <a-select v-model:value="formState.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item required name="date1" label="Activity time">
        <a-date-picker
          v-model:value="formState.date1"
          show-time
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </a-form-item>
      <a-form-item name="delivery" label="Instant delivery">
        <a-switch v-model:checked="formState.delivery" />
      </a-form-item>
      <a-form-item name="type" label="Activity type">
        <a-checkbox-group v-model:value="formState.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item name="resource" label="Resources">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">Sponsor</a-radio>
          <a-radio value="2">Venue</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item name="desc" label="Activity form">
        <a-input v-model:value="formState.desc" type="textarea" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Cancel</a-button>
      </a-form-item>
    </a-form>
    <!-- handleFinishFailed 提价表单且数据验证失败后回调事件 -->
    <a-form
      :layout="formState2.layout"
      :model="formState2"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-input v-model:value="formState2.user" placeholder="Username">
          <template #prefix>
            <UserOutlined style="color:rgba(0,0,0,0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-input v-model:value="formState2.password" type="password" placeholder="Password">
          <template #prefix>
            <LockOutlined style="color:rgba(0,0,0,0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formState2.user === '' || formState.password === ''"
        >Log in</a-button>
      </a-form-item>
    </a-form>
    <!-- 自定义校验规则----------------------------------- -->
    <a-form
      layout="horizontal"
      name="custom-validation"
      ref="formRef"
      :model="formState3"
      :rules="rules3"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item has-feedback label="Password" name="pass">
        <a-input v-model:value="formState3.pass" type="password" autocomplete="off"></a-input>
      </a-form-item>
      <a-form-item has-feedback label="Confirm" name="checkPass">
        <a-input v-model:value="formState3.checkPass" type="password" autocomplete="off"></a-input>
      </a-form-item>
      <!-- has-feedback 校验图标 -->
      <a-form-item has-feedback label="Age" name="age">
        <a-input-number v-model:value="formState3.age"></a-input-number>
      </a-form-item>
      <a-form-item :wrapper-col="{span:14, offset:4}">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <a-button style="margin-left:10px" @click="resetForm">Reset</a-button>
      </a-form-item>
    </a-form>
    <!-- ----------------------------------------------- -->
  </div>
</template>

<script>
import { reactive, toRaw, ref } from "vue";
// toRaw() 可以返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象。
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
export default {
  setup() {
    // demo1---------------------------------------------
    const formRef = ref();
    const formState = reactive({
      name: "",
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    const rules = {
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur" // 检验触发时机， blur 失去焦点时， change 改变时
        },
        {
          whitespace: true // 必选时，空格是否会被视为错误
        },
        {
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "change"
        }
      ],
      region: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change"
        }
      ],
      date1: [
        {
          required: true,
          message: "Please pick a date",
          trigger: "chagne",
          type: "object"
        }
      ],
      type: [
        {
          type: "array",
          require: true,
          message: "Please select at least one activity type",
          trigger: "change"
        }
      ],
      resource: [
        {
          require: true,
          message: "Please select activity resource",
          trigger: "change"
        }
      ],
      desc: [
        {
          required: true,
          message: "Please input activity form",
          trigger: "blur"
        }
      ]
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log("values", formState, toRaw(formState));
        })
        .catch(error => {
          console.log("error", error);
        });
      console.log("submit!", toRaw(formState));
    };

    const resetForm = () => {
      console.log(formRef);
      formRef.value.resetFields();
    };

    // --------------------------------------------------

    // demo2---------------------------------------------
    const formState2 = reactive({
      user: "",
      password: "",
      layout: "inline"
    });

    const handleFinish = values => {
      console.log(values, formState2);
    };

    const handleFinishFailed = errors => {
      console.log(errors);
    };
    // --------------------------------------------------
    // 自定义验证------------------------------------------
    const formRef3 = ref();
    const formState3 = reactive({
      pass: "",
      checkPass: "",
      age: undefined
    });
    // async 创建一个异步执行的函数
    // Promise 异步函数的返回对象，异步操作会通过这个对象将结果返回

    let checkAge = async (rule, value) => {
      if (!value) {
        return Promise.reject("Please input the age");
      }
      if (!Number.isInteger(value)) {
        return Promise.reject("Please input digits");
      } else {
        if (value < 18) {
          return Promise.reject("Age Must be greater than 18");
        } else {
          return Promise.resolve();
        }
      }
    };

    let validatePass = async (rule, value) => {
      // console.log("rule", rule);
      // console.log("value", value);
      if (value === "") {
        return Promise.reject("Please input the password");
      } else {
        if (formState.checkPass !== "") {
          formRef.value.validateFields("checkPass");
        }
        return Promise.resolve();
      }
    };

    let validatePass2 = async (rule, value) => {
      if (value === "") {
        return Promise.reject("Please input the password again");
      } else if (value !== formState3.pass) {
        return Promise.reject("Two inputs don't match!");
      } else {
        return Promise.resolve();
      }
    };
    const rules3 = {
      pass: [
        {
          required: true,
          validator: validatePass,
          trigger: "change"
        }
      ],
      checkPass: [
        {
          validator: validatePass2,
          trigger: "change"
        }
      ],
      age: [
        {
          validator: checkAge,
          trigger: "change"
        }
      ]
    };

    // --------------------------------------------------
    return {
      rules3,
      validatePass2,
      validatePass,
      checkAge,
      formRef3,
      formState3,
      labelCol: {
        // 控制 label 宽度
        span: 6
        // style: { width: "150px" }
      },
      wrapperCol: {
        span: 14
      },
      rules,
      resetForm,
      formState,
      formRef,
      onSubmit,
      formState2,
      handleFinish,
      handleFinishFailed
    };
  },
  components: {
    UserOutlined,
    LockOutlined
  }
};
</script>

<style>
</style>