<template>
    <br>
    <h2>
        Game List
    </h2>
    <ul>
        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeSecondgame">修改第二个游戏名字</button>
    <div class="pet">
        <h2>宠物信息：</h2>
        <h3>品种：{{ message.type }}</h3>
        <h3>售价：{{ message.price }}</h3>
        <button @click="changeprice">价格</button>
    </div>
</template>

<script lang="ts" setup name="mixture">
import { ref } from 'vue'
let message = ref({ type: "中华田园犬", price: 1 })
let games = ref([
    { id: "auisfhnch", name: 'gta5' },
    { id: "bhaikcsjk", name: 'gta4' },
    { id: "chjanjcv", name: 'gta3' }
])

//方法函数
function changeprice() {
    message.value.price = Math.floor(Math.random() * 1000);
}
function changeSecondgame() {
    games.value[1].name = '看门狗2'
}
</script>

<style>
.li {
    font-size: 20px;
}
</style>