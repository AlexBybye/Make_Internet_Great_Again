## 首先在项目的目录页打开终端进行vite部署
![[Pasted image 20250405004601.png]]
## 之后打开IDE编辑器，注意进入项目目录后，自动配置依赖
```bash
npm i
```
### 这之后我们会出现一个node modules 文件，通过报错手动调整依赖，详细步骤如下：
#### 1：寻找node_modules\@vue\tsconfig\tsconfig.lib.json
```json
{
  "compilerOptions": {
    "noEmit": false,
    "declaration": true,
    "emitDeclarationOnly": true,
    "skipLibCheck": false,
    "forceConsistentCasingInFileNames": true,
    "strict": true
  }
}
```
#### 2:寻找node_modules\@tsconfig\node22\tsconfig.json
```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "_version": "22.0.0",
  "compilerOptions": {
    "lib": ["ES2022"],
    "module": "NodeNext",
    "target": "es2022",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16",
    "forceConsistentCasingInFileNames": true
  }
}
```
## 如何测试网页？
```bash
npm run dev
# h+enter:操作指南
```
## 最终成果
![[Pasted image 20250405162816.png]]
# 笑死我了，你不会又npm run dev 失败了吧？
##### 记得检查自己终端在不在项目目录
对了，指导下你这个操作
![[Pasted image 20250712223855.png]]
更新：现在npm已经到最新版本，我们需要更改 2:寻找node_modules\@tsconfig\node22\tsconfig.json
变成以下内容
```json
{

  "$schema": "https://www.schemastore.org/tsconfig",

  // "_version": "24.0.0", // 保持不变或移除

  

  "compilerOptions": {

    // ⭐ 修正: 必须包含 "DOM" 才能识别浏览器环境的 API (如 window, document)

    // "ESNext" 是一个别名，通常指向最新的稳定版本

    "lib": [

      "ESNext",

      "DOM",

      "DOM.Iterable"

      // 移除了不兼容的 es2024 和 ESNext.Collection 等，使用 ESNext 即可涵盖

    ],

    // ⭐ 修正: 浏览器环境应该使用 ES Module 规范

    "module": "ESNext",

    // ⭐ 修正: 使用 ESNext 作为目标，避免 "es2024" 不被旧校验器识别

    "target": "ESNext",

  

    "strict": true,

    "esModuleInterop": true,

    "skipLibCheck": true,

    // ⭐ 修正: 模块解析使用 "node" 策略，兼容 Vite/Webpack 的解析方式

    "moduleResolution": "node"

  }

}
```