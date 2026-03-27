<template>
    <div class="pet">
        <h2>宠物名：{{ name }}</h2>
        <h2>宠物信息：</h2>
        <h3>品种：{{ message.type }}</h3>
        <h3>售价：{{ message.price }}</h3>
        <button @click="changename">改名</button>
        <button @click="changeprice">价格</button>
        <button @click="showGender">查看性别</button>
    </div>
</template>
<script lang="ts" setup name="pet">
import { ref,reactive } from 'vue'
let name = ref("xingheyuzhou")
let message = reactive({type:"中华田园犬", price: 1})
let gender = "Male"
let games =[{ id:"auisfhnch",name:'gta5'},
    {
        id:"bhaikcsjk",name:'gta4',
    },
    {
        id:"chjanjcv",name:'gta3',
    }
]
//方法函数
function changeprice() {
    message.price = Math.floor(Math.random() * 1000);
}
function changename() {
    name.value = "xingheyuzhou" + Math.floor(Math.random() * 100);
}
function showGender() {
    alert(gender);
}
</script>
<style>
.pet {
    background-color:rgba(234, 28, 227, 0.8);
    box-shadow: 10px 0 10px;
    border-radius: 15px;
    padding: 20px;
}
</style>
