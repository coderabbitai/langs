const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')
const assert = require('node:assert')

setup({
  dirname: __dirname,
  name: 'c',
  treeSitterPackage: 'tree-sitter-c',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('int a = 123;')
    const root = sg.root()
    const node = root.find('$T $A = 123')
    assert.equal(node.kind(), 'declaration')
  },
})
