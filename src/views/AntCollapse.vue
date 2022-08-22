<template>
  <div>
    <a-card style="width:98%" :bordered="false" title="Collapse 折叠面板">
      <template #cover>
        <a-typography-title :level="5">何时使用</a-typography-title>
        <a-typography-paragraph>
          <ul>
            <li>对复杂区域进行分组和隐藏，保持页面的整洁</li>
            <li>’手风琴‘是一种特殊的折叠面板，只允许单个内容区域展开</li>
          </ul>
        </a-typography-paragraph>
        <a-typography-title :level="5">代码演示</a-typography-title>
        <a-divider style="margin-top:0;margin-bottom:10px"></a-divider>

        <a-card style="width:95%" title="折叠面板">
          <template #cover>
            <a-collapse v-model:activeKey="activeKey" :accordion="accordion">
              <a-collapse-panel key="1" header="This is panel header 1">
                <a-collapse default-active-key="4">
                  <a-collapse-panel key="4" header="This is panel nest panel">
                    <p>{{ text }}</p>
                  </a-collapse-panel>
                </a-collapse>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="This is panel header 2">
                <p>{{text}}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="This is panel header 3">
                <p>{{text}}</p>
              </a-collapse-panel>
            </a-collapse>
          </template>
          <a-card-meta title="折叠面板">
            <template #avatar>
              <a-avatar :size="50" :src="require('../assets/portrait.png')"></a-avatar>
            </template>
            <template #description>
              普通折叠面板可以展开多个面板
              <br />“手风琴”模式则只能展开一个面板
              <br />
              <a-radio-group button-style="solid" v-model:value="accordion">
                <a-radio-button style="width:100px;text-align:center" :value="true">Accordion</a-radio-button>
                <a-radio-button style="width:100px;text-align:center" :value="false">Normal</a-radio-button>
              </a-radio-group>
            </template>
          </a-card-meta>
        </a-card>
        <br />
        <a-card style="width:95%" title="无边框样式" :bordered="false">
          <template #cover>
            <a-collapse v-model:activeKey="activeKey" :accordion="accordion" :bordered="false">
              <a-collapse-panel key="1" header="This is panel header 1">
                <a-collapse default-active-key="4" :bordered="false">
                  <a-collapse-panel key="4" header="This is panel nest panel">
                    <p>{{ text }}</p>
                  </a-collapse-panel>
                </a-collapse>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="This is panel header 2">
                <p>{{text}}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="This is panel header 3" :show-arrow="false">
                <p>通过 :show-arrow="false" 来隐藏箭头</p>
              </a-collapse-panel>
            </a-collapse>
          </template>
          <a-card-meta title="无边框的折叠面板">
            <template #avatar>
              <a-avatar :size="50" :src="require('../assets/portrait.png')"></a-avatar>
            </template>
            <template #description>
              :bordered="false"
              <br />Card 组件也可以使用无边框属性
              <br />
              <a-radio-group button-style="solid" v-model:value="accordion">
                <a-radio-button style="width:100px;text-align:center" :value="true">Accordion</a-radio-button>
                <a-radio-button style="width:100px;text-align:center" :value="false">Normal</a-radio-button>
              </a-radio-group>
            </template>
          </a-card-meta>
        </a-card>
      </template>
    </a-card>
    <br />
    <a-card style="width:95%" title="无边框样式">
      <template #cover>
        <a-collapse
          v-model:activeKey="activeKey"
          :accordion="accordion"
          :expand-icon-position="expandIconPosition"
        >
          <a-collapse-panel key="1" header="This is panel header 1">
            <a-collapse default-active-key="4" :bordered="false">
              <a-collapse-panel key="4" header="This is panel nest panel">
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
            <template #extra>
              <setting-outlined @click="handleClick" />
            </template>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="This is panel header 2">
            <p>{{text}}</p>
            <template #extra>
              <setting-outlined @click="handleClick" />
            </template>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="This is panel header 3" :show-arrow="false">
            <p>通过 :show-arrow="false" 来隐藏箭头</p>
            <template #extra>
              <span>more</span>
            </template>
          </a-collapse-panel>
        </a-collapse>
      </template>
      <a-card-meta title="无边框的折叠面板">
        <template #avatar>
          <a-avatar :size="50" :src="require('../assets/portrait.png')"></a-avatar>
        </template>
        <template #description>
          extra 插槽可以使用 icon 图标或文本
          <br />可以通过 expand-icon-position props 控制展开箭头的位置
          <span>Expand Icon Position:</span>
          <a-select style="margin:10px" v-model:value="expandIconPosition">
            <a-select-option value="left">Left</a-select-option>
            <a-select-option value="right">Right</a-select-option>
          </a-select>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { SettingOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: { SettingOutlined },
  setup() {
    const accordion = ref(true);
    const text = `A dog is a type of domesticated animal. Known fro its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(["1"]);
    const expandIconPosition = ref("left");

    watch(activeKey, val => {
      console.log(val);
    });

    return {
      expandIconPosition,
      text,
      accordion,
      activeKey
    };
  }
});
</script>

<style>
</style>