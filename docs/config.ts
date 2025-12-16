// English-specific vitepress configuration

import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'; //additional/locale-specific config

export default defineAdditionalConfig({
  description: 'Multilingual VitePress demo site',

  themeConfig: {
    // nav: nav(),

    // editLink: {
    //   pattern:
    //     "https://github.com/ahandsel/vitepress-multilanguage-setup/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },

    footer: {
      message: 'Written with ♥ in Tokyo',
      // copyright: 'Copyright © 2025-present ahandsel',
    },
  },
});

// function nav(): DefaultTheme.NavItem[] {
//   return [
//     {
//       text: 'GHOST',
//       link: '/guide/',
//       activeMatch: '/guide/',
//     },
//     {
//       text: 'Changelog',
//       link: '/changelog/',
//       activeMatch: '/changelog/',
//     },
//   ];
// }
