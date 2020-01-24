# jada [![Netlify Status](https://api.netlify.com/api/v1/badges/ab389147-4a61-4967-967c-a2d3c0020f98/deploy-status)](https://app.netlify.com/sites/gridsome-jada/deploys)

A practical blog starter for [Gridsome](https://gridsome.org/)

## Demo

<https://gridsome-jada.netlify.com>

[![Deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Microflash/jada)

## Features

- [x] Accessible and responsive design
- [x] Support for blogging with markdown content
- [x] Table of contents for blog posts
- [x] Tags for blog posts
- [x] Pagination for blog posts
- [x] Author profiles with [@gridsome/vue-remark](https://gridsome.org/plugins/@gridsome/vue-remark)
- [x] Search with [Fuse.js](https://fusejs.io/) and [vue-fuse](https://github.com/shayneo/vue-fuse)
- [x] Automated blurb generation for posts
- [x] GitHub URL generation for blog posts
- [x] Syntax highlighting with [Shiki](https://github.com/octref/shiki)
- [x] [Sass](https://sass-lang.com/) integration
- [x] Theme Switcher for Dark and Light modes
- [x] Import SVGs as Vue components with [svg-to-vue-component](https://github.com/egoist/svg-to-vue-component)
- [x] Support for RSS, Atom and JSON feeds
- [x] Custom 404 page
- [x] Sitemap in XML

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

- [site.json](./data/site.json) contains the following configurations:
  - `name`, `description`, `url`, `maintainer`: the name, description, url and maintainer of your blog. This configuration is used by Gridsome and its plugins.
  - `favicon`: the URL of the favicon of your blog; used by `gridsome-plugin-feed` to set a favicon in the generated XML file.
  - `tocPattern`: a `regex` pattern used to insert the table of contents in the blog posts; required by `remark-toc`. This configuration is also being used while generating the blurbs for the posts.
  - `searchConfig`: contains `file` and `options` objects. `file` is used to customize the location of search index generated during build. `options` are the options to define the behavior of `fuse`. You can find the exhaustive list of options for `fuse` [here](https://fusejs.io/).
- [app.config.js](./app.config.js) contains functions and objects required at build time.
  - `copyright`: the copyright text generated using `name` (from `site.json`) and current year
  - `blogDir`: the location of your blog content
  - `editConfig`: this object contains configuration to generate edit URL for every collection; by default, `jada` has the configuration for GitHub edit URL generation for `Post` collection.
- [marked.config.js](./marked.config.js) contains `summarize` function that generates the blurbs for posts and `stripTocRenderer` that strips the `tocPattern` from the markdown files while converting them to HTML. This HTML is then used to generate RSS feed.
- [purgecss.config.js](./purgecss.config.js): the [configuration file](https://www.purgecss.com/configuration) for [purgecss](https://www.purgecss.com/) to strip down the unused CSS classes during the build.
- [gridsome.config.js](./gridsome.config.js): the [project configuration](https://gridsome.org/docs/config/) file for Gridsome. This is where the various plugins are configured.
- [gridsome.server.js](./gridsome.server.js): the [server configuration](https://gridsome.org/docs/server-api/) file for Gridsome. This file is used to customize the hooks to generate search index and add additional fields to `Post` collection.

### Blurb Generation

`marked`'s lexer is used to generate the blurb for a blog post. You can override this by adding a `blurb` field in the frontmatter. You can also customize the function in the [marked.config.js](./marked.config.js).

There's a `clip` filter available in [main.js](./src/main.js) that you can use to display a part of your blurb on the list of posts. This is useful when the blurbs are too long.

### Edit URL Generation

The configuration for edit URL generation resides in [app.config.js](./app.config.js). By default, `jada` generates the GitHub edit URL for `Post` collection with edit branch pointing to `master`.

### Search

Search is supported through [fuse](https://fusejs.io/). `jada` generates a `search.json` file on every build which is queried by [axios](https://github.com/axios/axios) in the browser. By default, search index is created from the post title and the blurb.

### Styles

`jada` uses SASS to generate styles, with optimizations to improve the readability of posts through [remarkability](https://mflash.dev/remarkability/). The color palette for dark and light themes have been carefully chosen to provide good accessibility. [Leonardo](https://github.com/adobe/leonardo) and [Happy Hues](https://www.happyhues.co/) were used to generate the palette.

### Gridsome

For Gridsome configurations and docs, check [Gridsome docs](https://gridsome.org/docs/).

## License

Licensed under [MIT](./LICENSE.md).

---

## Footnotes

### Acknowledgements
 
This project would not have been possible without the open-source community, in general, and the following projects and people, in particular (not in any specific order):

- [Gridsome](https://gridsome.org/): a modern Vue.js framework for static websites (and more)
- [Gridsome Portfolio Starter](https://github.com/drehimself/gridsome-portfolio-starter): a simple portfolio starter for Gridsome 
- [Fuse.js](https://fusejs.io/): a lightweight fuzzy-search library
- [Shiki](https://github.com/octref/shiki): a beautiful syntax highlighter
- [Feather Icons](https://feathericons.com/): beautiful open-source icons
- [Remarkability](https://mflash.dev/remarkability/): the baseline css for HTML generated from markdown
- [Hamburgers](https://github.com/jonsuh/hamburgers): a collection of tasty CSS-animated hamburger icons
- [Animate.css](https://github.com/daneden/animate.css): a cross-browser library of CSS animations
- [Grid By Example](https://gridbyexample.com/): a collection of examples and references on CSS Grid maintained by [Rachel Andrews](https://rachelandrew.co.uk/)
- [Leonardo](https://github.com/adobe/leonardo): an adaptive color scale generator developed by Adobe
- [Happy Hues](https://www.happyhues.co/): a collection of color palettes by [Mackenzie Child](https://www.mackenziechild.me/)

### Postscript

- `jada` is based on [Microflash](https://github.com/Microflash/microflash.github.io).
- Illustrations are from [Lively Panoramas](https://github.com/Microflash/lively-panoramas), an up-and-coming open-source vector illustrations pack.
