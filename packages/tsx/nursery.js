const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')
const assert = require('node:assert')

setup({
  dirname: __dirname,
  name: 'tsx',
  treeSitterPackage: 'tree-sitter-typescript',
  src: 'tsx/src',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('<Button onClick={() => foo()}>Click me</Button>')
    const root = sg.root()
    const node = root.find('<$ELEMENT onClick={$HANDLER}>$$$</$ELEMENT>')
    assert.equal(node.kind(), 'jsx_element')
  },
})
