const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'dart',
  treeSitterPackage: 'tree-sitter-dart',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
