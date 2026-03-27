## 一、
## 回顾ref实现组件通信：
### 儿子的信息不会全部由父亲查看，故在子组件Ts段需要选择暴露的元素：
### defineExpose({要暴露的元素名, })
之后操作见[[HTML与Script在VUE下交互]]3.
##  `$refs`用于 ：**父→子。**
值为对象，包含所有被`ref`属性标识的`DOM`元素或组件实例
## `$parent`用于：**子→父。**
 值为对象，当前组件的父组件实例对象。
# 上述为vue2内容，选择性了解即可
## 二、provide、inject
### 实现**祖孙组件**直接通信（不一定爷孙）
   * 在祖先组件中通过`provide`配置向后代组件提供数据
   * 在后代组件中通过`inject`配置来声明接收数据
   祖=>孙
![[Pasted image 20250511153541.png]]
孙=>祖
举例：
   ```vue
   <template>
     <div class="father">
       <h3>父组件</h3>
       <h4>资产：{{ money }}</h4>
       <h4>汽车：{{ car }}</h4>
       <button @click="money += 1">资产+1</button>
       <button @click="car.price += 1">汽车价格+1</button>
       <Child/>
     </div>
   </template>
   
   <script setup lang="ts" name="Father">
     import Child from './Child.vue'
     import { ref,reactive,provide } from "vue";
     // 数据
     let money = ref(100)
     let car = reactive({
       brand:'奔驰',
       price:100
     })
     // 用于更新money的方法
     function updateMoney(value:number){
       money.value -= value
     }
     // 提供数据
     provide('moneyContext',{money,updateMoney})
     provide('car',car)
   </script>
   ```
   
   > 注意：子组件中不用编写任何东西，是不受到任何打扰的
   
   【第二步】孙组件中使用`inject`配置项接受数据。注意默认值分配类型
   
   ```vue
   <template>
     <div class="grand-child">
       <h3>我是孙组件</h3>
       <h4>资产：{{ money }}</h4>
       <h4>汽车：{{ car }}</h4>
       <button @click="updateMoney(6)">点我</button>
     </div>
   </template>
   
   <script setup lang="ts" name="GrandChild">
     import { inject } from 'vue';
     // 注入数据
    let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(x:number)=>{}})
    //这里就是分配默认函数了
     let car = inject('car')
</script>
   ```