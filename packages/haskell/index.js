const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['hs'],
  languageSymbol: 'tree_sitter_haskell',
  expandoChar: 'µ',
}
