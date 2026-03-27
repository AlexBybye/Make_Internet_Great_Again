不想写这么麻烦的传参：![[{556ACCB5-5BB9-4348-84B2-679200B72DF6} 1.png]]
![[{2EDF28D2-F829-42D9-8EF2-47130587BD97}.png]]
所以可以用props!
# 第一种：仅params
在配置路由文件（index.ts）时可以在子子路由写上
`props:true`（所有收到的params参数传给路由）
![[{A05AC53F-0B0B-49FD-8662-A80488EDD968}.png]]
# 第二种：props函数来自定义传参（query）
```ts
children: [
    {
        name: 'dog',
        path: 'detail',
        component: Detail,
        props(route) {
            return route.query
        }
    }
]
```

然后：
### 紧接着只需要在调用的文件明确definePops即可
![[{4D4D7426-323C-4D3E-BFEF-3838887333E2}.png]]
