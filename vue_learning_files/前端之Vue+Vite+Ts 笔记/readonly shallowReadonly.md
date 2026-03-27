## readonly顾名思义：只读
## 无法修改，但是响应更新（说错了，实际上取决于关联的元素属性）
# 重要的元素为了防止被调用修改会另创出一个readonly
#### ![[Pasted image 20250517020225.png]]readonly遇上ref reactive的各项事项和shallowReadonly遇上ref reactive的各项事项是相同的，唯一区别就是那些元素现在变成了只读属性；一般不涉及shallowReadonly，用处很小
##### 想保护对象的顶层属性不被修改，但允许其嵌套对象被修改时，可以使用