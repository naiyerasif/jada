# jada [![Netlify Status](https://api.netlify.com/api/v1/badges/ab389147-4a61-4967-967c-a2d3c0020f98/deploy-status)](https://app.netlify.com/sites/gridsome-jada/deploys)

A blog starter for [Gridsome](https://gridsome.org/)

## Demo

<https://gridsome-jada.netlify.com>

[![Deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Microflash/jada)

## Features

- Accessible and fluid design
- Markdown support for blog content
- Table of contents for articles (with [remark-toc](https://github.com/remarkjs/remark-toc))
- Tags for articles
- Pagination for blog posts
- Contributor profiles (with [@gridsome/vue-remark](https://gridsome.org/plugins/@gridsome/vue-remark))
- Search for blog posts (with [Fuse.js](https://fusejs.io/) and [vue-fuse](https://github.com/shayneo/vue-fuse))
- Blurbs and Edit URL generation for blog posts
- Syntax highlighting (with [Shiki](https://github.com/octref/shiki))
- Dark and light themes with [Sass](https://sass-lang.com/) and theme-switching support
- SVGs as Vue components (with [svg-to-vue-component](https://github.com/egoist/svg-to-vue-component))
- RSS, Atom and JSON feeds (with [gridsome-plugin-feed](https://github.com/onecrayon/gridsome-plugin-feed))
- Sitemap (with [plugin-sitemap](https://github.com/gridsome/gridsome/tree/master/packages/plugin-sitemap))

## Installation

### Using Gridsome CLI

```sh
npx gridsome create my-blog https://github.com/Microflash/jada.git
```

Gridsome will remove `.git` directory and install dependencies for you.

### Using Git

Clone this repository.

```sh
git clone https://github.com/Microflash/jada.git my-blog

# navigate to the directory
cd my-blog

# remove the git folder
rm -rf .git

# install dependencies
npm install
```

### Using GitHub Templates

You can directly [generate](https://github.com/Microflash/jada/generate) a new project from this repository on GitHub.

## Documentation

### Configuration

- **[app.config.js](./app.config.js)** contains application-specific configuration, including
  - the `name`, `description`, `url`, `copyright` and `maintainer` of the application
  - the URL of the `favicon` (used by `gridsome-plugin-feed` to set a favicon in the generated XML file)
  - the `tocPattern`, a `regex` pattern, used by `remark-toc` to insert the table of contents in the blog posts
  - the `searchConfig` containing `file` (used to customize the location of search index generated during the build) and `options` (used to define the behavior of [`fuse`](https://fusejs.io/))
  - the `blogDir` pointing toward the location of the blog content
  - the `editConfig` that has configuration for edit URL generation
- **[marked.config.js](./marked.config.js)** contains 
  - `summarize` function that generates the blurbs for the blog posts
  - `stripTocRenderer` that strips the `tocPattern` from the markdown files while converting them to HTML. This HTML is then used to generate RSS feed.
- **[purgecss.config.js](./purgecss.config.js)** contains the [configuration](https://www.purgecss.com/configuration) for [purgecss](https://www.purgecss.com/) to strip down the unused CSS classes during the build
- **[gridsome.config.js](./gridsome.config.js)** contains the [project configuration](https://gridsome.org/docs/config/) for Gridsome
- **[gridsome.server.js](./gridsome.server.js)** contains the [server configuration](https://gridsome.org/docs/server-api/) for Gridsome

### Generating blurbs

`marked`'s lexer is used to generate the blurb for a blog post. Automatic blurb generation kicks in if no `blurb` field is provided in the frontmatter.

A global `clip` filter is available to dynamically trim the blurb length.

> By default, `clip` trims first 240 characters of a text. Optionally, it accepts a numeric value, e.g., `clip(200)`, to clip the specified number of characters.

### Generating Edit URLs

The `editConfig` key in [app.config.js](./app.config.js) provides an array of collection-specific configurations, including

- the `basePath` that defines the context of the Edit URL, and
- a `constructEditUrl` function that returns the Edit URL

> By default, `jada` generates the GitHub Edit URLs for `Post` collection with edit branch pointing to `master`.

### Search

Search is supported through [fuse](https://fusejs.io/). `jada` generates a `search.json` file on every build which is queried by [axios](https://github.com/axios/axios) in the browser. By default, search index is created from the post title and the blurb.

### Styles

`jada` uses SASS to generate styles, with optimizations to improve the readability of posts through [remarkability](https://mflash.dev/remarkability/). The color palette for dark and light themes have been carefully chosen to provide good accessibility. [Leonardo](https://github.com/adobe/leonardo) was used to generate the palettes.

### Gridsome

For Gridsome configurations and docs, check [Gridsome docs](https://gridsome.org/docs/).

## Appendix

### License

Licensed under [MIT](./LICENSE.md)

### Acknowledgements

This project is made possible thanks to the open-source community and the following projects and people.

- [Gridsome](https://gridsome.org/): a modern Vue.js framework for static websites (and more)
- [Gridsome Portfolio Starter](https://github.com/drehimself/gridsome-portfolio-starter): a simple portfolio starter for Gridsome 
- [Fuse.js](https://fusejs.io/): a lightweight fuzzy-search library
- [Shiki](https://github.com/octref/shiki): a beautiful syntax highlighter
- [Feather Icons](https://feathericons.com/): beautiful open-source icons
- [Remarkability](https://mflash.dev/remarkability/): the baseline css for HTML generated from markdown
- [Animate.css](https://github.com/daneden/animate.css): a cross-browser library of CSS animations
- [Grid By Example](https://gridbyexample.com/): a collection of examples and references on CSS Grid maintained by [Rachel Andrews](https://rachelandrew.co.uk/)
- [Leonardo](https://github.com/adobe/leonardo): an adaptive color scale generator developed by Adobe

### Notes

- `jada` is based on [Microflash](https://github.com/Microflash/microflash.github.io)
