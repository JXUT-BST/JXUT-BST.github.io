<!-- .vitepress/theme/MyLayout.vue -->
<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import RainbowButton from "./components/RainbowButton.vue";
</script>

<template>
  <DefaultTheme.Layout v-bind="$attrs">

    <!-- doc-footer-before插槽1个组件 -->
    <!-- <template #home-hero-actions-after>
      <RainbowButton />
    </template> -->

  </DefaultTheme.Layout>
</template>

<style scoped>
</style>