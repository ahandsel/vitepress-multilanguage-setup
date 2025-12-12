# VitePress multilingual setup template


## Table of contents <!-- omit in toc -->

* [About this repository](#about-this-repository)
* [Site structure and deployment](#site-structure-and-deployment)
* [Quick start](#quick-start)
* [Images in VitePress](#images-in-vitepress)
* [Project tools and dependencies](#project-tools-and-dependencies)


## About this repository

This is a template repository for creating a multilingual documentation site using VitePress.  
VitePress is a minimalistic static site generator built on top of Vite and Vue.js, designed for creating documentation websites with ease. It supports internationalization (i18n) features but requires a bit of setup.  
I hope this template helps you get started with your own multilingual documentation site easily!

This template has two languages set up:

* [docs/en](./docs/en/) for English (default)
* [docs/ja](./docs/ja/) for Japanese
* [docs/snippets](./docs/snippets/) for reusable doc snippets

Reference the Japanese folder structure for adding more languages.


## Site structure and deployment

The website is built using [VitePress](https://VitePress.dev/).

* Site-wide config is in [.VitePress/config.mts](./docs/.VitePress/config.mts)
* English-specific (default) site config is in [en/config.ts](./docs/config.ts)
* English homepage is in [en/index.md](./docs/en/index.md)
* Japanese-specific site config is in [ja/config.ts](./docs/ja/config.ts)
* Japanese homepage is in [ja/index.md](./docs/ja/index.md)


## Quick start

Install dependencies (from project root directory)

```shell
pnpm install

# Upgrading pnpm
pnpm add -D pnpm@latest

# Upgrading all dependencies
pnpm up -latest
```

Start local development server

```shell
pnpm docs:dev
```

Build the static site

```shell
pnpm docs:build
```


## Images in VitePress

There are two ways to add images to your VitePress documentation:

1. Public folder method: store images in the [public/][] folder for direct referencing.
1. Reference method: store images like the Markdown files and reference them relatively.

Public folder method is recommended for images and other assets that are:

* Used across multiple docs. (_Example: logos_)
* Large file sizes that may impact loading times. (_Example: videos_)
* Static assets that are not directly referenced in markdown files. (_Example: `robots.txt` and favicon_)

For more information, see [Asset Handling doc on VitePress.dev](https://vitepress.dev/guide/asset-handling)

[public/]: ./docs/public/


## Project tools and dependencies

This repository uses the following tools and dependencies:

| Tool                                    | Purpose                                 | Config file                                                    |
| --------------------------------------- | --------------------------------------- | -------------------------------------------------------------- |
| [DavidingPlus/VitePress-image-viewer][] | Image viewer with zoom and captions     | [.VitePress/theme/index.ts][] and [ImageViewerActivator.vue][] |
| [Pictogrammers Material Design Icons][] | Icon library                            | [public/pictogrammers/][]                                      |
| [pnpm](https://pnpm.io/)                | Package manager                         | [pnpm-workspace.yaml](pnpm-workspace.yaml)                     |
| [prettier](https://prettier.io/)        | Code formatter                          | [.prettierrc.json5](.prettierrc.json5)                         |
| [VitePress Mermaid Renderer][]          | Mermaid diagram rendering for VitePress | [.VitePress/theme/index.ts][]                                  |
| [VitePress-sidebar][]                   | Sidebar management for VitePress        | [.VitePress/config.mts][]                                      |
| [VitePress][]                           | Static site generator                   | [.VitePress/config.mts][]                                      |
| [markdownlint-cli2][]                   | Markdown linting                        | [.markdownlint.json](.markdownlint.json)                       |
| [CSpell][]                              | Spell checking                          | [.cspell.json](.cspell.json)                                   |

[.VitePress/config.mts]: ./docs/.VitePress/config.mts
[.VitePress/theme/index.ts]: ./docs/.VitePress/theme/index.ts
[DavidingPlus/VitePress-image-viewer]: https://github.com/davidingplus/VitePress-image-viewer
[ImageViewerActivator.vue]: ./docs/.VitePress/theme/components/ImageViewerActivator.vue
[Pictogrammers Material Design Icons]: https://pictogrammers.com/library/mdi/
[public/pictogrammers/]: ./docs/public/pictogrammers/
[VitePress Mermaid Renderer]: https://VitePress-mermaid-renderer.sametcc.me/
[VitePress-sidebar]: https://VitePress-sidebar.cdget.com/
[VitePress]: https://VitePress.dev/guide/what-is-VitePress
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
[CSpell]: https://cspell.org/
