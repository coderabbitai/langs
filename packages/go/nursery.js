const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'go',
  treeSitterPackage: 'tree-sitter-go',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
