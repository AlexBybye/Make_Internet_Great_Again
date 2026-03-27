## src最简框架是只有component
![[Pasted image 20250405141649.png]]
## 之后由App.vue来进行各个component的注册及使用

### App.vue是组件的组合处：
```vue
<template>
  <!-- html -->
  <div class="app">
    <h1>Hello,world!</h1>
  </div>
  <person></person>
</template>

<script lang="ts">
// Js/Ts
import person from './component/personal.vue'
export default {
  name: 'App',// 组件名称
  components: {
    person
  },// 注册组件,之后可使用
}
</script>

<style>
/* CSS */
.app {
  background-color: #ddd;
  box-shadow: 10px 0 10px;
  border-radius: 15px;
  padding: 20px;
}
</style>
```
### 其中注册及调用等如上所示

## 下面是对小组件person.vue的样式编写：
```vue
<template>
    <div class="person">
        <h2>
            姓名：{{ name }}<br>
            年龄：{{ age }}<br>
            <button @click="changename">改名</button>
            <button @click="changeage">改龄</button>
            <button @click="showGender">查看性别</button>
        </h2>
    </div>
</template>

<script lang="ts">
export default {
    name: "person",
    data() {
        return {
            name: "Lin_eclipse",
            age: 21,
            gender: "Male",
        }
    },
    methods: {
        changeage() {
            this.age = Math.floor(Math.random() * 100);
        },
        changename() {
            this.name = "Lin_eclipse" + Math.floor(Math.random() * 100);
        },
        showGender() {
            alert(this.gender);
        },
    }
}
</script>

<style>
.person {
    background-color: salmon;
    box-shadow: 10px 0 10px;
    border-radius: 15px;
    padding: 20px;
}
</style>
```
// 上面是vue2风格API，vue3采用组合式API;不然更改一个东西要分三处去搞很麻烦
//也就是说，我们现在是要换一种方式去实现：
// 1.使用setup函数来定义组件的逻辑

// 2.使用ref来定义响应式数据

// 3.使用computed来定义计算属性

// 4.使用watch来定义侦听器

// 5.使用onMounted来定义生命周期钩子函数

// 6.使用onUnmounted来定义销毁钩子函数

// 7.使用provide和inject来实现依赖注入

// 8.使用teleport来实现传送门功能

// 9.使用suspense来实现异步组件的加载

// 10.使用defineComponent来定义组件

// 11.使用defineAsyncComponent来定义异步组件

// 12.使用defineEmits来定义事件
