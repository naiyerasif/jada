---
title: 'An Introduction to Markdown'
date: 2019-11-29 09:23:11
authors: [jada]
tags: ['guide', 'markdown']
---

Markdown is a *plain text formatting syntax*, developed by John Gruber. To create a markdown document, all you need is a text editor and have some grasp over it's syntax. You might wonder why you should bother with the markdown, since your favorite word processor can cater most of the formatting needs.

According to [John Gruber](https://daringfireball.net/projects/markdown/),

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.

Apart from that, markdown lets you to keep your hands on the keyboard and keep typing without breaking the flow; no need to write something and then reach out to click on a button to format the content. 

## A tour of Markdown syntax

### Headings

You can create 6 levels of headings using the following syntax. This syntax for formatting the headings is called the *atx syntax*.

```markdown
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
```

You can also create 2 levels of headings using an alternative **setext syntax**.

```markdown
Header level 1
==============

Header level 2
--------------
```

### Emphasis and Strikethrough

You can emphasize a text using underscores `_` or asterisks `*` with the following syntax.

```markdown
*italic* or _italic_
**bold** or __bold__
***bold italic*** or ___bold italic___
```

You can strikethrough a text using tilde `~`.

```markdown
~~strikethrough text~~
```

### Links

You can create links with the following syntax.

```markdown
[DuckDuckGo](https://duckduckgo.com)
```

You can optionally add the title for the link as follows.

```markdown
[DuckDuckGo](https://duckduckgo.com 'DuckDuckGo')
```

Any simple linke in the text like `https://duckduckgo.com` will automatically get converted to a clickable link.

### Images

The syntax for images is pretty similar to that for the links.

```markdown
![DuckDuckGo](https://duckduckgo.com/assets/logo_header.alt.v108.svg)
```

You can even add an `alt` text for the image using this:

```markdown
![DuckDuckGo](https://duckduckgo.com/assets/logo_header.alt.v108.svg 'DuckDuckGo')
```

Even more, you can nest an image within a link.

```markdown
[![DuckDuckGo](https://duckduckgo.com/assets/logo_header.alt.v108.svg)](https://duckduckgo.com 'DuckDuckGo')
```

### Lists

To create an unordered list, put a dash `-`, asterisk `*` or plus `+` symbol in the beginning of the list item followed by a space.

```markdown
- Apples
- Oranges
- Peaches
```

For an ordered list, use numbers.

```markdown
1. Apples
2. Oranges
3. Peaches
```

To nest a list within another, indent them with tabs (or 4 spaces).

```markdown
- Fruits
  1. Apples
  2. Oranges
  3. Peaches
- Vegetables
  + Okra
  + Lettuce
```

### Blockquotes

To create a blockquote, start the line with greater than `>` symbol. If the quote spans multiple lines, start each line with `>`.

```markdown
> With great power comes great accountability.
> And huge responsibility!
```

You can nest lists and even blockquotes within blockquotes. Just add a tab (or 4 spaces) after `>`.

```markdown
> With great power comes great accountability.
> And huge responsibility!
> So buy the following fruits while you swing by the market:
> - Apples
> - Oranges
> - Peaches
```

### Horizontal rules and newlines

To create a horizontal rule, add atleast 3 dashes on a separate line.

```markdown
Paragraph before a horizontal rule

---

Paragraph after the horizontal rule
```

Sometimes, you might need to *force* a new line. You can do so by adding 2 spaces at the end of the line.

### Code and codeblocks

To mark a text as code, wrap it in backticks.

```markdown
`code`
```

To mark a piece of code that spans multiple lines, use code fences (3 backticks followed by code and ending with 3 backticks). You can use more than 3 backticks but keep them consistent.

````markdown
```java
public static void main(String... args) {
  System.out.println("Hello, world!");
}
```
````

You can mention the language used for the code alongside the opening backticks. Paired with a syntax highlighter like [Prism](https://prismjs.com/), your editor can paint the code in a nice color scheme.

## Need more?

Curious to know more about markdown? Check out the following resources:

- Markdown: <https://daringfireball.net/projects/markdown/>
- Awesome Markdown: <https://github.com/BubuAnabelas/awesome-markdown>
