/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '快速开始', link: '/document/概述/快速开始' },
  // {
  //   text: '1.0.0-rc.**',
  //   items: [
  //     { text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
  //     { text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
  //     ],
  // },
]