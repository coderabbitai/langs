const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'angular',
  treeSitterPackage: 'tree-sitter-angular',
  languageRegistration,
  testRunner: parse => {
    const a = parse('<div></div>')
    const b = a.root().find('<$TAG></$TAG>')
    console.log(b.kind(), b.getMatch('TAG').text())
  },
})
