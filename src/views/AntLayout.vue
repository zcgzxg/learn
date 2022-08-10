<template>
    <div>
        <a-layout>
            <a-layout-header class="layout header">Header</a-layout-header>
            <a-layout-content class="layout content">Content</a-layout-content>
            <a-layout-footer class="layout footer">Footer</a-layout-footer>
        </a-layout>
        <br>
        <a-layout>
            <a-layout-header class="layout header">Header</a-layout-header>
            <a-layout>
                <a-layout-sider class="layout sider">Sider</a-layout-sider>
                <a-layout-content class="layout content">Content</a-layout-content>
            </a-layout>
            <a-layout-footer class="layout footer">Footer</a-layout-footer>
        </a-layout>
        <br>
        <a-layout>
            <a-layout-sider class="layout siderBig">Sider</a-layout-sider>
            <a-layout>
                <a-layout-header class="layout header">Header</a-layout-header>
                <a-layout-content class="layout content">Content</a-layout-content>
                <a-layout-footer class="layout footer">footer</a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.layout {
    color: #fff;
    background: #7dbcea;
    text-align: center;
    height: 150px;
}

.header,
.footer {
    height: 80px;
}

.content {
    background: #a8dfea;
}

.sider {
    background: #98cfea;
}

.siderBig {
    height: 310px;
    background: #98cfea;
}
</style>