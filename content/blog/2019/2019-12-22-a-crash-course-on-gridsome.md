---
title: 'A Crash Course on Gridsome'
date: 2019-12-22 15:55:12
authors: [jada]
tags: ['course', 'gridsome']
---

[Gridsome](https://gridsome.org/) is a Vue.js based framework to build websites and apps (like *this* one!) using markdown. It simplifies the process by offering an easy workflow to connect to data sources &mdash; JSON or markdown files, relational databases, headless CMSes or serverless backend &mdash; you name it. With the speed and approachability offered by Vue.js, you can use Gridsome to extend and customize it to build blogs, documentation, portfolio and more.

## Why Gridsome?

- Simple and approachable
- Pleasant development workflow with familiar webpack-based tooling
- Powerful routing base on single-file components
- Options to connect with a variety of data sources (markdown, APIs, databases, to name a few)
- GraphQL data layer with an inbuilt playground
- Static file generation (with ability to generate PWAs)
- Automatic code splitting
- Community-driven plugin ecosystem

## Get Started

To quickly create a Gridsome project, follow these steps:

1. Open your terminal (or command line) and execute `npx gridsome create my_gridsome_app`
2. Gridsome will create a simple application for you. `cd my_gridsome_app` to switch to the folder.
3. Execute `npx gridsome develop` to launch the application. Access it at <http://localhost:8080>

### Next steps

- Check out the [basics](https://gridsome.org/docs/core-concepts/) to get your way around the app.
- To generate a build, execute `npx gridsome build` which will dump the build in `dist` directory by default.
- To add functionality, check out the [plugins](https://gridsome.org/plugins/).
- There's a [deployment guide](https://gridsome.org/docs/deploy-to-netlify/) as well to help you on how you can host and deploy your app.

## Resources

- Official Gridsome site: <https://gridsome.org>
- Gridsome Blog: <https://gridsome.org/blog/>
- GitHub repository: <https://github.com/gridsome/gridsome>
- Awesome Gridsome: <https://github.com/LokeCarlsson/awesome-gridsome>
