<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { bst } from '../_data/team.js'
</script>

# 加入我们

## 联系方式

- QQ群
    [点击加入](https://qm.qq.com/q/YDvNeYEt0c)

- 微信公众号
    ![wx_qrcode](assets/join-us/IMG-20250222145441017.png)

## 办公地址

- 江西科技学院红绿蓝众创空间-201
- 江西科技学院S5-301

<VPTeamMembers :members="bst" />
