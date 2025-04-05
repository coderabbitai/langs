const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'html',
  treeSitterPackage: 'tree-sitter-html',
  languageRegistration,
  testRunner: parse => {
    const sg = parse("<div class='foo'></div>")
    const root = sg.root()
    const node = root.find("<$TAG class='foo'>$$$</$TAG>")
    assert.equal(node.kind(), 'element')
  },
})
