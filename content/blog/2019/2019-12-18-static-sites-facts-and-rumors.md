---
title: 'Static Sites: facts and rumors'
date: 2019-12-18 16:43:37
authors: [jada]
tags: ['article', 'ssg']
---

A typical CMS-driven website works by building each page on-demand, fetching content from a database and running it through a template engine. This means each page is assembled from templates and content on each request to the server. For most sites this is completely unnecessary overhead and only adds complexity, performance problems and security issues. After all, by far the most websites only change when the content authors or their design team makes changes. 

A static site generator takes a different approach and generates all the pages of the website once when there's actually changes to the site. This means there's no moving parts in the deployed website. Caching gets much easier, performance goes up and static sites are far more secure.

## Facts

The benefits of static sites are manifold.
- Static content can be cached and viewed offline.
- Accessing the content is fast.
- Static sites are pretty secure. Besides the file server, there's not much to get compromised.
- Infrastructure requirements of static sites is drastically low.
- If the visitor count rises, static sites scale effortlessly.

There are a few downsides as well.
- With great flexibility of a static site generator, comes a high cost of just getting started. Setup and build processes and day-to-day management of such an application can be daunting.
- Adding dynamic content is not a primary concern for many of the static site generators; to do so is a bit of work.
- Lack of a graphical user interfaces to manage the content and configuration.

## Rumors

- **Static sites cannot be dynamic.** With the rise of serverless backends and capable SPA frameworks, integrating a dynamic functionality has become possible. Some of the service providers (like [Netlify](https://www.netlify.com/)) make this even easier by offering tailor-made services for dynamic functionalities like authentication/authorization, forms, comment systems, etc.
- **There's no GUI or CMS available for static sites.** There are. [Forestry](https://forestry.io/), [Strapi](https://strapi.io/), [Ghost](https://ghost.org/), etc offer excellent interfaces for CMS for static content and more.

## Resources

- StaticGen: <https://www.staticgen.com>
- Awesome Static Site Generators: <https://github.com/myles/awesome-static-generators>
