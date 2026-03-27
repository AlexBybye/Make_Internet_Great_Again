<template>
  <!-- html -->
  <div class="app">
    <h1>GTA霜碧肥牛宠物店</h1>
    <h2>主人信息</h2>
    <person></person>
    <h2>宠物信息</h2>
    <pet></pet>
  </div>
</template>

<script lang="ts" setup name="App">
// 引入组件
import Person from '../trash/personal.vue'
import Pet from './component/pet.vue'

// 注册组件（在 Vue 3 的 <script setup> 中，
// 需要通过 defineComponent 来注册组件）
import { defineComponent } from 'vue'

defineComponent({
  components: {
    Person,
    Pet
  }
})
</script>

<template>
  <div>
    <!-- 使用注册的组件 -->
    <Person />
    <Pet />
  </div>
</template>

<style>
/* CSS */
.app {
  background-color: #ddd;
  box-shadow: 10px 0 10px;
  border-radius: 15px;
  padding: 20px;
}
</style>