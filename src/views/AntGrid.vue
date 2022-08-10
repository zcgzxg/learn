<template>
    <div>
        <a-row type="flex" justify="center" align="center">
            <a-col :span="12">col-12</a-col>
            <a-col :span="12">col-12</a-col>
        </a-row>
        <a-row>
            <a-col style="background:#cc6" :flex="2">flex2</a-col>
            <a-col style="background:#99f" :flex="5">flex5</a-col>
            <a-col flex="150px">flex100px</a-col>
        </a-row>
        <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="6" :order="4">col-6 order4</a-col>
            <a-col :span="4" :order="3">col-4 order3</a-col>
            <a-col :span="2" :order="1">col-2 order1</a-col>
            <a-col :span="12" :order="2">col-12 order2</a-col>
        </a-row>
        <a-row>
            <a-col style="background:#cc6" flex="1 1 200px">
                grow:1 shrink:1 200px
            </a-col>
            <a-col style="background:#99f" flex="0 1 300px">
                grow:0 shrink:1 300px
            </a-col>
        </a-row>
        <a-row type="flex" justify="space-around">
            <a-col :span="4">col-4 span4 justify:space-around</a-col>
            <a-col :span="4">col-4</a-col>
            <a-col :span="4">col-4</a-col>
            <a-col :span="4">col-4</a-col>
        </a-row>

        <div class="gutter-example">
            <a-row :gutter="[16,32,64]">
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6 gutter:16</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </a-col>
            </a-row>
            <a-row>
                <a-col style="background:#99f" :span="8">col-8</a-col>
                <a-col style="background:#99f" :span="8" :offset="8">col-8</a-col>
            </a-row>
            <a-row>
                <a-col style="background:#99f" :span="6" :offset="6">col-6 col-offset-6</a-col>
                <a-col style="background:#99f" :span="6" :offset="6">col-6 col-offset-6</a-col>
            </a-row>
            <a-row>
                <a-col style="background:#99f" :span="12" :offset="6">col-12 col-offset-6</a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
/* scoped 将样式的作用域限制在当前组件中 */
.ant-col {
    background: yellows;
    height: 50px;
}

.ant-col-12 {
    background: blue;
    height: 50px;
}

.ant-col-2 {
    background: green;
    height: 200px;
}

.ant-col-4 {
    background: greenyellow;
    height: 120px;
}

/* :deep()选择器：穿透 scoped 限制 */
.gutter-example :deep(.ant-row > div) {
    background: transparent;
    border: 0;
}

.gutter-box {
    background: #00a0e9;
    padding: 5px 0;
}
</style>