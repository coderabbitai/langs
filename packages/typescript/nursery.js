const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')
const path = require('node:path')

setup({
  dirname: __dirname,
  name: 'typescript',
  treeSitterPackage: 'tree-sitter-typescript',
  src: path.join('typescript', 'src'),
  languageRegistration,
  testRunner: parse => {
    // add test here
  },
})
