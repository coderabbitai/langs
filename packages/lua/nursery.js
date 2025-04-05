const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'lua',
  treeSitterPackage: 'tree-sitter-lua',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('print("Hello World")')
    const root = sg.root()
    const node = root.find('print($S)')
    assert.equal(node.kind(), 'function_call')
  },
})
