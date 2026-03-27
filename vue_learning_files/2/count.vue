<template>
    <div class="count">
        <h2>当前求和：{{ sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="add">+</button>
        <button @click="minus">-</button>

    </div>
</template>
<script lang='ts' setup name="count">
import { ref } from 'vue';
let sum = ref(1)//current
let n = ref(1)//selection
function add() {
    sum.value += n.value
}
function minus() {
    sum.value -= n.value
}
</script>
<style scoped>
.count {
    background-color: skyblue;
    padding: 20px;
    border-radius: 5px;
}
</style>