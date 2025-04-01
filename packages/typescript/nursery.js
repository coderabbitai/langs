const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'typescript',
  treeSitterPackage: 'tree-sitter-typescript',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
