const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['cjs', 'js', 'mjs', 'jsx'],
  languageSymbol: 'tree_sitter_javascript',
  expandoChar: '$',
}
