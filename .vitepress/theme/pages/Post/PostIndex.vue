<!-- 实现方式参考Vite官网Blog页面 https://github.com/vitejs/vite/blob/main/docs/.vitepress/theme/components/BlogIndex.vue -->
<script lang="ts" setup>
import { data as posts } from "@theme/data/posts.data";

function getDateTime(time: number) {
	return new Date(time).toISOString();
}
</script>

<template>
  <ul class="post-list">
    <li v-for="post of posts" class="post-entry">
      <article>
        <a :href="post.url">
          <time :datetime="getDateTime(post.date.time)">
            {{ post.date.string }}
          </time>
          <h2 class="title">
            {{ post.title }}
          </h2>
        </a>
        <div v-if="post.excerpt" class="prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-300"
          v-html="post.excerpt">
        </div>
        <div class="text-base leading-6 font-medium">
          <a :href="post.url" aria-label="read more" class="link">阅读详情 →</a>
        </div>
      </article>
    </li>
  </ul>
</template>

<style scoped>
.post-list {
  list-style-type: none;
  padding: 0;
}

.post-entry {
  margin-top: 1em;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-entry article {
  padding: 1.5em;
  border-radius: 8px;
  /* 圆角 */
  box-shadow: var(--vp-shadow-1);
  /* 阴影效果 */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  /* 添加过渡效果 */
}

.post-entry article:hover {
  transform: translateY(-5px);
  /* 鼠标悬停时轻微上移 */
  box-shadow: var(--vp-shadow-2);
  /* 鼠标悬停时增强阴影 */
}

.post-entry time {
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.title {
  border: none;
  margin-top: 0;
  padding-top: 0;
  font-size: 22px;
}

.post-entry a {
  text-decoration: none;
  transition: color 0.2s ease;
  /* 添加颜色过渡 */
}
</style>
