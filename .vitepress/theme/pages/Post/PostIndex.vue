<!-- 实现方式参考Vite官网Blog页面 https://github.com/vitejs/vite/blob/main/docs/.vitepress/theme/components/BlogIndex.vue -->
<script lang="ts" setup>
import { data as posts } from "@theme/data/posts.data";

function getDateTime(time: number) {
	return new Date(time).toISOString();
}
</script>

<template>
  <section>
    <div class="container px-6 py-10 mx-auto">
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">活动推文</h1>
        <p class="max-w-lg mx-auto mt-4 text-gray-500 dark:text-gray-400 text-lg">
          记录蓝色技术工作室的重要时刻、技术分享与活动动态
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16">
        <article v-for="post of posts" :key="post.url"
          class="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              {{ post.title }}
            </h2>

            <hr class="w-16 my-4 border-blue-500">

            <p v-if="post.excerpt" v-html="post.excerpt"
              class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            </p>

            <div class="flex items-center justify-between mt-6">
              <time :datetime="getDateTime(post.date.time)" class="text-sm text-gray-500 dark:text-gray-400">
                {{ post.date.string }}
              </time>

              <a :href="post.url"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
                阅读详情
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>