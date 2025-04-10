const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')
const path = require('node:path')

setup({
  dirname: __dirname,
  name: 'tsx',
  treeSitterPackage: 'tree-sitter-typescript',
  src: path.join('tsx', 'src'),
  languageRegistration,
  testRunner: parse => {
    const sg = parse('<Button onClick={() => foo()}>Click me</Button>')
    const root = sg.root()
    const node = root.find('<$ELEMENT onClick={$HANDLER}>$$$</$ELEMENT>')
    assert.equal(node.kind(), 'jsx_element')
  },
})
