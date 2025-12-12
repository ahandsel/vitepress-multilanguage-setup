// Main vitepress configuration

import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  name: 'Multilingual Site',
  titleTemplate: ':title - ahandsel',
  description: 'Multilingual VitePress website demo',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  rewrites: { 'en/:rest*': ':rest*' },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        async _render(src, env, md) {
          // First pass populates env.frontmatter
          await md.renderAsync(src, env);

          const fm = env.frontmatter ?? {};

          // Honor per-page opt out
          if (fm.search === false) return '';

          let rewritten = src;

          // Replace headings like "# {{ $frontmatter.title }}" with a concrete title
          if (typeof fm.title === 'string' && fm.title.trim().length > 0) {
            // Replace H1 that is exactly an interpolation of frontmatter.title
            rewritten = rewritten.replace(
              /^#\s*\{\{\s*\$frontmatter\.title\s*\}\}\s*$/m,
              `# ${fm.title}`,
            );
            // Drop any other heading levels that interpolate frontmatter.title
            rewritten = rewritten.replace(
              /^#{2,6}\s*\{\{\s*\$frontmatter\.title\s*\}\}\s*$/gm,
              '',
            );
          }

          // Strip any remaining $frontmatter interpolations from the indexable text
          rewritten = rewritten.replace(/\{\{\s*\$frontmatter\.[^}]+\}\}/g, '');

          // Final render used for indexing
          return await md.renderAsync(rewritten, env);
        },
      },
    },
    logo: {
      // src: '/mingcute/ghost-fill.svg',
      dark: '/mingcute/ghost-line-light.svg',
      light: '/mingcute/ghost-line-dark.svg',
      // width: 24,
      // height: 24,
    },

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },

  // https://vitepress.dev/guide/internationalization
  locales: {
    root: { label: 'English', lang: 'en-US', dir: 'ltr' },
    ja: { label: '日本語', lang: 'ja-JP', dir: 'ltr' },
  },
};

const rootLocale = 'en';
const supportedLocales = [rootLocale, 'ja'];

const commonSidebarConfigs = {
  // https://vitepress-sidebar.cdget.com/guide/options
  // ============ [ RESOLVING PATHS ] ============
  documentRootPath: 'docs',
  // scanStartPath: null,
  // resolvePath: null,
  // basePath: null,
  // followSymlinks: false,
  //
  // ============ [ GROUPING ] ============
  collapsed: false,
  // collapseDepth: 2,
  // rootGroupText: "Table of Contents",
  // rootGroupLink: '',
  // rootGroupCollapsed: false,
  //
  // ============ [ GETTING MENU TITLE ] ============
  // useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  // useFolderLinkFromIndexFile: true,
  useFolderTitleFromIndexFile: true,
  frontmatterTitleFieldName: 'title',
  //
  // ============ [ GETTING MENU LINK ] ============
  // useFolderLinkFromSameNameSubFile: false,
  // folderLinkNotIncludesFileName: false,
  //
  // ============ [ INCLUDE / EXCLUDE ] ============
  excludeByGlobPattern: ['README.md', 'temp', 'temp.*', 'temp-*.md'],
  excludeFilesByFrontmatterFieldName: 'excludeFromSidebar',
  // excludeByFolderDepth: null,
  // includeDotFiles: false,
  // includeEmptyFolder: false,
  // includeRootIndexFile: false,
  // includeFolderIndexFile: false,
  //
  // ============ [ STYLING MENU TITLE ] ============
  hyphenToSpace: true,
  underscoreToSpace: true,
  // capitalizeFirst: false,
  // capitalizeEachWords: false,
  // keepMarkdownSyntaxFromTitle: false,
  // removePrefixAfterOrdering: false,
  // prefixSeparator: '.',
  //
  // ============ [ SORTING ] ============
  // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
  sortFolderTo: 'top',
  // sortMenusByName: false,
  // sortMenusByFileDatePrefix: false,
  sortMenusByFrontmatterOrder: true,
  frontmatterOrderDefaultValue: 10,
  // sortMenusByFrontmatterDate: false,
  // sortMenusOrderByDescending: false,
  // sortMenusOrderNumericallyFromTitle: false,
  // sortMenusOrderNumericallyFromLink: false,
  //
  // ============ [ MISC ] ============
  // debugPrint: true,
};

const vitePressSidebarConfigs = [
  ...supportedLocales.map((lang) => {
    return {
      ...commonSidebarConfigs,
      ...(rootLocale === lang ? {} : { basePath: `/${lang}/` }), // If using `rewrites` option
      documentRootPath: `/docs/${lang}`,
      resolvePath: rootLocale === lang ? '/' : `/${lang}/`,
    };
  }),
];

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarConfigs),
);
