# Project overview

Template repository for a multilingual VitePress documentation site. English is the default language, Japanese is included, and `docs/snippets` holds reusable content.


## Site structure and deployment

Built with [VitePress](https://vitepress.dev/) as a static site.

* Site-wide config: [docs/.vitepress/config.mts](./docs/.vitepress/config.mts)
* English config: [docs/config.ts](./docs/config.ts)
* English homepage: [docs/en/index.md](./docs/en/index.md)
* Japanese config: [docs/ja/config.ts](./docs/ja/config.ts)
* Japanese homepage: [docs/ja/index.md](./docs/ja/index.md)


## Local development

Run from the repository root:

```shell
pnpm install
pnpm dev
pnpm build
```


## Images in VitePress

Two options:

1. Public folder: store assets in [docs/public](./docs/public/) for direct linking (recommended for shared, large, or static assets).
2. Relative references: keep assets alongside Markdown files and link relatively.


## Project tools and dependencies

This repository uses the following tools and dependencies:

| Tool                                                                                          | Purpose                                 | Config file                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CSpell](https://cspell.org/)                                                                 | Spell checking                          | [.cspell.json](./.cspell.json)                                                                                                                                                     |
| [DavidingPlus/VitePress-image-viewer](https://github.com/davidingplus/VitePress-image-viewer) | Image viewer with zoom and captions     | [docs/.vitepress/theme/index.ts](./docs/.vitepress/theme/index.ts) and [../theme/components/ImageViewerActivator.vue](./docs/.vitepress/theme/components/ImageViewerActivator.vue) |
| [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)                          | Markdown linting                        | [.markdownlint.json](./.markdownlint.json)                                                                                                                                         |
| [MingCute Icon](https://www.mingcute.com/)                                                    | Icon library                            | [docs/public/mingcute/](./docs/public/mingcute/)                                                                                                                                   |
| [pnpm](https://pnpm.io/)                                                                      | Package manager                         | [pnpm-workspace.yaml](./pnpm-workspace.yaml)                                                                                                                                       |
| [prettier](https://prettier.io/)                                                              | Code formatter                          | [.prettierrc.json5](./.prettierrc.json5)                                                                                                                                           |
| [VitePress Mermaid Renderer](https://VitePress-mermaid-renderer.sametcc.me/)                  | Mermaid diagram rendering for VitePress | [docs/.vitepress/theme/index.ts](./docs/.vitepress/theme/index.ts)                                                                                                                 |
| [VitePress-sidebar](https://VitePress-sidebar.cdget.com/)                                     | Sidebar management for VitePress        | [docs/.vitepress/config.mts](./docs/.vitepress/config.mts)                                                                                                                         |
| [VitePress](https://vitepress.dev/)                                                           | Static site generator                   | [docs/.vitepress/config.mts](./docs/.vitepress/config.mts)                                                                                                                         |
