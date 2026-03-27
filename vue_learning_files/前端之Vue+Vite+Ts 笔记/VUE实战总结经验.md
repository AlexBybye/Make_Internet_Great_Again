# HTML篇
```html

视频播放：<video :src="XXX" controls></video>
controls来添加播放等按钮；
:src连接着Ts中的 超链接

v-for记得这样：
<li v-for"item in y" :key="item.id">{{y.遍历参数名}}</li>
```
# TS篇

# CSS篇
```css
display:flex;  
justify-content:space-evenly;

```
弹窗一般：![[Pasted image 20250517144026.png]]
但是如果父组件有`filter:saturate(150%)`(饱和度)
会导致绝对定位失效
这时需要用到tp[[teleport传送]]