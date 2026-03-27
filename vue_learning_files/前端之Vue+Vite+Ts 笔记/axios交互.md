## Axios 是一个基于 `Promise` 的 HTTP 客户端库，用于浏览器和 Node.js。可以帮助发送 HTTP 请求并与 API 交互。以下是 Axios 的入门指南，包括安装、基本用法和常见操作。
### **1. 安装 Axios**
```bash
npm i axios
```
### 然后在代码中引入：
```javascript
const axios = require('axios');
```
### **2. 基本用法**
`axios` 的 `then` 可以被 `async` 和 `await` 替代。`async` 和 `await` 是基于 `Promise` 的语法糖，使异步代码更加直观和易于维护。以下是一些示例，展示如何用 `async` 和 `await` 替代 `axios` 的 `then`。
## 注意：可以参考[[async异步编程]]
### **1. 基本用法**
```javascript
// 使用 then
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// 使用 async 和 await
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```
### **2. POST 请求**
```javascript
// 使用 then
axios.post('https://api.example.com/data', {
  name: 'John Doe',
  age: 30
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// 使用 async 和 await
async function postData() {
  try {
    const response = await axios.post('https://api.example.com/data', {
      name: 'John Doe',
      age: 30
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

postData();
```

### **3. 并发请求**
```javascript
// 使用 then
axios.all([
  axios.get('https://api.example.com/data1'),
  axios.get('https://api.example.com/data2')
])
  .then(axios.spread((data1, data2) => {
    console.log(data1, data2);
  }))
  .catch(error => {
    console.error('Error:', error);
  });

// 使用 async 和 await
async function fetchAllData() {
  try {
    const [data1, data2] = await Promise.all([
      axios.get('https://api.example.com/data1'),
      axios.get('https://api.example.com/data2')
    ]);
    console.log(data1.data, data2.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAllData();
```

### **4. 错误处理**
```javascript
// 使用 then
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// 使用 async 和 await
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```