[[HTML与Script在VUE下交互]]
# 存在的意义是什么？
## 在实际中我们很难保证id自己不会取重复名字，如果发生这种情况会出现调用渲染错误，而使用ref则不会如此，因为是分文件渲染的：
![[{0213C111-0356-42F4-A7E2-4CA73FE043F9}.png]]
### 这里的ref不是响应式数据的ref用法，而是作为一种标签来进行脚本和静态网站元素的调用，和document.getElementById是没区别的，而他的格式就是：
```typescript
静态标签后跟ref
script下面import ref
let同名赋值ref()
以后调用 名.value
```
## 同理，css标签为了各个文件避免怎么办？
内含式一般采用：
```html
<style scoped>
.person{
%% ... %%
}
</style>
```

# 注意，ref还可以给组件作为标签实现父子组件通信！
## 父亲端只需要引入就可以了
![[{9C81B976-245B-4947-A408-7BD0E33AABD7}.png]]
## 儿子端要考虑的就很多了，要多加个defineExpose声明和最后的包含！
![[{98905CFD-9C9C-426B-A19E-88BDAECF3B35}.png]]

