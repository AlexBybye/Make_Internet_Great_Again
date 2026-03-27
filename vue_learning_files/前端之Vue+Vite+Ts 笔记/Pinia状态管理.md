集中式状态管理composition
### 多个组件数据的调用
 首先
 ```bash
 npm -i pinia
```
### 之后在main.ts
`import {createPinia} from 'pinia'`
### 创建app之后创建pinia
const pinia = createPinia( )
 ###紧接着安装pinia
 app.use(pinia)
### 最后app.mount('#app')
  
