<template>
  <div class="typography">
    <a-typography>
      <a-typography-title>a-typography 排版</a-typography-title>
      <a-typography-paragraph>
        a-typography-paragraph 段落标签
      </a-typography-paragraph>
      <a-typography-paragraph>
        段落文本
        <a-typography-text>
          a-typographt-text 文本标签(行内标签)
        </a-typography-text>
        <br />
        <a-typography-text strong>
          strong属性
        </a-typography-text>
        <a-typography-text code>
          code 属性
        </a-typography-text>
        <a-typography-text :copyable="{ text: 'cpoyable属性的text内容', tooltip: true, onCopy: () => { } }">
          copyable 属性：是否可拷贝，为对象时可进行各种自定义。
          点击拷贝会拷贝 copyable对象的 text 的内容，若不存在则拷贝标签中的文字。
          tooltip：布尔值，默认false，控制拷贝按钮是否会显示提示文本。
          onCopy:拷贝成功的回调函数
        </a-typography-text>
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-text type="success" underline>
          type 文本类型 underline 下划线
        </a-typography-text>
        <a-typography-text delete>
          delete属性删除线
        </a-typography-text>
      </a-typography-paragraph>
      <a-typography-title :level="2">Title标签的 :level 属性表示标签等级</a-typography-title>
      <a-typography-paragraph>
        <ul>
          <li>
            <a-typography-link href="/docs/resources">a-typography-link 文本链接</a-typography-link>
          </li>
        </ul>
      </a-typography-paragraph>
      <a-space direction="vertical">
        <a-typography-text>Ant Desißßßgn Vue (default)</a-typography-text>
        <a-typography-text type="secondary">Ant Design Vue (secondary)</a-typography-text>
        <a-typography-text type="success">Ant Design Vue (success)</a-typography-text>
        <a-typography-text type="warning">Ant Design Vue (warning)</a-typography-text>
        <a-typography-text type="danger">Ant Design Vue (danger)</a-typography-text>
        <a-typography-text disabled>Ant Design Vue (disabled)</a-typography-text>
        <a-typography-text mark>Ant Design Vue (mark)</a-typography-text>
        <a-typography-text code>Ant Design Vue (code)</a-typography-text>
        <a-typography-text keyboard>Ant Design Vue (keyboard)</a-typography-text>
        <a-typography-text underline>Ant Design Vue (underline)</a-typography-text>
        <a-typography-text delete>Ant Design Vue (delete)</a-typography-text>
        <a-typography-text strong>Ant Design Vue (strong)</a-typography-text>
        <a-typography-link href="https://antdv.com" target="_blank">
          Ant Design Vue (Link)
        </a-typography-link>
      </a-space>
    </a-typography>
    <a-switch v-model:checked="ellipsis" />
    <a-typography-paragraph :ellipsis="ellipsis" content=" Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team." />
    <!-- TODO: 这里的onExpand回调函数不能执行console.log打印？ -->
    <a-typography-paragraph
      :ellipsis="ellipsis ? { rows: 1, expandable: true, symbol: 'more', onExpand: function () { console.log('aaa') } } : false"
      content="ellipsis 传递一个对象参数{row:最多显示行数, expandalbe:是否可展开, suffix:自定义省略内容后缀, symbol:自定义展开描述文案, tooltip:省略时，展示提示信息, onEllipis:触发省略时的回调, onExpand: 点击展开时的回调}" />

    <a-typography-text :style="ellipsis ? { width: '100px' } : {}"
      :ellipsis="ellipsis ? { tooltip: 'I am ellipsis now!' } : false"
      content="通过 ellipsis 限制文本框宽度为 100px 通过 ellipsis 限制文本框宽度为 100px" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      ellipsis: ref(true), // 通过ref返回响应式对象
    };
  },
});
</script>
<style>
.typography {
  padding: 20px;
}
</style>
