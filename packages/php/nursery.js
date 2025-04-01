const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'php',
  treeSitterPackage: 'tree-sitter-php',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
