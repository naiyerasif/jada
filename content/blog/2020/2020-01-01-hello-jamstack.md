---
title: 'Hello, JAMstack!'
date: 2020-01-01 10:15:15
authors: [jada]
tags: ['article', 'jamstack']
---

JAM stands for JavaScript, API & Markup. According to Mathias Biilmann (CEO & Co-founder of [Netlify](https://www.netlify.com/)), 

> [JAMstack is] a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

A JAMstack app can be built using by hand, or with [Gridsome](https://gridsome.org), Jekyll, Hugo, Nuxt, Next, Gatsby, or another static site generator. The idea is to serve pre-rendered (static) files over a CDN, thus eliminating any need for a web server. This is a departure from traditional ways of building web apps which typically involved a server-side CMS or a server rendering the content at runtime.

### Table of Contents

## JAMstack traits

- **Better Performance** Since all the assets can be pre-generated, they can be served over CDN. This provides better performance and easier scalability. 
- **Atomic Deploys** Each deploy is a full snapshot of the site. This helps guarantee a consistent version of the site globally.
- **Cache Invalidation** Once your build is uploaded, the CDN invalidates its cache. This means that your new build is live in an instant.
- **Version Control** Your codebase lives in Version Control System, such as Git. The main benefits are: change history of every file, collaborators and traceability.
- **Automated Builds** Your server is notified when a new build is required, typically via webhooks. Server builds the project, updates the CDNs and the site is live.

## State of JAMstack in 2020

JAMstack started out as an alternative approach to build content heavy web applications. It has grown out of this niche though. The rise of serverless computing and headless CMS has diversified the usecases of JAMstack apps with integrated shopping store and payment, interactive forms and live chats, user management, and so on.

The general-purpose heavyweights of frontend &mdash; [Angular](https://angular.io/), [Vue.js](https://vuejs.org/), [React](https://reactjs.org/) &mdash; offer this approach. New frameworks specifically developed for JAMstack ([Vuepress](https://vuepress.vuejs.org/), [Gridsome](https://gridsome.org/), [Gatsby](https://www.gatsbyjs.org), [11ty](https://www.11ty.dev), etc, to name a few) are implementing these usecases and pushing the boundary what could be possible with JAMstack. There's a rise of headless CMSes for backend functionalities; some of them even allow static site generation out-of-the-box.

The deployment of JAMstack sites has never been easier and cheaper. [GitHub Pages](https://pages.github.com/) with [GitHub Actions](https://github.com/features/actions), [GitLab](https://gitlab.com/) with GitLab CI, [Netlify](https://www.netlify.com/), [Zeit](https://zeit.co/now), etc provide excellent build and deployment workflows at inexpensive pricing.

At this point, the JAMstack sites aren’t static anymore.

## Resources

- Awesome JAMstack: <https://github.com/automata/awesome-jamstack>
- WTF is JAMstack? <https://jamstack.wtf/>
- Netlify blog: <https://www.netlify.com/blog/>
- Snipcart blog: <https://snipcart.com/blog/jamstack>
