# VitePress multilingual setup template

Starter template for multilingual VitePress documentation sites with English and Japanese examples.


## Table of contents <!-- omit in toc -->

* [About this repository](#about-this-repository)
* [Site structure and deployment](#site-structure-and-deployment)
* [Quick start](#quick-start)
* [Images in VitePress](#images-in-vitepress)
* [Project tools and dependencies](#project-tools-and-dependencies)


## About this repository

This template helps you create a multilingual documentation site with [VitePress][]. It includes internationalization setup so you can launch quickly.

This template ships with two languages:

* [docs/en][] for English (default)
* [docs/ja][] for Japanese
* [docs/snippets][] for reusable snippets

Use the Japanese folder structure as a reference when you add more languages.

[VitePress]: https://VitePress.dev/guide/what-is-VitePress
[docs/en]: ./docs/en/
[docs/ja]: ./docs/ja/
[docs/snippets]: ./docs/snippets/


## Site structure and deployment

The site uses [VitePress][] with separate configs per language.

* Site-wide config: [docs/.vitepress/config.mts][]
* English-specific (default) site config: [docs/config.ts][]
* English homepage: [docs/en/index.md][]
* Japanese-specific site config: [docs/ja/config.ts][]
* Japanese homepage: [docs/ja/index.md][]

[docs/.vitepress/config.mts]: ./docs/.vitepress/config.mts
[docs/config.ts]: ./docs/config.ts
[docs/en/index.md]: ./docs/en/index.md
[docs/ja/config.ts]: ./docs/ja/config.ts
[docs/ja/index.md]: ./docs/ja/index.md


## Quick start

Install dependencies from the project root.

```shell
pnpm install

# Upgrade pnpm
pnpm add -D pnpm@latest

# Upgrade all dependencies
pnpm up -latest
```

Start the local development server.

```shell
pnpm docs:dev
```

Build the static site.

```shell
pnpm docs:build
```


## Images in VitePress

You can add images in two ways:

1. Public folder method: store assets in [public/][public-folder] for direct references.
2. Reference method: keep images beside Markdown files and link to them with relative paths.

Use **Public folder method** for images and other assets that are:

* Used across multiple docs. (_Example: logos_)
* Large file sizes that may impact loading times. (_Example: videos_)
* Static assets that are not directly referenced in markdown files. (_Example: `robots.txt` and favicon_)

For details, see the [asset handling guide][asset-handling-doc] in the VitePress documentation.

[public-folder]: ./docs/public/
[asset-handling-doc]: https://vitepress.dev/guide/asset-handling


## Project tools and dependencies

This repository uses the following tools and dependencies:

| Tool                                    | Purpose                                 | Config file                                                                                                     |
| --------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [CSpell][]                              | Spell checking                          | [.cspell.json][]                                                                                                |
| [DavidingPlus/VitePress-image-viewer][] | Image viewer with zoom and captions     | [docs/.vitepress/theme/index.ts][] and [../theme/components/ImageViewerActivator.vue][ImageViewerActivator.vue] |
| [markdownlint-cli2][]                   | Markdown linting                        | [.markdownlint.json][]                                                                                          |
| [MingCute Icon][]                       | Icon library                            | [docs/public/mingcute/][]                                                                                       |
| [pnpm][]                                | Package manager                         | [pnpm-workspace.yaml][]                                                                                         |
| [prettier][]                            | Code formatter                          | [.prettierrc.json5][]                                                                                           |
| [VitePress Mermaid Renderer][]          | Mermaid diagram rendering for VitePress | [docs/.vitepress/theme/index.ts][]                                                                              |
| [VitePress-sidebar][]                   | Sidebar management for VitePress        | [docs/.vitepress/config.mts][]                                                                                  |
| [VitePress][]                           | Static site generator                   | [docs/.vitepress/config.mts][]                                                                                  |

[.cspell.json]: .cspell.json
[.markdownlint.json]: .markdownlint.json
[.prettierrc.json5]: .prettierrc.json5
[CSpell]: https://cspell.org/
[DavidingPlus/VitePress-image-viewer]: https://github.com/davidingplus/VitePress-image-viewer
[docs/.vitepress/theme/index.ts]: ./docs/.vitepress/theme/index.ts
[docs/public/mingcute/]: ./docs/public/mingcute/
[ImageViewerActivator.vue]: ./docs/.vitepress/theme/components/ImageViewerActivator.vue
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
[pnpm-workspace.yaml]: ./pnpm-workspace.yaml
[pnpm]: https://pnpm.io/
[prettier]: https://prettier.io/
[VitePress Mermaid Renderer]: https://VitePress-mermaid-renderer.sametcc.me/
[VitePress-sidebar]: https://VitePress-sidebar.cdget.com/
[MingCute Icon]: https://www.mingcute.com/
