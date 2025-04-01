const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'javascript',
  treeSitterPackage: 'tree-sitter-javascript',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
