# 接口interface及怎么接：
技巧：一般在src下面建个文件夹，接口index.ts写在其中
```typescript
export interface personineter{
    id:string,
    name:string,
    age:number,
}
//定义用于person的接口
```
在要使用的文件：
![[{D90C19D9-E8EA-4265-B00F-1980D67793C9}.png]]
如果是数组？
![[{A4E05EB6-E60F-4285-8DC5-CB5C53AC598A}.png]]