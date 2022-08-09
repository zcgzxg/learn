import { createApp } from 'vue'
// import App from './App.vue' // 导入组件
import App from './66_StateManger.vue' // 导入组件
import router from './router'

const app = createApp(App)
app.use(router) // 先路由，再挂载
app.mount('#app') // createApp配置根组件 mount挂载应用， 每个应用都需要挂载到一个DOM元素中
