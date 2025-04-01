const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['css', 'scss'],
  languageSymbol: 'tree_sitter_css',
  expandoChar: '$',
}
