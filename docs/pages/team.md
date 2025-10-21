---
layout: page
title: 认识我们的团队
description: 蓝色技术工作室是一个大团队，下面是对一些团队成员的介绍。
gitChangelog: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core, emeriti } from '../_data/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>认识我们的团队</template>
    <template #lead>
      蓝色技术工作室是一个大团队，下面是对一些团队成员的介绍。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <VPTeamPageSection>
    <template #title>团队荣誉会员</template>
    <template #lead>
      我们在此处向一些目前暂时不再活跃的团队成员致敬，他们在过去做出了宝贵的贡献。
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

::: warning 注意
🚧 页面正在建设中~ 欢迎提交 PR 补全信息
:::
