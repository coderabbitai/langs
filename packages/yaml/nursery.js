const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'yaml',
  treeSitterPackage: 'tree-sitter-yaml',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
