<!-- <template>
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
// export default {
//     name: "person",

//     data() {
//         return {
//             name: "Lin_eclipse",
//             age: 21,
//             gender: "Male",
//         }
//     },
//     methods: {
//         changeage() {
//             this.age = Math.floor(Math.random() * 100);
//         },
//         changename() {
//             this.name = "Lin_eclipse" + Math.floor(Math.random() * 100);
//         },
//         showGender() {
//             alert(this.gender);
//         },
//     }
// }
</script>-->
<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changename">改名</button>
        <button @click="changeage">改龄</button>
        <button @click="showGender">查看性别</button>
    </div>
</template>
<script lang="ts">
// 上面是vue2风格API，vue3采用组合式API
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
// export default {
//     name: "person",
//     setup() {
//         // 数据(下面为非响应式数据，所以值变了，页面不变)，ref为响应式数据
//         let name = "Lin_eclipse";
//         let age = 21;
//         let gender = "Male";
//         //方法函数
//         function changeage() {
//             age = Math.floor(Math.random() * 100);
//         }
//         function changename() {
//             name = "Lin_eclipse" + Math.floor(Math.random() * 100);
//         }
//         function showGender() {
//             alert(gender);
//         }
//         //最后输出出去
//         return { name, age, changename, changeage, showGender };
//     }
// }
//注意：旧的data() this依然可以调用vue3的setup()函数中的数据和方法，
//新的setup()函数中的数据和方法不能调用旧的data() this中的数据和方法。因为setup无this
</script>

<!-- 新版语法糖： -->
<script lang="ts" setup name="person">
import { ref } from 'vue'
// 数据(下面为非响应式数据，所以值变了，页面不变)，ref为响应式数据
let name =ref("Lin_eclipse");
let age = ref(21);
let gender = "Male";
//方法函数
function changeage() {
    age.value = Math.floor(Math.random() * 100);
}
function changename() {
    name.value = "Lin_eclipse" + Math.floor(Math.random() * 100);
}
function showGender() {
    alert(gender);
}
</script>

<style>
.person {
    background-color:rgba(46, 215, 221, 0.7);
    box-shadow: 5px 10px 10px;
    border-radius: 15px;
    padding: 20px;
}
</style>