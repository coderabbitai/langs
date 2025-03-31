const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')
const assert = require('node:assert')

setup({
  dirname: __dirname,
  name: 'csharp',
  treeSitterPackage: 'tree-sitter-c-sharp',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('var a = 123;')
    const root = sg.root()
    const node = root.find('var $A = 123')
    assert.equal(node.kind(), 'variable_declaration')
  },
})
