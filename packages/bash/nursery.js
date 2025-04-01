const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'bash',
  treeSitterPackage: 'tree-sitter-bash',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
