const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'bash',
  treeSitterPackage: 'tree-sitter-bash',
  languageRegistration,
  testRunner: parse => {
    const sg = parse('echo test')
    const root = sg.root()
    const node = root.find('echo $A')
    assert.equal(node.kind(), 'command')
  },
})
