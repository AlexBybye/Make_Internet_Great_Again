### 用于优化性能，这俩性能比ref reactive 好使
## shallowRef：
代码和ref是一样的，哪里有ref就换哪里
#### 区别：
shallowRef仅可以使响应式为一层，比如：
![[Pasted image 20250517013519.png]]
shallowRef的是person，前两个就不是响应式，但后一个就是响应式
## shallowReactive：

代码和reactive一样，注意也不能修改整个对象[[响应式数据]]
#### 区别：shallowReactive可以在对象下延续一层：
比如person对象：
```ts
import {shallowReactive} from 'vue'
let person= shallowReactive({
name:"张三",
age:18,
object:{
 dog:"TOM",
 friend:"Amy",
}
})
```
此时name，age，object就是响应式，但dog friend不是，当然person修改也得通过assign去改