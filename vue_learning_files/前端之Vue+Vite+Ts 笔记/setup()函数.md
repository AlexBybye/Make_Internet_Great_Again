```vue
<script lang="ts">
export default {
    name: "person",
    setup() {
        // 数据(下面为非响应式数据，所以值变了，页面不变)，ref为响应式数据
        let name = "Lin_eclipse";
        let age = 21;
        let gender = "Male";
        //方法函数
        function changeage() {
            age = Math.floor(Math.random() * 100);
        }
        function changename() {
            name = "Lin_eclipse" + Math.floor(Math.random() * 100);
        }
        function showGender() {
            alert(gender);
        }
        //最后输出出去
        return { name, age, changename, changeage, showGender };
    }
}
</script>
```
#### //注意：旧的data() this依然可以调用vue3的setup()函数中的数据和方法，
#### //新的setup()函数中的数据和方法不能调用旧的data() this中的数据和方法。因为setup无this
### 但是我们通常遇不到上述的事情
# 但是每次return和setup太麻烦怎么办？
# setup语法糖！
```vue
	<script lang="ts" setup name="person"> 组件名称及功能全解决！ 
        // 数据(下面为非响应式数据，所以值变了，页面不变)，ref为响应式数据
        let name = "Lin_eclipse";
        let age = 21;
        let gender = "Male";
        //方法函数
        function changeage() {
            age = Math.floor(Math.random() * 100);
        }
        function changename() {
            name = "Lin_eclipse" + Math.floor(Math.random() * 100);
        }
        function showGender() {
            alert(gender);
        }
</script>
```
## 怎么引入组件？
![[{5FE6CA8C-1CEA-4863-AB6B-045CE120EC2D}.png]]