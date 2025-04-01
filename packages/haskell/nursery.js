const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'haskell',
  treeSitterPackage: 'tree-sitter-haskell',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
