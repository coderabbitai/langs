const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['ex', 'exs'],
  languageSymbol: 'tree_sitter_elixir',
  expandoChar: 'µ',
}
