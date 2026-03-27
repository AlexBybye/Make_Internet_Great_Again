# 原理：总线 
### ***个人感觉这个不错，规整的编写避免了形式的复杂***
```bash
npm -i mitt
```
## 习惯性在utils创建emitter.ts
emitter.ts
```ts
//引入
import mitt from 'mitt'
//调用
const emitter =mitt()
//绑定事件
emitter.on('test1',()=>{
  console.log('test1')
})
emitter.on('test2',()=>{
  console.log('test2')
})
//触发事件
setInterval(()=>{
  emitter.emit('test1')
  emitter.emit('test2')
},2000);//2S
setInterval是交替触发不停止了
//解绑
setTimeout(()=>{
  //emitter.off('test1')
  //emitter.off('test2')
  emitter.all.clear()//全解绑
},2000);//2S
//暴露
export default emitter
```
## 写完后就可以在各个组件灵活调用：
![[{523D0363-D83B-479E-BE4B-0362580F34AD}.png]]