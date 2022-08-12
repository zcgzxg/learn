<template>
  <div>
    <div id="anchor" class="anchor"></div>
    <!-- :overlayClassName="dropdownClass"TODO:不起作用，不理解  -->
    <!-- v-model双向绑定,相当 v-bind 和 v-on 结合 -->
    <a-dropdown
      :size="100"
      @visibleChange="()=>{/* TODO:ant库中的回调函数中很多都不能用console.log();
      这是因为事件中的所有对象在编译时都会编译到组件中去，
      即变成了 this.console.log(),
      因此无法访问到windows.console.log()，
      只需要在js中返回一个组件对象log:console.log即可通过log调用windows.console.log
      */
      
      log('下拉菜单的显示状态发生改变')
      }"
      :getPopupContainer="() => {
      log('aa') // TODO: 当鼠标移到此标签上才会触发
      return document.getElementById('anchor')
      }"
      v-model:visible="visible"
      :disabled="false"
      placement="bottomLeft"
      trigger="hover"
    >
      <a class="ant-dropdown-link" @click.prevent>
        Hover me
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item key="2">
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-sub-menu title="二级菜单">
            <a-menu-item key="3-1">子菜单1</a-menu-item>
            <a-menu-item key="3-2">子菜单2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="3">
            <a href="javascript:;">点击此按钮关闭下拉列表</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item disabled>其他选项</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { DownOutlined, UserOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  setup() {
    const visible = ref(false);
    const handleMenuClick = e => {
      if (e.key === "3") {
        visible.value = false;
      }
    };
    return {
      log: console.log,
      document: window.document,
      visible,
      handleMenuClick
    };
  },
  components: {
    DownOutlined,
    UserOutlined
  }
});
</script>
<style>
.anchor {
  float: left;
  position: relative;
  top: 100px;
  left: 100px;
  width: 50px;
  height: 20px;
  background: red;
}
.dropdownClass {
  color: red;
  width: 1000px;
}
.ant-dropdown-menu-item-only-child {
  width: 100px;
  background: green;
}
</style>