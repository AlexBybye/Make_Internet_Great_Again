### placeholder:HTML 输入空时的提示词
## v-bind:单向绑定（数据留存页面，不进行改值）
## v-model:双向绑定
## computed:这个以后要有计算尽量用computed，别用函数function,因为有缓存；
## 意思就是如果数据会覆盖掉原有的，就用computed!
### - **`computed`**：
    - 当计算逻辑依赖于响应式数据，并且结果需要缓存时。    
    - 当计算逻辑复杂或计算成本较高时。
        
- **普通函数**：
    - `当需要动态计算，且每次调用都需要重新计算时。`
    - `当计算逻辑依赖于外部输入参数时。`
```vue
<template>
  <div class="player-registration">
    <h1>玩家登记表</h1>
    
    <div class="form-group">
      <h2>姓名：</h2>
      <input type="text" v-model="name" placeholder="请输入姓名" />
    </div>
    
    <div class="form-group">
      <h2>账号名：</h2>
      <input type="text" v-model="username" placeholder="请输入账号" />
    </div>
    
    <div class="result">
      <h2>登记信息：</h2>
      <p>{{ registrationInfo }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 使用 ref 定义响应式数据
const name = ref("");
const username = ref("");

// 计算属性，用于组合和显示登记信息
const registrationInfo = computed(() => {
  if (!name.value && !username.value) {
    return "请填写姓名和账号";
  } else if (!name.value) {
    return `账号名：${username.value}`;
  } else if (!username.value) {
    return `姓名：${name.value}`;
  } else {
    return `姓名：${name.value}，账号名：${username.value}`;
  }
});
</script>

<style>
.player-registration {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  width: 300px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 5px;
}

.result {
  margin-top: 30px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>
```