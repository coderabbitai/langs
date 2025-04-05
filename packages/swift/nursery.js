const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'swift',
  treeSitterPackage: 'tree-sitter-swift',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('println("123")')
    const root = sg.root()
    const node = root.find('println("123")')
    assert.equal(node.kind(), 'call_expression')
  },
})
