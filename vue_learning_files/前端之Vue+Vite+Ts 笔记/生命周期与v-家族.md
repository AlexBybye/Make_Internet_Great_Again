# 生命周期是什么？
## 组件生命周期：创建 挂载 更新 销毁
### 在不同周期会调用不同函数

# VUE2的生命周期：
>创建阶段：`beforeCreate`-`created`
>
>挂载阶段：`beforeMount`-`mounted`
  >
>更新阶段：`beforeUpdate`-`updated`
  >
>销毁阶段：`beforeDestroy`-`destroyed`
## v-if&&v-show的用法
### 0.`v-for`
[[v-for循环]]
### 1. **`v-if`**

- **用途**：条件渲染，根据表达式的值决定是否渲染元素。
- **语法**：
    ```html
    <div v-if="condition">内容</div>
    ```  
- **示例**：
    ```html
    <div v-if="isLoggedIn">用户已登录</div>
    <div v-else>用户未登录</div>
    ```
- **适用场景**：当需要根据条件动态显示或隐藏内容时。
### 2. **`v-show`**

- **用途**：条件渲染，根据表达式的值决定是否显示元素。    
- **语法**：
    ```html
    <div v-show="condition">内容</div>
    ```
- **示例**：
    ```html
    <div v-show="isVisible">显示或隐藏</div>
    ```
- **适用场景**：与 `v-if` 类似，但 `v-show` 是通过切换 `display` 样式来控制显示，而 `v-if` 是直接销毁和重建 DOM。
## **`v-if` 更适合在条件不频繁变化时使用。
## `v-show`适合 更在条件频繁变化时使用。**
### 3. **`v-bind`** （其实就是：）
- **用途**：动态绑定 HTML 属性。       ```
- **示例**：
    ```html
    <img :src="imageUrl" alt="图片">
    <div :class="{ active: isActive }">动态类名</div>
    ```
- **适用场景**：动态绑定 HTML 属性，如 `class`、`style`、`src` 等。
### 4.**`v-on`**（其实就是@）
- **用途**：监听 DOM 事件。
- **示例**：
    ```html
    <button @click="increment">点击增加</button>
    ```
- **适用场景**：处理用户交互，如点击、鼠标悬停、键盘事件等。
### 5.**`v-html`**
- **用途**：动态渲染 HTML 内容。
- **示例**：
    ```html
    <div v-html="<p>这是动态 HTML 内容</p>"></div>
    ```
- **适用场景**：需要渲染动态生成的 HTML 内容时，但要注意安全性问题，避免 XSS 攻击。
# VUE3生命周期
## 创建过程中只需要setup就可以
## 挂载过程变成onBeforeMount
具体：
```vue
<script lang="ts" setup name="Person">
import{ref,onBeforeMount,onMounted,onBeforeUpdated,onUpdated,onBeforeUnmount,onUnmounted}from 'vue'
let sum= ref(0)
function add(){
sum.value += 1
}
//创建
console.log("创建")
//挂载前
onBeforeMount(()=>{
console.log('挂载前')
})
//挂载完！！！！！！！！！！！！！！！！！！！！！
onMounted(()=>{
console.log('挂载完')
})
//更新前
onBeforeUpdated(()=>{
console.log('更新前')
})
//更新完毕！！！！！！！！！！！！！！！！！！！！
onUpdated(()=>{
console.log('更新完毕')
})
//卸载前！！！！！！！！！！！！！！！！！！！！！
onBeforeUnmounted(()=>{
console.log('卸载前')
})
//卸载完
onUnmounted(()=>{
console.log('卸载完')
})
</script>
```
打！是常用的，即`onMounted onUpdated onBeforeUnmounted`