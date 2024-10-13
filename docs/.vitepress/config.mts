import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "二次元社区官网",
  description: "SCP秘密实验室服务器-二次元社区官方网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/src/docs/introduce' }
    ],

    sidebar: [
      {
        items: [
          { text: '介绍', link: '/src/docs/introduce' }
        ]
      },
      {
        text: '随机事件',
        items: [
          { text: '所有事件列表', link: '/src/docs/events/all' },
          { text: '「艺术就是派大星」', link: '/src/docs/events/PinkCandyDay' },
        ]
      }
    ],

    editLink: {
      pattern: "https://github.com/2DServer/2DServer.github.io/blob/main/docs/:path",
      text: "在GitHub上编辑此页面"
    },

    lastUpdated: {
      text: "最后更新",
      formatOptions: {
          dateStyle: "full",
          timeStyle: "medium"
      }
    },

    docFooter: {
        prev: "上一页",
        next: "下一页"
    },

    search: {
        provider: "local",
    },

    footer: {
        message: "基于 <a href='https://github.com/2DServer/2DServer.github.io/blob/main/LICENSE'>GPL 3.0</a> 许可发布",
        copyright: "Copyright © 2024 2DServer"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2DServer/' }
    ],

    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "日出",
    darkModeSwitchTitle: "日落",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "送我上去",
    externalLinkIcon: true
  }
})
