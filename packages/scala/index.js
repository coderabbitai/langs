const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['scala', 'sc', 'sbt'],
  languageSymbol: 'tree_sitter_scala',
  expandoChar: '$',
}
