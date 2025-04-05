const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['java'],
  languageSymbol: 'tree_sitter_java',
  expandoChar: '$',
}
