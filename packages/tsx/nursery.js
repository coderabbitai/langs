const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'tsx',
  treeSitterPackage: 'tree-sitter-tsx',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
