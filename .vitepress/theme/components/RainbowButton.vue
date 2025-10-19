<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  href?: string
}

withDefaults(defineProps<Props>(), {
  href: '#',
})
</script>

<template>
  <a
    :href="href"
    class="relative inline-block p-px rounded-xl group h-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-500 dark:via-blue-500 dark:to-indigo-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:via-blue-400 before:to-indigo-400 dark:before:from-purple-400 dark:before:via-blue-400 dark:before:to-indigo-400 before:scale-75 before:opacity-50 before:rounded-xl before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:opacity-100 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <p
      class="relative flex justify-center h-full text-sm font-semibold items-center text-white tracking-wide bg-gray-950 px-8 rounded-[calc(0.75rem-1px)] group-hover:bg-gray-900 transition duration-300"
    >
      <slot />
    </p>
  </a>
</template>
