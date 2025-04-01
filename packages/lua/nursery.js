const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'lua',
  treeSitterPackage: 'tree-sitter-lua',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
