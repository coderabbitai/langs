const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'haskell',
  treeSitterPackage: 'tree-sitter-haskell',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('let x = 3 in x + x')
    const root = sg.root()
    const node = root.find('let $A = $B in $A + $A')
    assert.equal(node.kind(), 'let_in')
  },
})
