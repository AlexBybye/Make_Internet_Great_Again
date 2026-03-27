# 使用 `storeToRefs` 的优点
- **优点**
    - **保持响应式**：使用 `storeToRefs` 可以将 store 中的状态和 getters 转换为独立的响应式引用，这样在组件中解构使用时，依然能够保持响应式特性，确保组件能够正确地响应 store 中状态的变化。
    - **解耦性好**：只提取需要的状态和 getters，减少了组件对整个 store 的依赖，降低了耦合度，使代码更具模块化和可维护性，便于后续的修改和扩展。
    - **性能优化**：只关注和使用 store 中必要部分，避免了对整个 store 实例的响应式追踪，从而减少了不必要的性能开销，提高应用的性能，尤其是对于大型或复杂的 store 结构来说，这种性能优化更为明显。
### 一般就是在pinia状态管理中,storeToRefs 可将 Pinia Store 中的状态和 getters 转换为独立的响应式引用ref，确保解构后的数据仍保持响应式
# nanoid
是一个用于生成唯一字符串 ID 的 JavaScript 库
```bash
npm install nanoid
```
`import {nanoid} from "nanoid"`
#### 通常用于需要生成唯一标识符的场景，如数据库记录的主键、用户会话令牌、API 资源标识、分布式系统的全局唯一标识符以及短 URL 生成等。
## 回顾[[解构赋值]]toRefs后
# 注意：实际开发很少用toRefs
## 有就用storeToRefs代替
