<template>
    <div>
        <h2>HOME</h2>
        <p>==========================</p>
        <h4>状态集中管理的message：{{ store.state.msg }}</h4>
        <button @click="updateStateMsg">改变全局状态</button>
        <img :src="store.state.BannerUrl" alt="">
    </div>
</template>

<script >
import axios from 'axios'
export default {
    data() {
        return {
            bannerUrl: ''
        }
    },
    inject: ['store'],
    // Ajax 常见的传统的后端访问方式
    // fetch 原生JS，是http数据请求的一种方式，ES6新标准
    // axios 第三方库
    created() {
        // ----- fetch() -------------------------------------
        // fetch('url') 返回一个promise对象，默认执行 get 请求
        // fetch('./src/banner.json').then((res) => {
        //     // json()将响应的body解析为json的promise
        //     // console.log(res.json())
        //     return res.json()
        // }).then((res)=>{
        //     console.log(res.imageUrl)
        //     this.updateBannerUrl(res.imageUrl)
        // })
        // ----------------------------------------------------

        // ---- axios -----------------------------------------
        // axios:基于promise的http库  
        // axios.get('http://localhost:3000/src/banner.json').then((res) => {
        //     console.log(res)
        // })
        // ----------------------------------------------------
        // https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E9%9D%92%E5%B2%9B&ci=60&channelId=4
        axios.get('/path/api/mmdb/movie/v3/list/hot.json?ct=%E9%9D%92%E5%B2%9B&ci=60&channelId=4').then((res) => {
            console.log(res)
            // 直接访问会被浏览器的保护机制阻止，跨域请求
            // 通过 proxy 发送请求
        })
    },
    methods: {
        updateStateMsg: function () {
            this.store.updateMsg()
        },
        updateBannerUrl: function (newUrl) {
            this.store.updateBannerUrl(newUrl)
        }
    }
}
</script>

<style>
</style>