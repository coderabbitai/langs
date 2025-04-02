const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'css',
  treeSitterPackage: 'tree-sitter-css',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('.a { color: red; }')
    const root = sg.root()
    const node = root.find('$A { color: red; }')
    assert.equal(node.kind(), 'rule_set')
  },
})
