const { existsSync } = require('node:fs')
const { join } = require('node:path')

const platforms = { darwin: 'macOS', linux: 'Linux', win32: 'Windows' }
const architectures = { arm64: 'ARM64', x64: 'X64' }
const local = join(__dirname, 'parser.so')

module.exports = {
  libraryPath: existsSync(local)
    ? local
    : join(
        __dirname,
        'prebuilds',
        `prebuild-${platforms[process.platform]}-${architectures[process.arch]}`,
        'parser.so',
      ),
  extensions: ['cmake'],
  languageSymbol: 'tree_sitter_cmake',
}
