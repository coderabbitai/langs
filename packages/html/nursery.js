const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'html',
  treeSitterPackage: 'tree-sitter-html',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
