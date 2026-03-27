![[Pasted image 20250517141731.png]]
自定义响应式，结构如上
let initValue
let 自定义响应式/这里叫msg了 = ......
注意track( ) trigger( )
track作用是持续关注自定义响应式，变化就更新
trigger作用是告诉vue自定义响应式变化了
所以一个在get（ ）最前面
一个在set(value)的最后面
最后return 一个{msg}
使用：
```ts
import useMsgRef from "./useMsgRef"
let {msg} = useMsgRef('hello',2000)
```
