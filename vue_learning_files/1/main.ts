import { createApp } from 'vue'//引入来创建应用
import App from './App.vue'//引入根组件
import router from './router'//引入路由器
const app = createApp(App)//创建应用
app.use(router)//使用路由器
app.mount('#app')//挂载应用
