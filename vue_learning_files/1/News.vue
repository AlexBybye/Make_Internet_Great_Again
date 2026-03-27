<template>
  <div class="news">
    <!-- navigator -->
    <ul>
      <li v-for="news in newslist" :key="news.id">
        <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink>
      </li>
    </ul>

    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
const newslist = reactive([
  { id: "skadn1", title: "人最好吃的部位", content: "眼珠子" },
  { id: "skadn2", title: "如何杀死一个鲜活的人", content: "闷死拿刀杀" },
  { id: "skadn3", title: "如何处理鲜活的眼珠", content: "简单的剔除神经即可" },
  { id: "skadn4", title: "如何一夜暴富", content: "杀死那个石家庄人" },
])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>