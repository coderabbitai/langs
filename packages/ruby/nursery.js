const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'ruby',
  treeSitterPackage: 'tree-sitter-ruby',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
