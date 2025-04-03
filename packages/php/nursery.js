const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')
const path = require('node:path')

setup({
  dirname: __dirname,
  name: 'php',
  treeSitterPackage: 'tree-sitter-php',
  src: path.join('php', 'src'),
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
