const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'dart',
  treeSitterPackage: 'tree-sitter-dart',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('var a = 123;')
    const root = sg.root()
    const node = root.find('a')
    assert.equal(node.kind(), 'identifier')
  },
})
