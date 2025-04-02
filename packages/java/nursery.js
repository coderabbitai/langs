const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')
const assert = require('node:assert')

setup({
  dirname: __dirname,
  name: 'java',
  treeSitterPackage: 'tree-sitter-java',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('int a = 123;')
    const root = sg.root()
    const node = root.find('int a = 123')
    assert.equal(node.kind(), 'local_variable_declaration')
  },
})
