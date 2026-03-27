### JavaScript 异步编程入门：`async` 和 `await` 教程
#### **1. 异步编程的基本概念**
JavaScript 中的异步编程允许程序在等待耗时操作（如 API 请求、文件读写等）时继续执行其他代码，从而提高性能和用户体验。
#### **2. `async` 和 `await` 的基本用法**
# 其实就是耗时操作函数被async嵌套，await后面接这个操作就可以
##  比如原来函数是
``` js
function fetchData() {
  const response = fetch('https://api.example.com/data');
  const data = response.json();
  console.log(data);
}

fetchData();
```
## 变成这样（一般加try catch捕捉错误）
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```
#### **3. 给个模板
```javascript
async function 函数名() {
  try {
    const 接收变量名 = await 耗时操作函数名();
  } catch (error) {
    console.error('Error:', error);
  }
}
函数名();
```
#### **4. 实际应用示例**
以下是一个完整的示例，展示如何使用 `async` 和 `await` 获取 GitHub 和Gitee用户信息：
```javascript
async function getUserInfo(username) {
  try {
    // 使用 Promise.all 同时等待多个异步操作完成
    const [githubResponse, giteeResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.gitee.com/users/${username}`)
    ]);
    // 分别解析每个响应的 JSON 数据
    const githubData = await githubResponse.json();
    const giteeData = await giteeResponse.json();
    // 输出结果
    console.log(`GitHub User: ${githubData.name}, Followers: ${githubData.followers}`);
    console.log(`Gitee User: ${giteeData.name}, Followers: ${giteeData.followers}`);
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
}

// 调用函数
getUserInfo('octocat');
```
