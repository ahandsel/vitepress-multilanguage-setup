// Japanese-specific vitepress configuration

import { defineConfig, type DefaultTheme } from 'vitepress'; //additional/locale-specific config

export default defineConfig({
  title: '多言語 VitePress サイト',
  titleTemplate: ':title - ahandsel',
  description: '多言語 VitePress サイトの例',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // nav: nav(),

    // editLink: {
    //   pattern:
    //     "https://github.com/ahandsel/vitepress-multilanguage-setup/edit/main/docs/:path",
    //   text: "このページは GitHub 上で編集できます",
    // },

    footer: {
      message: '東京から ♥ を込めて執筆しています',
      // copyright: 'Copyright © 2025年～現在 ahandsel',
    },

    docFooter: {
      prev: '前へ',
      next: '次へ',
    },

    outline: {
      label: '目次',
    },

    lastUpdated: {
      text: '最終更新',
    },

    notFound: {
      title: 'ページが見つかりません',
      quote: 'お探しのページは見つかりませんでした。',
      linkLabel: 'トップページへ',
      linkText: 'トップページに戻る',
    },

    langMenuLabel: '言語  🌐  ',
    returnToTopLabel: 'ページ先頭へ戻る',
    sidebarMenuLabel: 'サイドメニュー',
    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替える',
    darkModeSwitchTitle: 'ダークモードに切り替える',
    skipToContentLabel: '本文へ移動',
  },
});

// function nav(): DefaultTheme.NavItem[] {
//   return [
//     {
//       text: 'GHOST',
//       link: '/ja/guide/',
//       activeMatch: '/guide/',
//     },
//     {
//       text: '変更履歴',
//       link: '/ja/changelog/',
//       activeMatch: '/changelog/',
//     },
//   ];
// }
