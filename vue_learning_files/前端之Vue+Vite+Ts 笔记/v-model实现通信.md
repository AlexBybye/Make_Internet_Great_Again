## 双向绑定，实际开发一般用于HTML的双向绑定，不会使用组件标签形式
v-model用于HTML标签
```html
<input type='text' v-model='username'>
```
v-model用于组件标签（实际开发有底层UI库时）
```html
<ScutInput v-model='username'/>
```
### 注意：封装底层UI库使用v-model
![[Pasted image 20250510204919.png]]
其中左侧为开发，右侧为底层UI库
