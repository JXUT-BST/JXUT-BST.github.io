---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "JXUT-BST-IO"
  text: "蓝色技术工作室"
  tagline: 技致者可敬，创新者无畏
  image:
    src: /bst-logo.svg
    alt: BST-Logo
  actions:
    - theme: brand
      text: 关于我们
      link: /about/about-bst

    - theme: alt
      text: 活动推文
      link: /posts

    - theme: alt
      text: API Docs
      link: /api-docs/api-examples

    - theme: brand
      text: 加入我们
      link: /contact/join-us

features:
  - icon: 🛠️
    title: 实践平台
    details: 提供丰富的实践机会，亲手参与项目，从理论到实践，全面提升技术能力。

  - icon: 📚
    title: 技术培训
    details: 定期举办技术公开课，资深成员提供技术辅导，帮助新成员迅速融入并提升技术水平。

  - icon: 🤝
    title: 团队协作
    details: 培养团队协作精神，通过团队合作完成项目，提升综合能力。

  - icon: 🏅
    title: 竞赛资源
    details: 提供丰富的竞赛技术文档、工具及相关资源，帮助成员高效备赛。

---
<Home />
<!-- @include: ./about/about-bst.md{3,3} -->

<Footer :icpRecordCode="'赣ICP备19006787号-2'" :copyright="`Copyright © 2017-${new Date().getFullYear()} JXUT BST`" />