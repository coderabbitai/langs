const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'css',
  treeSitterPackage: 'tree-sitter-css',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
