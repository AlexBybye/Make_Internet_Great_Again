<template>
    <br>
    <h2>
        Game List
    </h2>
    <ul>
        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeSecondgame">修改第二个游戏名字</button>
</template>
<script lang="ts" setup name="game_list">
import { reactive } from 'vue'
let games = reactive([
    {
        id: "auisfhnch", name: 'gta5'
    },
    {
        id: "bhaikcsjk", name: 'gta4',
    },
    {
        id: "chjanjcv", name: 'gta3',
    }
])
function changeSecondgame() {
    games[1].name = '看门狗2'
}
</script>
<style>
.li {
    font-size: 20px;
}
</style>