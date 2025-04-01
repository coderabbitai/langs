const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'rust',
  treeSitterPackage: 'tree-sitter-rust',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
