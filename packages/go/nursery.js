const { setup } = require('@ast-grep/nursery')
const assert = require('node:assert')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'go',
  treeSitterPackage: 'tree-sitter-go',
  languageRegistration,
  testRunner: parse => {
    const sg = parse(`func plus(a int, b int) int {
	return a + b
}`)
    const root = sg.root()
    const node = root.find('func $A($$$) $B { $$$ }')
    assert.equal(node.kind(), 'function_declaration')
  },
})
