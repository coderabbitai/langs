const path = require('node:path')
const libPath = path.join(__dirname, 'parser.so')

module.exports = {
  libraryPath: libPath,
  extensions: [
    'bash',
    'bats',
    'cgi',
    'command',
    'env',
    'fcgi',
    'ksh',
    'sh',
    'tmux',
    'tool',
    'zsh',
  ],
  languageSymbol: 'tree_sitter_bash',
  expandoChar: '$',
}
