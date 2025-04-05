const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'rust',
  treeSitterPackage: 'tree-sitter-rust',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('fn test() { Some(123) }')
    const root = sg.root()
    const node = root.find('Some($A)')
    assert.equal(node.kind(), 'call_expression')
  },
})
