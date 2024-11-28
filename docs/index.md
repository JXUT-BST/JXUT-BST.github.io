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
      text: API Docs
      link: /api-docs/api-examples

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

<script setup>
import { ref } from 'vue'

const footerConfig = ref( {
    showFooter: true, // 是否显示页脚
    icpRecordCode: '赣ICP备19006787号-2', // ICP备案号
    publicSecurityRecordCode: '', // 联网备案号
    copyright: `Copyright © 2017-${new Date().getFullYear()} JXUT BST` // 版权信息
  })
</script>

<!-- @include: ./about/about-bst.md{3,3} -->

<!-- TODO 抽离为Vue组件 -->
<!-- 备案展示实现方式参考 https://github.com/Charles7c/charles7c.github.io/blob/main/docs/.vitepress/theme/components/layout/Footer.vue-->
<footer class="VPFooter">
  <div class="container">
    <p v-if="footerConfig.icpRecordCode" class="recordCode">
      <span class="icon">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>ICP备案号</title><path d="M778.24 163.84c-76.8-40.96-165.888-61.44-269.312-61.44s-192.512 20.48-269.312 61.44h-133.12l23.552 337.92c8.192 113.664 67.584 217.088 162.816 280.576l215.04 144.384 215.04-144.384c96.256-63.488 155.648-166.912 163.84-280.576l23.552-337.92H778.24z m47.104 333.824c-7.168 94.208-56.32 181.248-135.168 233.472l-181.248 120.832L327.68 731.136c-78.848-53.248-129.024-139.264-135.168-233.472L173.056 225.28h136.192v-26.624c58.368-23.552 124.928-34.816 199.68-34.816s141.312 12.288 199.68 34.816V225.28H844.8l-19.456 272.384z"></path><path d="M685.056 328.704v-46.08H455.68c2.048-4.096 6.144-9.216 11.264-15.36 5.12-7.168 9.216-12.288 11.264-15.36L419.84 240.64c-31.744 46.08-75.776 87.04-133.12 123.904 4.096 4.096 10.24 11.264 18.432 21.504l17.408 17.408c23.552-15.36 45.056-31.744 63.488-50.176 26.624 25.6 49.152 43.008 67.584 51.2-46.08 15.36-104.448 27.648-175.104 35.84 2.048 5.12 6.144 13.312 9.216 24.576 4.096 11.264 6.144 19.456 7.168 24.576l39.936-7.168v218.112H389.12V680.96h238.592v19.456h54.272V481.28H348.16c60.416-12.288 114.688-27.648 163.84-46.08 49.152 19.456 118.784 34.816 210.944 46.08 5.12-17.408 10.24-34.816 17.408-51.2-62.464-4.096-116.736-12.288-161.792-24.576 38.912-20.48 74.752-46.08 106.496-76.8z m-150.528 194.56h94.208v41.984h-94.208v-41.984z m0 78.848h94.208v41.984h-94.208v-41.984z m-144.384-78.848h94.208v41.984H390.144v-41.984z m0 78.848h94.208v41.984H390.144v-41.984zM424.96 326.656h182.272c-26.624 22.528-57.344 41.984-94.208 57.344-31.744-15.36-61.44-34.816-88.064-57.344z"></path></svg>
      </span>
      <span class="content">
        <a href="https://beian.miit.gov.cn" target="_blank">{{ footerConfig.icpRecordCode }}</a>
      </span>
    </p>
    <p v-if="footerConfig.publicSecurityRecordCode" class="recordCode">
      <span class="icon">
        <img src="/img/badge/gongan.png" title="联网备案号">
      </span>
      <span class="content">
        <a :href="'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + footerConfig.publicSecurityRecordCode.replace('号', '').substring(footerConfig.publicSecurityRecordCode.indexOf('备') + 1)" target="_blank">{{ footerConfig.publicSecurityRecordCode }}</a>
      </span>
    </p>
    <p v-if="footerConfig.copyright" class="copyright" v-html="footerConfig.copyright"></p>
  </div>
</footer>

<style>
/* 保持 .VPFooter 的命名 */
.VPFooter {
  position: relative;
  z-index: 10; /* 设置 footer 层级 */
  padding: 25px 20px;
  font-family: Arial, sans-serif; /* 字体 */
}

/* 如果有侧边栏则隐藏 footer */
.VPFooter.has-sidebar {
  display: none;
}

/* 未触发时链接样式 */
.VPFooter a {
  color: #666666;
  text-decoration: none;
}

/* 屏幕宽度大于 768px 时，调整 footer 的 padding */
@media (min-width: 768px) {
  .VPFooter {
    padding: 30px 40px;
  }
}

/* 使内容居中并限制最大宽度 */
.VPFooter .container {
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
}

/* 备案号和版权信息的样式 */
.VPFooter .recordCode,
.VPFooter .copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: #666; /* 字体颜色 */
}

/* 备案号的排列顺序 */
.VPFooter .recordCode {
  order: 2;
}

.VPFooter .copyright {
  order: 1;
}

/* 去除段落的默认外边距 */
.VPFooter p {
  margin: 0;
}

/* 备案号中的 span 元素样式 */
.VPFooter .recordCode span {
  display: inline-block;
}

/* 备案号每个 span 之间的间距 */
.VPFooter .recordCode span:not(:last-child) {
  margin-right: 0.175rem;
}

/* 备案号图标的样式 */
.VPFooter .recordCode .icon svg,
.VPFooter .recordCode .icon img {
  height: 16px;
  width: 16px;
  fill: #5791ED; /* 图标颜色 */
  position: relative;
  top: 3px;
}

/* 备案号图片图标的大小 */
.VPFooter .recordCode .icon img {
  height: 14px;
  width: 14px;
  position: relative;
  top: 2px;
}
</style>
