const { setup } = require('@ast-grep/nursery')
const toml = require('./index')
const assert = require('node:assert')

setup({
  dirname: __dirname,
  name: 'toml',
  treeSitterPackage: '@tree-sitter-grammars/tree-sitter-toml',
  languageRegistration: toml,
  testRunner: parse => {
    const sg = parse('name = "Tom"')
    const root = sg.root()
    const pair = root.find('$NAME = "Tom"')
    assert.equal(pair.kind(), 'pair')
  },
})
