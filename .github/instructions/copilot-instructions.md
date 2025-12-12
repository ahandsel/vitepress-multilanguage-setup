# Project overview

Template repository for a multilingual VitePress documentation site. English is the default language, Japanese is included, and `docs/snippets` holds reusable content.


## Site structure and deployment

Built with [VitePress][] as a static site.

* Site-wide config: [docs/.vitepress/config.mts][]
* English config: [docs/config.ts][]
* English homepage: [docs/en/index.md][]
* Japanese config: [docs/ja/config.ts][]
* Japanese homepage: [docs/ja/index.md][]


## Local development

Run from the repository root:

```shell
pnpm install
pnpm docs:dev
pnpm docs:build
```


## Images in VitePress

Two options:

1. Public folder: store assets in [docs/public][] for direct linking (recommended for shared, large, or static assets).
2. Relative references: keep assets alongside Markdown files and link relatively.


## Project tools and dependencies

This repository uses the following tools and dependencies:

| Tool                                    | Purpose                                 | Config file                                                                                                     |
| --------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [CSpell][]                              | Spell checking                          | [.cspell.json][]                                                                                                |
| [DavidingPlus/VitePress-image-viewer][] | Image viewer with zoom and captions     | [docs/.VitePress/theme/index.ts][] and [../theme/components/ImageViewerActivator.vue][ImageViewerActivator.vue] |
| [markdownlint-cli2][]                   | Markdown linting                        | [.markdownlint.json][]                                                                                          |
| [Pictogrammers Material Design Icons][] | Icon library                            | [docs/public/pictogrammers/][]                                                                                  |
| [pnpm][]                                | Package manager                         | [pnpm-workspace.yaml][]                                                                                         |
| [prettier][]                            | Code formatter                          | [.prettierrc.json5][]                                                                                           |
| [VitePress Mermaid Renderer][]          | Mermaid diagram rendering for VitePress | [docs/.VitePress/theme/index.ts][]                                                                              |
| [VitePress-sidebar][]                   | Sidebar management for VitePress        | [docs/.VitePress/config.mts][]                                                                                  |
| [VitePress][]                           | Static site generator                   | [docs/.VitePress/config.mts][]                                                                                  |

[.cspell.json]: .cspell.json
[.markdownlint.json]: .markdownlint.json
[.prettierrc.json5]: .prettierrc.json5
[CSpell]: https://cspell.org/
[DavidingPlus/VitePress-image-viewer]: https://github.com/davidingplus/VitePress-image-viewer
[docs/.VitePress/theme/index.ts]: ./docs/.VitePress/theme/index.ts
[docs/public/pictogrammers/]: ./docs/public/pictogrammers/
[ImageViewerActivator.vue]: ./docs/.VitePress/theme/components/ImageViewerActivator.vue
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
[Pictogrammers Material Design Icons]: https://pictogrammers.com/library/mdi/
[pnpm-workspace.yaml]: ./pnpm-workspace.yaml
[pnpm]: https://pnpm.io/
[prettier]: https://prettier.io/
[VitePress Mermaid Renderer]: https://VitePress-mermaid-renderer.sametcc.me/
[VitePress-sidebar]: https://VitePress-sidebar.cdget.com/
