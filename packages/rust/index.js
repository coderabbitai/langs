const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['rs'],
  languageSymbol: 'tree_sitter_rust',
  expandoChar: 'µ',
}
