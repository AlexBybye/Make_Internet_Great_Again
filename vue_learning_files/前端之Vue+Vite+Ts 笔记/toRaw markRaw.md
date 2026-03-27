### toRaw
- **应用场景** ：当你需要将响应式对象转换为普通对象时，比如在与外部库交互时，外部库可能不支持响应式对象，这时候就需要用 `toRaw` 获取原始对象。或者在计算中需要避免响应式转换的性能开销时。
## - 只适用于由 `reactive`、`readonly`、`shallowReactive` 或 `shallowReadonly` 创建的代理对象，对普通对象调用该方法不会有任何影响。
## - 返回的对象是原始的，不再受响应式系统控制，但原始对象本身未被改变，只是响应式包装被去除。
- **示例** ：
```javascript
import { reactive, toRaw } from 'vue';

const state = reactive({ count: 0 });
const rawState = toRaw(state);

// 与外部库交互示例
someExternalLibrary.storeData(rawState);

// 避免性能开销示例
const temporaryClone = JSON.parse(JSON.stringify(rawState));
```

### markRaw
- **应用场景** ：当你确定某个对象不需要响应式时，可以使用 `markRaw` 标记它为原始对象。比如在处理大型不可变的数据集时，或者在创建工具类实例时（这些实例通常不涉及响应式状态）。
- **示例** ：
```javascript
import { reactive, markRaw } from 'vue';

// 创建工具类实例
const utils = markRaw({
  isEven(num) {
    return num % 2 === 0;
  }
});

const state = reactive({ utils });

// 使用工具类实例
console.log(state.utils.isEven(4)); // 42
```
一般防止变成响应式就套一个markRaw