const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'swift',
  treeSitterPackage: 'tree-sitter-swift',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
