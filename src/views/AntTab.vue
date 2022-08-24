<template>
  <a-card title="标签页">
    <a-typography>
      <h3>何时使用</h3>
      <p>提供平级的区域将大块内容进行收纳和展现，保持页面整洁</p>
      <p>Ant Design 依次提供了三级选项卡，分别用于不同的场景</p>

      <ul>
        <li>卡片式的页签，提供可关闭的样式，常用于容器顶部</li>
        <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的Tabs</li>
        <li>RadioButton 可作为更次级的页签来使用。</li>
      </ul>
    </a-typography>
    <a-divider></a-divider>
    <a-card hoverable title="基本用法">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1">
          <template #tab>
            <span>
              <apple-outlined />
              Tab1
            </span>
          </template>
          Tab 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" disabled>Tab 2</a-tab-pane>
        <a-tab-pane key="3">
          <template #tab>
            <span>
              <android-outlined />
              Tab1
            </span>
          </template>
          Tab 3
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <br />
    <a-card title="Direction 方向">
      <a-radio-group v-model:value="mode" :style="{ marginBottom: '8px' }">
        <a-radio-button value="top">Horizontal</a-radio-button>
        <a-radio-button value="left">Vertical</a-radio-button>
      </a-radio-group>
      <a-tabs
        :tab-position="mode"
        :style="{ height: '200px' }"
        @prevClick="callback"
        @nextClick="callback"
        v-model:activeKey="activeKey"
      >
        <template #tabBarExtraContent>
          <a-button>Extra Action</a-button>
        </template>
        <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`">
          Content of tab{{ i }}
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <a-card title="Position 位置">
      <a-radio-group v-model:value="tabPosition" style="margin: 8px">
        <a-radio-button value="top">top</a-radio-button>
        <a-radio-button value="bottom">bottom</a-radio-button>
        <a-radio-button value="left">left</a-radio-button>
        <a-radio-button value="right">right</a-radio-button>
      </a-radio-group>
      <a-tabs v-model:activeKey="activeKey" :tab-position="tabPosition">
        <a-tab-pane key="1" tab="Tab 1">Content of Tab 1</a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2">Content of Tab 2</a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">Content of Tab 3</a-tab-pane>
      </a-tabs>
    </a-card>
    <br />
    <a-card title="Add|Close 新增或关闭">
      <a-tabs
        v-model:activeKey="activeKey2"
        type="editable-card"
        @edit="onEdit"
      >
        <a-tab-pane
          v-for="pane in panes"
          :key="pane.key"
          :tab="pane.title"
          :closable="pane.closable"
        >
          {{ pane.content }}
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </a-card>
</template>

<script>
import { ref } from 'vue'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue'

export default {
  setup() {
    const mode = ref('top')
    const activeKey = ref('1')

    const tabPosition = ref('top')
    const callback = (val) => {
      console.log(val)
    }

    const panes = ref([
      {
        title: 'Tab 1',
        content: 'Content of Tab 1',
        key: '1',
      },
      {
        title: 'Tab 2',
        content: 'Content of Tab 2',
        key: '2',
      },
      {
        title: 'Tab 3',
        content: 'Content of Tab 3 closable:false',
        key: '3',
        closable: false,
      },
    ])
    const activeKey2 = ref(panes.value[0].key)
    const newTabIndex = ref(0)

    const add = () => {
      activeKey2.value = `newTab${++newTabIndex.value}`
      panes.value.push({
        title: 'New Tab',
        content: 'Content of new Tab',
        key: activeKey2.value,
      })
    }

    const remove = (targetKey) => {
      let lastIndex = 0
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1
        }
      })

      panes.value = panes.value.filter((pane) => pane.key !== targetKey)

      if (panes.value.length && activeKey2.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey2.value = panes.value[lastIndex].key
        } else {
          activeKey.value = panes.value[0].key
        }
      }
    }
    const onEdit = (targetKey, action) => {
      if (action === 'add') {
        add()
      } else {
        remove(targetKey)
      }
    }

    return {
      activeKey,
      callback,
      mode,
      tabPosition,
      activeKey2,
      panes,
      onEdit,
    }
  },
  components: {
    AppleOutlined,
    AndroidOutlined,
  },
}
</script>

<style></style>

