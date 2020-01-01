const marked = require('marked')
const decode = require('unescape')

const whitespace = ' '

const plainTextRenderer = new marked.Renderer()
plainTextRenderer.code = (code, infostring, escaped) => code + whitespace
plainTextRenderer.blockquote = (quote) => quote + whitespace
plainTextRenderer.heading = (text, level, raw, slugger) => text
plainTextRenderer.hr = () => whitespace
plainTextRenderer.list = (body, ordered, start) => body
plainTextRenderer.listitem = (text) => text + whitespace
plainTextRenderer.checkbox = (checked) => whitespace
plainTextRenderer.paragraph = (text) => text + whitespace
plainTextRenderer.table = (header, body) => header + whitespace + body + whitespace
plainTextRenderer.tablerow = (content) => content + whitespace
plainTextRenderer.tablecell = (content, flags) => content + whitespace
plainTextRenderer.strong = (text) => text
plainTextRenderer.em = (text) => text
plainTextRenderer.codespan = (code) => code
plainTextRenderer.br = () => whitespace
plainTextRenderer.del = (text) => text
plainTextRenderer.link = (href, title, text) => text
plainTextRenderer.image = (href, title, text) => whitespace
plainTextRenderer.text = (text) => text

const preprocess = (md) => {
  const limit = 251
  const tokens = marked.lexer(md)
  let markdown = ''
  let shouldStop = false
  for (token of tokens) {
    if (shouldStop || markdown.length > limit) break
    if (markdown !== '' && token.type === 'heading') shouldStop = true
    if (token.type !== 'heading' && token.text) {
      markdown = markdown + token.text.trim()
    }
    if (token.type === 'space' || token.type === 'hr' || token.type === 'br') {
      markdown = markdown + whitespace
    }
  }
  return markdown
}

const summarize = (content) => {
  const markdown = preprocess(content)
  const plainText = marked(markdown, { renderer: plainTextRenderer, sanitize: false })
  return decode(plainText)
}

module.exports = {
  summarize
}
