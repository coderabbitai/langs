const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'scala',
  treeSitterPackage: 'tree-sitter-scala',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('val a = 0')
    const root = sg.root()
    const node = root.find('val $A = 0')
    assert.equal(node.kind(), 'val_definition')
  },
})
