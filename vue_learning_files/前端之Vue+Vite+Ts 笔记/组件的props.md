前情提要：[[typescript起步]]
defineProps是一个用于父子组件通信的接口；
比如我在父组件定义了一个数据需要在子组件用到，应该怎么办？
![[{8D975049-6A4D-45F9-B529-BAEC56314916}.png]]左侧是父组件，可以看出我们使用defineProps一般是在右侧的子组件里面去调用的，格式是
### **1：```
```typescript
import {defineProps} from 'vue'
defineProps(['blablabla'])
```
注意不管接受多少他都得写成数组形式
### 2：之后就可以在```
```html
<template>这里通过{{blablabla}}来调用了</template>
```

而父组件需要做的是：
### **1：需要有数据（废话），这里是personList数组
### 2：另外在父组件HTML格式中的子组件标签需要有后缀，这里的后缀名需要等于子组件中的blablabla，注意有：置于前侧；=后则是‘数据的名称’字符串
## 为什么要用：呢？
这里其实是v-bind的简写，可以把后缀变量变成表达式来处理，不加：那肯定就是一个子组件变量名的字符串而已
不过我们回到[[标签名字冲突及父子组件通信：ref scoped defineExposed]]，可以发现ref（此时是标签标识）却不用加：**
OK，然后回到子组件，defineProps传出的结果是python那种字典，这里我们把它叫做对象，不好看怎么办？
[[v-for循环]]
![[{5D98EC36-7D13-435D-A269-8483792ACB71}.png]]
list为此时子组件变量名（blablabla）
:key="XXX.id" 每次都加就完事了
## **规范子组件的类型怎么搞？**
### ![[{B46FEFDC-C763-4C58-B847-FBA9F17F7216}.png]]二种方式

另外：import引入一般带有define都不用声明，因为是宏函数