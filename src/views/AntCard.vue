<template>
  <div>
    <a-card title="Card 嵌套">
      <a-card style="width:300px" title="Card Title">
        <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
        <a-card-grid style="width: 25%; text-align: center" :hoverable="false">hoverable:false</a-card-grid>
        <a-card-grid style="width: 50%; text-align: center">Content</a-card-grid>
        <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
        <a-card-grid style="width: 75%; text-align: center">Content</a-card-grid>
        <a-card-grid style="width: 60%; text-align: center">Content</a-card-grid>
        <a-card-grid style="width: 40%; text-align: center">Content</a-card-grid>
        <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
      </a-card>
      <a-card hoverable style="width:300px">
        <template #cover>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
      <br />
      <a-card hoverable style="width:300px">
        <template #cover>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            alt="banner"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></a-avatar>
          </template>
        </a-card-meta>
      </a-card>
    </a-card>
    <a-card
      style="width:90%"
      title="带页签的卡片"
      :tab-list="tabList"
      :active-tab-key="key"
      @tabChange="key=>onTabChange(key,'key')"
    >
      <template #customRender="item">
        <span>
          <home-outlined />
          {{item.key}}
        </span>
      </template>
      <template #extra>
        <a href="#">More</a>
      </template>
      {{contentList[key]}}
    </a-card>
    <br />
    <br />
    <a-card
      style="width:90%"
      :tab-list="tabListNoTitle"
      :active-tab-key="noTitleKey"
      @tabChange="key=>onTabChange(key,'noTitleKey')"
    >
      <p v-if="noTitleKey==='article'">article content</p>
      <p v-else-if="noTitleKey === 'app'">app content</p>
      <p v-else>project content</p>
      <template #tabBarExtraContent>
        <a href="#">More</a>
      </template>
    </a-card>
  </div>
</template>
<script>
import {
  HomeOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    HomeOutlined,
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined
  },
  setup() {
    const tabList = [
      {
        key: "tab1",
        slots: {
          tab: "customRender"
        }
      },
      {
        key: "tab2",
        tab: "tab2"
      }
    ];
    const contentList = {
      tab1: "content1",
      tab2: "content2"
    };
    const tabListNoTitle = [
      {
        key: "article",
        tab: "article"
      },
      {
        key: "app",
        tab: "app"
      },
      {
        key: "project",
        tab: "project"
      }
    ];
    const key = ref("tab1");
    const noTitleKey = ref("app");

    const onTabChange = (value, type) => {
      console.log(value, type);

      if (type === "key") {
        key.value = value;
      } else if (type === "noTitleKey") {
        noTitleKey.value = value;
      }
    };

    return {
      tabList,
      contentList,
      tabListNoTitle,
      key,
      noTitleKey,
      onTabChange
    };
  }
});
</script>