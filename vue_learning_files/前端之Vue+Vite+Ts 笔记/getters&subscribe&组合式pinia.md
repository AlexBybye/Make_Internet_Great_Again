 Pinia 的 `getters` 和 `subscribe` ：
###  Pinia Getters
**Pinia 的 `getters` 计算和访问 Pinia store 中的派生状态值，类似于 Vuex 的 `getters` 或 Vue 组件中的计算属性。**
#### 简单 Getter
```typescript
// text.js
import { defineStore } from 'pinia';

export const useTextStore = defineStore('text', {
  state: () => ({
    todos: [
      { id: 1, text: 'Task 1', completed: true },
      { id: 2, text: 'Task 2', completed: false }
    ]
  }),
  getters: {
    todonum:state=>state.todos.id,
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.completed);
    }
  }
});
```
#### 案例2：带参数的 Getter
```javascript
getters: {
  // 带参数的 getter
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id);
  }
}
```
#### 使用场景
- 当需要在多个组件中访问同一派生状态时。
- 当需要对状态进行预处理（如过滤、排序等）时。
#### 如何引用：
```js
// text .vue
<script setup lang='ts' name='text'>
import {storetoRefs} from 'pinia'
import {useTextStore} from '@/store/text'
const countStore =useountStore()
const{todonum,completedTodos} = storeTorefs
//这里说白了就是响应式解构赋值，方便在html中直接使用变量名即可不需要前缀
```

### 2. Pinia Subscribe
**Pinia 的 `subscribe` 监听 Pinia store 的状态变化，每次状态发生变化时都会触发回调函数。**
### pinia的watch
#### 基本使用
```javascript
// main.js
import { createPinia } from 'pinia';
import { useStore } from './store';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');

// 在某个地方监听状态变化
const store = useStore();
store.subscribe((mutation, state) => {
  console.log('Mutation:', mutation.type);
  console.log('New State:', state.todos);
});

```
### mutation:本次修改
### state:修改后
#### 使用 `subscribe` 记录操作
```javascript
store.subscribe((mutation, state) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    mutation: mutation.type,
    state: JSON.stringify(state)
  };
  // 将日志写入本地存储或其他地方!!!!!!!!!!!!
  localStorage.setItem('pinia-logs', JSON.stringify(logEntry))||[];
});
```
#### 使用场景
- **数据提交**：验证某些 mutation 是否按预期执行。
- **状态变化记录**：实现一个调试工具，用于记录状态变化的历史。
- **跨组件通信**：当一个组件修改了状态，另一个组件可以监听到变化。
### 总结
- **Getters** 用于从 Pinia store 中计算和派生状态，类似于 Vuex 的 `getters` 或 Vue 的计算属性。

- **Subscribe** 用于监听 Pinia store 的状态变化，可用于调试、记录日志或跨组件通信。
# 组合式pinia![[{1A9C5CC0-9E77-4790-A862-D2B39CD2D32D}.png]]
## 这个好！！！
### 所有都放在箭头函数中，唯一不同：记得return！！