const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'kotlin',
  treeSitterPackage: 'tree-sitter-kotlin',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
