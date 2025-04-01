const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'scala',
  treeSitterPackage: 'tree-sitter-scala',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
