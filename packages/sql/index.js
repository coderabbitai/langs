const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['sql'],
  languageSymbol: 'tree_sitter_sql',
  expandoChar: '_',
}
