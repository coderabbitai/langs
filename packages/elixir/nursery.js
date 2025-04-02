const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'elixir',
  treeSitterPackage: 'tree-sitter-elixir',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('IO.puts("123")')
    const root = sg.root()
    const node = root.find('IO.puts("$A")')
    assert.equal(node.kind(), 'call')
  },
})
