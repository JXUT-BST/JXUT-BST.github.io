---
title: 人物志
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/JXUT-BST.png',
    name: 'JXUT-BST',
    title: '蓝色技术工作室',
    links: [
      { icon: 'github', link: 'https://github.com/JXUT-BST' },
    ]
  },
]

const partners = [
  {
    avatar: ' ',
    name: ' ',
    title: ' ',
    links: [

    ]
  },
]

</script>

<VPTeamPage>

<VPTeamPageTitle>
<template #title>
    Our Team
</template>
<template #lead>
    蓝色技术工作室是一个大团队，其中一些成员选择在下面展示。
</template>
</VPTeamPageTitle>
<VPTeamMembers size="small":members="members" />

<VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>寻找合作伙伴...</template>
    <template #members>
        <VPTeamMembers size="small" :members="partners" />
    </template>
</VPTeamPageSection>

</VPTeamPage>

---

::: tip
2022年之前的数据来源旧官网，年代久远，数据存在错乱及丢失。如果有补充请移步[issuse](https://github.com/JXUT-BST/JXUT-BST-IO-VitePress/issues)。
:::
