## 什么是`hook`？—— 本质是一个函数，把`setup`函数中使用的`Composition API`进行了封装。
## 自定义`hook`的优势：复用代码, 让`setup`中的逻辑更清楚易懂。
## 说白了，写太多function会出现可读性下降，hooks解决这个事情

### 状态管理类 - `useCounter`

**示例代码：**

```javascript
import { ref, computed } from 'vue';

export function useCounter() {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  return { count, doubleCount, increment, decrement };
}
```

**使用方法：**
```javascript
import { useCounter } from './composables/useCounter';

export default {
  setup() {
    const { count, doubleCount, increment, decrement } = useCounter();
    return { count, doubleCount, increment, decrement };
  },
};
```

### 数据获取类 - `useFetch`

**示例代码：**
```javascript
import { ref, onMounted } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const fetchData = async () => {
    isLoading.value = true;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchData);

  return { data, error, isLoading, fetchData };
}
```

**使用方法：**

```javascript
import { useFetch } from './composables/useFetch';

export default {
  setup() {
    const { data, error, isLoading, fetchData } = useFetch('https://api.example.com/data');
    return { data, error, isLoading, fetchData };
  },
};
```

### 副作用类 - `useDebounce`

**示例代码：**

```javascript
import { ref, watch } from 'vue';

export function useDebounce(source, delay = 300) {
  const debounced = ref(source.value);
  let timeout;

  watch(
    source,
    (newValue) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        debounced.value = newValue;
      }, delay);
    },
    { immediate: true }
  );

  return debounced;
}
```

**使用方法：**

```javascript
import { ref } from 'vue';
import { useDebounce } from './composables/useDebounce';

export default {
  setup() {
    const searchQuery = ref('');
    const debouncedQuery = useDebounce(searchQuery, 500);
    return { searchQuery, debouncedQuery };
  },
};
```

### 事件处理类 - `useClickOutside`

**示例代码：**

```javascript
import { ref, onMounted, onUnmounted } from 'vue';

export function useClickOutside(elementRef, callback) {
  const isOutside = ref(false);

  const handleClick = (event) => {
    if (elementRef.value && !elementRef.value.contains(event.target)) {
      isOutside.value = true;
      callback && callback();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClick);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClick);
  });

  return isOutside;
}
```

**使用方法：**

```javascript
import { ref } from 'vue';
import { useClickOutside } from './composables/useClickOutside';

export default {
  setup() {
    const modalRef = ref(null);
    const isOutside = useClickOutside(modalRef, () => {
      console.log('Clicked outside the modal');
    });
    return { modalRef, isOutside };
  },
};
```

以上示例展示了不同类型的 Vue 3 自定义组合式函数，它们涵盖了状态管理、数据获取、副作用处理和事件处理等常见场景
# 这里需要接触axios：
[[axios交互]]
# 还需要接触下异步编程：
[[async异步编程]]
## 解决方案：原有样式展示![[{002C73F8-5F4E-403B-81A3-30E51EB764FF}.png]]
## 创建hooks文件夹于src
### hooks命名规范：useXXX.ts （XXX为复写的功能）
## useDog:![[{367BF11C-C44D-4711-9CB7-CA09C5D879FC}.png]]
### 只用dog的代码，用`export default function(){}`套住，sum的数据代码删除，最后return数据和方法；钩子也可以放！
## 子组件person
```vue
<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import useSum from '@/hooks/useSum'
  import useDog from '@/hooks/useDog'

  const {sum,add,bigSum} = useSum()
  const {dogList,getDog} = useDog()
</script>
```
## 使用仅需这样import出来+提取

```CSS
<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
  img {
    height: 100px;
    margin-right: 10px;
  }
</style>
```
带有钩子的hooks示例：
```ts
import {reactive,onMounted} from 'vue'
import axios from 'axios'  
export default function (){
  // 数据
  let dogList = reactive([   'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
  ])
  // 方法
  async function getDog(){
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }
  // 钩子
  onMounted(()=>{
    getDog()
  })
  // 向外部提供东西
  return {dogList,getDog}
}
```
