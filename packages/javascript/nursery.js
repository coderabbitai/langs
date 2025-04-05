const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'javascript',
  treeSitterPackage: 'tree-sitter-javascript',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('const a = 123')
    const root = sg.root()
    const node = root.find('const $A = 123')
    assert.equal(node.kind(), 'lexical_declaration')
  },
})
