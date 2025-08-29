<!-- 实现方式参考Vite官网Blog页面 https://github.com/vitejs/vite/blob/main/docs/.vitepress/theme/components/BlogIndex.vue -->
<script setup lang="ts">
import { data as posts } from "../../../_data/blog.data";

function getDateTime(time: number) {
	return new Date(time).toISOString();
}
</script>

<template>
  <ul class="blog-list">
    <li class="blog-entry" v-for="post of posts">
      <a :href="post.url">
        <article>
          <time :datetime="getDateTime(post.date.time)">{{
            post.date.string
            }}</time>
          <h2 class="title">
            {{ post.title }}
          </h2>
        </article>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.blog-list {
  list-style-type: none;
  padding: 0;
}
.blog-entry {
  margin-top: 1em;
  border-bottom: 1px solid var(--vp-c-divider);
}

.blog-entry article {
  padding: 1.5em;
  border-radius: 8px; /* 圆角 */
  box-shadow: var(--vp-shadow-1); /* 阴影效果 */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* 添加过渡效果 */
}

.blog-entry article:hover {
  transform: translateY(-5px); /* 鼠标悬停时轻微上移 */
  box-shadow: var(--vp-shadow-2); /* 鼠标悬停时增强阴影 */
}

.blog-entry time {
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.title {
  border: none;
  margin-top: 0;
  padding-top: 0;
  font-size: 22px;
}

.blog-entry a {
  text-decoration: none;
  transition: color 0.2s ease; /* 添加颜色过渡 */
}
</style>
