<template>
    <ul class="news-list">
        <li>新闻编号:{{route.query.id}}</li>
        <li>新闻标题:{{route.query.title}}</li>
        <li>新闻内容:{{route.query.content}}</li>
    </ul>
</template>
<script setup lang="ts" name="About">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style scoped>
.news-list {
    display: flex;
    justify-content:safe;
    padding: 0 20px;
    list-style: none;
    margin-top: 30px;
}

.news-list li {
    font-size: 18px;
    line-height: 4px;
    text-decoration: none;
    color: #1fa363;
    text-shadow:0 0 1px rgb(77, 21, 175);
}
</style>
