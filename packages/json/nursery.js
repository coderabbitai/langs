const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'json',
  treeSitterPackage: 'tree-sitter-json',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
