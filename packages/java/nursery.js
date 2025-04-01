const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'java',
  treeSitterPackage: 'tree-sitter-java',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
