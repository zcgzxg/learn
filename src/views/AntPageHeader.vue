<template>
  <div>
    <h2>AntPageHeader</h2>
    <div class="components-page-header-demo-content">
      <a-page-header
        title="Title"
        class="site-page-header"
        sub-title="This is a subtitle"
        :avatar="{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }"
        :breadcrumb="{routes}"
      >
        <!-- v-slot:插槽名 === #插槽名 -->
        <template v-slot:tags>
          <a-tag color="blue">Running</a-tag>
        </template>
        <template v-slot:extra>
          <a-button key="3">Opreation</a-button>
          <a-button key="2">Opreation</a-button>
          <a-button key="1" type="primary">Primary</a-button>
          <a-dropdown key="more">
            <a-button :style="{border:'none', padding:0}">
              <EllipsisOutlined :style="{fontSize:'20px',verticalAlign:'top'}" />
            </a-button>
            <template v-slot:overlay>
              <a-menu>
                <a-menu-item>
                  <a rel="noopener noreferrer" href>1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a rel="noopener noreferrer" href>2ns menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a rel="noopener noreferrer" href>3rd menu item</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
        <a-row class="content">
          <div style="flex:1">
            <p>这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本</p>
            <p>又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本又一段文本</p>
            <div>
              <template v-for="item in iconLinks" :key="item.src">
                <a class="example-link">
                  <img :src="item.src" class="example-link-icon" alt="item.text" />
                  {{item.text}}
                </a>
              </template>
            </div>
          </div>
          <div class="image">
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
              alt="content"
              style="width:100%"
            />
          </div>
        </a-row>
      </a-page-header>
    </div>
  </div>
</template>

<script>
import { EllipsisOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { useRoute /*useRouter*/ } from "vue-router";
// defineComponent 只是告诉编译器此处为 component 在js语法中不必要，在 TS 会帮助编译器正确标识语法
export default defineComponent({
  setup() {
    // 根据当前路径生成路由面包屑------------
    const route = useRoute();
    const currentPath = route.path;
    const pathItems = currentPath.split("/");
    pathItems.shift(); // 移除数组第一个空字符
    const routes = [];
    // 此处应该用遍历
    pathItems.map(() => {
      routes.push({
        path: pathItems[0],
        /* 此处面包屑名字应该根据路由进行匹配，这里由于路由表管理不规范没做处理 */ breadcrumbName:
          route.name
      });
    });

    console.log(routes);
    // ----------------------------------
    const iconLinks = [
      {
        src:
          "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",
        text: "Quick Start"
      },
      {
        src:
          "https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",
        text: "Product Info"
      },
      {
        src:
          "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",
        text: "Product Doc"
      }
    ];
    return {
      routes,
      iconLinks
    };
  },
  components: {
    EllipsisOutlined
  }
});
</script>

<style scoped>
#components-page-header-demo-content .image {
  margin: 0 0 0 60px;
  display: flex;
  align-items: center;
}

#components-page-header-demo-content .ant-page-header-rtl .image {
  margin: 0 60px 0 0;
}

#components-page-header-demo-content .example-link {
  line-height: 24px;
  margin-right: 16px;
}
[data-theme="compact"] #components-page-header-demo-content .example-link {
  line-height: 20px;
}
#components-page-header-demo-content .example-link-icon {
  margin-right: 8px;
}

[data-theme="compact"] #components-page-header-demo-content .example-link-icon {
  width: 20px;
  height: 20px;
}

#components-page-header-demo-content .ant-page-header-rtl .example-link {
  float: right;
  margin-right: 0;
  margin-left: 16px;
}
#components-page-header-demo-content .ant-page-header-rtl .example-link-icon {
  margin-right: 0;
  margin-left: 8px;
}
#components-page-header-demo-content .content p {
  margin-bottom: 1em;
  color: rgba(0, 0, 0, 0.85);
  overflow-wrap: break-word;
}

@media (max-width: 768px) {
  #components-page-header-demo-content .image {
    flex: 100%;
    margin: 24px 0 0;
  }
}
</style>