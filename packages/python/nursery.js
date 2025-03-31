const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')
const assert = require('node:assert')

setup({
  dirname: __dirname,
  name: 'python',
  treeSitterPackage: 'tree-sitter-python',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('a = 123')
    const root = sg.root()
    const node = root.find('$FIELD = 123')
    assert.equal(node.kind(), 'assignment')
  },
})
