---
title: 团队成员
layout: home
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
    认识我们的团队
</template>
<template #lead>
    蓝色技术工作室是一个大团队，下面是对一些团队成员的介绍。
</template>
</VPTeamPageTitle>
<VPTeamMembers size="small":members="members" />

<VPTeamPageSection>
    <template #title>官网维护者</template>
    <template #lead>官网目前由以下团队成员进行维护。</template>
    <template #members>
        <VPTeamMembers size="small" :members="partners" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>团队荣誉会员</template>
    <template #lead>我们在此处向一些目前暂时不再活跃的团队成员致敬，他们在过去做出了宝贵的贡献。</template>
    <template #members>
        <VPTeamMembers size="small" :members="partners" />
    </template>
</VPTeamPageSection>

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
