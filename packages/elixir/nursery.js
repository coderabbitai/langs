const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'elixir',
  treeSitterPackage: 'tree-sitter-elixir',
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
