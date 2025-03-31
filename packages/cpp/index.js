const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: ['cc', 'hpp', 'cpp', 'hh', 'cxx', 'cu', 'ino'],
  languageSymbol: 'tree_sitter_cpp',
  expandoChar: '_',
}
