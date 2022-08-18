<template>
  <div>
    <a-card style="width:500px" title="Carousel 走马灯">
      <a-typography-title :level="5">何时使用</a-typography-title>
      <a-typography-paragraph>
        <ul>
          <li>当有一组平级的内容</li>
          <li>当内存空间不足时，可以用走马灯的形式进行收纳，进行轮播展现</li>
          <li>常用于一组图片或卡片轮播</li>
        </ul>
        <a-typography-title :level="5">代码演示</a-typography-title>
      </a-typography-paragraph>
      <a-divider></a-divider>
      <a-card hoverable style="width:90%" title="Carousel 旋转木马">
        <template #cover>
          <a-carousel :after-change="onChange">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </a-carousel>
        </template>
        <a-card-meta title="基本用法">
          <template #description>最基本的使用方法</template>
          <template #avatar>
            <!-- 
                TODO:此处 src 设置相对路径也会基于访问地址解析
                涉及到webpack编译时的解析问题,webpack 会自动解析本地路径
                img 标签中的 src 就可以正确被 webpack 识别并编译为 require(src) 得到 http://localhost:8080/img/portrait.ddb018aa.png
                a-avatar 组件中的 src 不会被 webpack 识别就会访问 http://localhost:8080/assets/portrait.png
                想要使用 a-avatar 组件的 src 访问则需要自己对链接进行 require()
            -->
            <a-avatar :size="50" :src="require('../assets/portrait.png')"></a-avatar>
          </template>
        </a-card-meta>
      </a-card>
      <br />
      <a-card hoverable style="width:90%" title="效果：方向、过渡、自动播放">
        <template #cover>
          <a-carousel :dot-position="dotPosition" :effect="effect" autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </a-carousel>
        </template>
        <a-card-meta :title="`方向${dotPosition}`">
          <template #avatar>
            <a-avatar :size="50" :src="require('../assets/portrait.png')"></a-avatar>
          </template>
          <template #description>
            Carousel可以有四个不同的运动方向
            <a-radio-group
              size="small"
              style="margin:10px 0;"
              v-model:value="dotPosition"
              button-style="solid"
            >
              <a-space :size="4">
                <a-radio-button style="width:65px;text-align:center" value="top">Top</a-radio-button>
                <a-radio-button style="width:65px;text-align:center" value="bottom">Bottom</a-radio-button>
                <a-radio-button style="width:65px;text-align:center" value="left">Left</a-radio-button>
                <a-radio-button style="width:65px;text-align:center" value="right">Right</a-radio-button>
              </a-space>
            </a-radio-group>
            <br />Carousel过渡效果有:
            <br />fade 渐显 | scrollx 滚动
            <br />

            <a-radio-group
              size="small"
              style="margin-top:10px;"
              v-model:value="effect"
              button-style="solid"
            >
              <a-space :size="4">
                <a-radio-button style="width:65px;text-align:center" value="fade">Fade</a-radio-button>
                <a-radio-button style="width:65px;text-align:center" value="scrollx">Scrollx</a-radio-button>
              </a-space>
            </a-radio-group>
          </template>
        </a-card-meta>
      </a-card>
    </a-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const dotPosition = ref("bottom");
    const effect = ref("fade");

    const onChange = current => {
      console.log(current);
    };

    return {
      dotPosition,
      effect,
      onChange
    };
  }
});
</script>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  height: 160px;
  line-height: 150px;
  color: #fff;
}
</style>