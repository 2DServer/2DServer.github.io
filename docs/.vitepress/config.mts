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
                { text: '「逆转设施」', link: '/src/docs/events/ReversalTeam' },
                { text: '「嘟嘟哒嘟嘟哒」', link: '/src/docs/events/BadBone' },
                { text: '「狙击手」', link: '/src/docs/events/OneRevolver' },
                { text: '「吓我一跳我释放忍术」', link: '/src/docs/events/Invisible' },
                { text: '「DataErr0r」', link: '/src/docs/events/DataError' },
                { text: '「联觉信标」', link: '/src/docs/events/IntercomBeacon' },
                { text: '「糖逝传奇」', link: '/src/docs/events/CandyBag' },
                { text: '「开门战」', link: '/src/docs/events/DoorWar' },
                { text: '「厄咒·第三封印」', link: '/src/docs/events/DarkFog' },
                { text: '「双水共鸣」', link: '/src/docs/events/MoreHP' },
                { text: '「爆头」', link: '/src/docs/events/HeadShot' },
                { text: '「橡胶果实」', link: '/src/docs/events/RandomPlayerSize' },
                { text: '「Man!」', link: '/src/docs/events/ShotBigRecoil' },
                { text: '「悄悄滴进村」', link: '/src/docs/events/PlayerSilentWalk' },
                { text: '「飞雷神术式」', link: '/src/docs/events/KillerTP' },
                { text: '「压制者提前压制」', link: '/src/docs/events/InfAmmo' },
                { text: '「我喜欢你 你喜欢我」', link: '/src/docs/events/FFHitGiveHP' },
                { text: '「榴弹枪」', link: '/src/docs/events/GrenadeGun' },
                { text: '「C4专家」', link: '/src/docs/events/ExplosivePro' },
                { text: '「不死图腾」', link: '/src/docs/events/TotemOfUndying' },
                { text: '「钢化玻璃」', link: '/src/docs/events/BetterGlass' },
                { text: '「天使坠落」', link: '/src/docs/events/AngelFall' },
                { text: '「宇宙大乐透」', link: '/src/docs/events/CosmicBigLotto' },
                { text: '「不要停下来啊」', link: '/src/docs/events/RunSpeedUp' },
                { text: '「D-9341」', link: '/src/docs/events/D9341' },
                { text: '「友谊就是魔法」', link: '/src/docs/events/Friendship' },
                { text: '「保护VIP」', link: '/src/docs/events/ProtectVIP' },
                { text: '「球哥」', link: '/src/docs/events/BallBro' },
                { text: '「The EmpErroR」', link: '/src/docs/events/EmpError' },
                { text: '「祝福·存护」', link: '/src/docs/events/CunHu_Preservation' },
                { text: '「祝福·记忆」', link: '/src/docs/events/JiYi_Rememberance' },
                { text: '「祝福·欢愉」', link: '/src/docs/events/HuanYu_Elation' },
                { text: '「祝福·巡猎」', link: '/src/docs/events/XunLie_Hunt' },
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
